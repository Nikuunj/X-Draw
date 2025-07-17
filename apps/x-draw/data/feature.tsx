import { Download, Lock, LucideIcon, Pen, Smartphone, Users, Zap } from "lucide-react";

export interface fetureType {
     Icon: LucideIcon;
     title: string;
     description: string;
}
export const features: fetureType[] = [
     {
          Icon: Pen,
          title: "Hand-drawn Feel",
          description: "Create sketches that look and feel like they were drawn by hand with our unique algorithm."
     },
     {
          Icon: Users,
          title: "Real-time Collaboration",
          description: "Work together with your team in real-time. See cursors and changes as they happen."
     },
     {
          Icon: Zap,
          title: "Lightning Fast",
          description: "Built for speed and performance. No lag, no delays, just smooth drawing experience."
     },
     {
          Icon: Download,
          title: "Export Anywhere",
          description: "Export your creations as PNG, SVG, or share a link. Your work, your way."
     },
     {
          Icon: Lock,
          title: "Privacy First",
          description: "Your data stays private. We don't store or track your drawings without permission."
     },
     {
          Icon: Smartphone,
          title: "Works Everywhere",
          description: "Use on desktop, tablet, or mobile. Responsive design that adapts to any screen."
     }
];