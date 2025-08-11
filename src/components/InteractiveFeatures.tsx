import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Radio } from "lucide-react";

const InteractiveFeatures = () => {
  const [sliderValue, setSliderValue] = useState([50]);
  
  return (
    <section id="interactive-demo" className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Interactive <span className="text-primary">Demonstrations</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience our technology through live demos and visual comparisons
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Before/After Cleaning Slider */}
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <Badge variant="secondary" className="mb-4">Before vs After</Badge>
              <h3 className="text-2xl font-bold text-foreground mb-6">Cleaning Results Comparison</h3>
              
              <div className="relative aspect-video bg-muted rounded-lg overflow-hidden mb-6">
                <div className="absolute inset-0 flex">
                  {/* Before image (right side) */}
                  <div 
                    className="bg-gradient-to-r from-gray-600 to-gray-800 flex items-center justify-center text-white font-semibold"
                    style={{ width: `${100 - sliderValue[0]}%` }}
                  >
                    BEFORE
                  </div>
                  {/* After image (left side) */}
                  <div 
                    className="bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center text-white font-semibold"
                    style={{ width: `${sliderValue[0]}%` }}
                  >
                    AFTER
                  </div>
                </div>
                
                {/* Slider handle */}
                <div 
                  className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
                  style={{ left: `${sliderValue[0]}%` }}
                >
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full border-2 border-primary shadow-lg"></div>
                </div>
              </div>
              
              <Slider
                value={sliderValue}
                onValueChange={setSliderValue}
                max={100}
                step={1}
                className="w-full"
              />
              
              <p className="text-muted-foreground mt-4 text-center">
                Drag the slider to see the dramatic difference our drone cleaning makes
              </p>
            </CardContent>
          </Card>

          {/* Live Flight Telemetry Demo */}
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <Badge variant="secondary" className="mb-4">Live Demo</Badge>
              <h3 className="text-2xl font-bold text-foreground mb-6">Flight Telemetry Dashboard</h3>
              
              <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-6 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-background to-muted flex items-center justify-center">
                  <div className="text-center">
                    <Radio className="w-16 h-16 text-primary mx-auto mb-4" />
                    <p className="text-foreground font-semibold mb-2">Live Telemetry Feed</p>
                    <p className="text-muted-foreground text-sm">Real-time drone data visualization</p>
                  </div>
                </div>
                
                {/* Simulated telemetry data */}
                <div className="absolute top-4 left-4 space-y-2">
                  <div className="bg-background/80 backdrop-blur-sm px-3 py-1 rounded text-sm">
                    <span className="text-muted-foreground">Altitude:</span>
                    <span className="text-foreground ml-2 font-mono">45.2m</span>
                  </div>
                  <div className="bg-background/80 backdrop-blur-sm px-3 py-1 rounded text-sm">
                    <span className="text-muted-foreground">Speed:</span>
                    <span className="text-foreground ml-2 font-mono">2.1 m/s</span>
                  </div>
                  <div className="bg-background/80 backdrop-blur-sm px-3 py-1 rounded text-sm">
                    <span className="text-muted-foreground">Battery:</span>
                    <span className="text-green-500 ml-2 font-mono">87%</span>
                  </div>
                </div>
                
                <div className="absolute top-4 right-4">
                  <div className="bg-green-500/20 border border-green-500 px-3 py-1 rounded text-sm text-green-500 font-semibold">
                    ACTIVE
                  </div>
                </div>
              </div>
              
              <p className="text-muted-foreground text-center">
                Watch our drones in action with real-time flight data and operational metrics
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InteractiveFeatures;