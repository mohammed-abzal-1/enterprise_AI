import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { motion } from "motion/react";
import { ArrowRight, Calendar, MessageSquare } from "lucide-react";

export function CTA() {
  const handleScheduleDemo = () => {
    // In a real app, this would open a calendar scheduling tool
    alert('Demo scheduling would open here');
  };

  const handleStartTrial = () => {
    // In a real app, this would open signup flow
    alert('Free trial signup would open here');
  };

  return (
    <section id="cta" className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/5 via-background to-secondary/5 px-6 py-12 sm:px-12 sm:py-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-50"></div>
          
          <div className="relative text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Badge variant="secondary" className="mb-3">
                Ready to Get Started?
              </Badge>
            </motion.div>
            
            <motion.h2 
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl tracking-tight text-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Transform Your Enterprise with AI
            </motion.h2>
            
            <motion.p 
              className="mt-4 text-base sm:text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Join thousands of enterprises already using our AI platform to drive innovation, 
              improve efficiency, and accelerate growth. Start your journey today.
            </motion.p>

            <motion.div 
              className="mt-8 flex flex-col sm:flex-row gap-3 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Button 
                size="lg" 
                className="w-full sm:w-auto group"
                onClick={handleScheduleDemo}
              >
                <Calendar className="mr-2 h-4 w-4" />
                Schedule Demo
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto group"
                onClick={handleStartTrial}
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            <motion.div 
              className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MessageSquare className="h-4 w-4" />
                <span>No credit card required</span>
              </div>
              <div className="hidden sm:block h-4 w-px bg-border"></div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <span>✓</span>
                <span>30-day free trial</span>
              </div>
              <div className="hidden sm:block h-4 w-px bg-border"></div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <span>✓</span>
                <span>Cancel anytime</span>
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="absolute -top-16 -left-16 w-32 h-32 bg-primary/10 rounded-full blur-2xl"
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          ></motion.div>
          <motion.div 
            className="absolute -bottom-16 -right-16 w-32 h-32 bg-secondary/10 rounded-full blur-2xl"
            animate={{ 
              scale: [1.1, 1, 1.1],
              opacity: [0.5, 0.3, 0.5]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          ></motion.div>
        </motion.div>
      </div>
    </section>
  );
}