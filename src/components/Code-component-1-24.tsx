import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ArrowRight, Play } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center lg:text-left lg:col-span-6">
            <Badge variant="secondary" className="mb-4 inline-flex items-center px-3 py-1">
              <span className="mr-2">🚀</span>
              New: Advanced AI Automation Suite
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight text-foreground">
              Transform Your Enterprise with{" "}
              <span className="text-primary">Intelligent AI</span>
            </h1>
            
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl sm:mx-auto lg:mx-0">
              Unlock the power of AI-driven automation, real-time data insights, and seamless enterprise integration. 
              Built for scale, designed for security, trusted by industry leaders.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:justify-center lg:justify-start">
              <Button size="lg" className="text-base px-8 py-3">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="text-base px-8 py-3">
                <Play className="mr-2 h-4 w-4" />
                Watch Demo
              </Button>
            </div>
            
            <div className="mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-center lg:justify-start gap-8">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-muted-foreground">Trusted by</span>
                <div className="flex space-x-4 text-sm font-medium text-foreground">
                  <span>Fortune 500</span>
                  <span>•</span>
                  <span>Global Enterprises</span>
                  <span>•</span>
                  <span>Leading Tech Companies</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 lg:mt-0 lg:col-span-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl transform rotate-1"></div>
              <div className="relative bg-white rounded-xl shadow-2xl overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1674916972760-2d5f49872292?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWNobm9sb2d5JTIwQUklMjBhdXRvbWF0aW9ufGVufDF8fHx8MTc1NzQxNTEyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Modern AI technology in enterprise environment"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}