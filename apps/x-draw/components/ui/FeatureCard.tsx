"use client"
import { fetureType } from "@/data/feature"
import Card from "./Card"

function FeatureCard({ title, description, Icon }:  fetureType) {

     return (
          <Card className="max-w-md">
               <div className="space-y-4">
                    <div
                         
                         className="relative p-3 rounded-xl bg-cyan-700/20 w-fit group transition-colors overflow-hidden container"
                    >
                    <Icon className="w-6 h-6 text-primary relative z-10" />
                    </div>
                    <div className="space-y-2">
                         <h3 className="text-xl font-semibold text-foreground">{title}</h3>
                         <p className="text-muted-foreground leading-relaxed">{description}</p>
                    </div>
                    </div>
          </Card>
     )
}

export default FeatureCard