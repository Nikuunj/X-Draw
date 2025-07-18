"use client";

import { useRef, useEffect, useState } from "react";
import { features, fetureType } from "@/data/feature";
import TitleAnswer from "../ui/TitleAnswer";
import TitleQuestion from "../ui/TitleQuestion";
import FeatureCard from "../ui/FeatureCard";

type Position = { x: number; y: number };

export default function SecondSection() {
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
    const svgRef = useRef<SVGSVGElement>(null);
    const [paths, setPaths] = useState<string[]>([]);

    const createWavePath = (from: Position, to: Position) => {
        const dx = to.x - from.x;
        const dy = to.y - from.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Adaptive curve height based on distance and screen size
        const curveHeight = Math.min(50, distance * 0.2);
        
        // Control points for smoother curves
        const cp1x = from.x + dx * 0.3;
        const cp1y = from.y - curveHeight;
        const cp2x = from.x + dx * 0.7;
        const cp2y = to.y - curveHeight;
        
        return `M ${from.x} ${from.y} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${to.x} ${to.y}`;
    };

    const updatePaths = () => {
        const svgBox = svgRef.current?.getBoundingClientRect();
        if (!svgBox) return;

        // Filter out null elements and get valid positions
        const positions: Position[] = cardRefs.current
        .map((el, index) => {
            if (!el) return null;

            const rect = el.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2 - svgBox.left;
            const centerY = rect.top + rect.height / 2 - svgBox.top;

            // Check if we're in mobile/tablet view (single column)
            const isMobile = window.innerWidth < 768;
            
            if (isMobile) {
            // For mobile: connect from bottom center to top center
            return {
                x: centerX,
                y: index === 0 ? centerY + rect.height / 4 : centerY - rect.height / 4,
            };
            } else {
            // For desktop: connect from right edge to left edge (zigzag pattern)
            const isLeftCol = (index % 2 === 0);
            return {
                x: isLeftCol 
                ? rect.left + rect.width - svgBox.left - 20  // Right edge of left col
                : rect.left - svgBox.left + 20,              // Left edge of right col
                y: centerY,
            };
            }
        })
        .filter((pos): pos is Position => pos !== null); // Type guard to remove nulls

        const newPaths: string[] = [];
        for (let i = 0; i < positions.length - 1; i++) {
            const from = positions[i];
            const to = positions[i + 1];
            if (from && to) {
                newPaths.push(createWavePath(from, to));
            }
        }

        setPaths(newPaths);
    };

    useEffect(() => {
        // Delay initial update to ensure DOM is ready
        const timer = setTimeout(updatePaths, 100);
        
        const handleUpdate = () => {
        requestAnimationFrame(updatePaths);
        };

        window.addEventListener("resize", handleUpdate);;
        
        return () => {
        clearTimeout(timer);
        window.removeEventListener("resize", handleUpdate);
        };
    }, []);

    return (
            <div className="relative flex flex-col justify-center md:mt-0 space-y-10">
                {/* Wavy SVG Paths */}
                <svg
                    ref={svgRef}
                    className="absolute top-0 left-0 w-full h-full pointer-events-none z-10"
                >
                    <defs>
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                        <feMerge> 
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                    </filter>
                    </defs>
                    {paths.map((path, idx) => (
                        <g key={idx}>
                            {/* Outer glow layer */}
                            <path
                            d={path}
                            fill="none"
                            stroke="#00d4ff"
                            strokeWidth={4}
                            strokeOpacity={0.3}
                            style={{ 
                                filter: "blur(4px)",
                                strokeDasharray: "5,3",
                                animation: "dash 2s linear infinite"
                            }}
                            />
                            {/* Middle glow layer */}
                            <path
                            d={path}
                            fill="none"
                            stroke="#00a8cc"
                            strokeWidth={3}
                            strokeOpacity={0.6}
                            style={{ 
                                filter: "blur(2px)",
                                strokeDasharray: "5,3",
                                animation: "dash 2s linear infinite"
                            }}
                            />
                            {/* Main line */}
                            <path
                            d={path}
                            fill="none"
                            stroke="#00d4ff"
                            strokeWidth={2}
                            strokeOpacity={0.9}
                            style={{ 
                                filter: "drop-shadow(0 0 6px rgba(0, 212, 255, 0.5))",
                                strokeDasharray: "5,3",
                                animation: "dash 2s linear infinite"
                            }}
                            />
                        </g>
                    ))}
            </svg>

            <style jsx>{`
                @keyframes dash {
                to {
                    stroke-dashoffset: -16;
                }
                }
            `}</style>

            <div className="space-y-5 flex flex-col items-center z-30 relative">
                <TitleQuestion
                startNormalText="Why choose"
                midColorText="XDraw"
                lastNormalText="?"
                />
                <TitleAnswer text="Everything you need to bring your ideas to life, with the simplicity and power you deserve." />
            </div>
            <div className="mx-auto z-20 relative">
                <div className="flex flex-wrap justify-center gap-x-36 gap-y-16 max-w-3xl">
                {features.map((feature: fetureType, index) => (
                    <div
                    key={index + feature.title}
                    ref={(el) => {cardRefs.current[index] = el}}
                    className={`relative z-30 w-[300px] bg-[hsl(222.2,84%,4.9%)] ${
                        index % 2 === 0 ? "md:translate-y-2" : "md:-translate-y-4 "
                    }`}
                    >
                    <FeatureCard
                        title={feature.title}
                        Icon={feature.Icon}
                        description={feature.description}
                    />
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
}