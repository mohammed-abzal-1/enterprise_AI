import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ArrowRight, Play } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import { scrollToSection } from "./utils/scroll";

export function Hero() {
  const handleStartTrial = () => {
    scrollToSection('cta');
  };

  const handleWatchDemo = () => {
    // In a real app, this would open a demo modal or video
    alert('Demo video would open here');
  };

  return (
    <section id="hero" className="relative overflow-hidden py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-6">
          <motion.div 
            className="text-center lg:text-left lg:col-span-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Badge variant="secondary" className="mb-3 inline-flex items-center px-3 py-1">
                <span className="mr-2">🚀</span>
                New: Advanced AI Automation Suite
              </Badge>
            </motion.div>
            
            <motion.h1 
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl tracking-tight text-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Transform Your Enterprise with{" "}
              <span className="text-primary">Intelligent AI</span>
            </motion.h1>
            
            <motion.p 
              className="mt-4 text-base sm:text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Unlock the power of AI-driven automation, real-time data insights, and seamless enterprise integration. 
              Built for scale, designed for security, trusted by industry leaders.
            </motion.p>
            
            <motion.div 
              className="mt-6 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button 
                size="lg" 
                className="w-full sm:w-auto group"
                onClick={handleStartTrial}
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto"
                onClick={handleWatchDemo}
              >
                <Play className="mr-2 h-4 w-4" />
                Watch Demo
              </Button>
            </motion.div>
            
            <motion.div 
              className="mt-6 flex flex-col sm:flex-row sm:items-center justify-center lg:justify-start gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2">
                <span className="text-sm text-muted-foreground">Trusted by</span>
                <div className="flex flex-wrap justify-center gap-x-3 text-sm font-medium text-foreground">
                  <span>Fortune 500</span>
                  <span className="hidden sm:inline">•</span>
                  <span>Global Enterprises</span>
                  <span className="hidden sm:inline">•</span>
                  <span>Leading Tech Companies</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="mt-8 lg:mt-0 lg:col-span-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl transform rotate-1"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              ></motion.div>
              <motion.div 
                className="relative bg-white rounded-xl shadow-2xl overflow-hidden"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                whileHover={{ scale: 1.02 }}
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1674916972760-2d5f49872292?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWNobm9sb2d5JTIwQUklMjBhdXRvbWF0aW9ufGVufDF8fHx8MTc1NzQxNTEyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Modern AI technology in enterprise environment"
                  className="w-full h-[250px] sm:h-[300px] lg:h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}