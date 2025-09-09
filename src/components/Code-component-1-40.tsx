import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ArrowRight, Calendar, MessageSquare } from "lucide-react";

export function CTA() {
  return (
    <section className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/5 via-background to-secondary/5 px-8 py-16 sm:px-16 sm:py-24">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-50"></div>
          
          <div className="relative text-center">
            <Badge variant="secondary" className="mb-4">
              Ready to Get Started?
            </Badge>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight text-foreground">
              Transform Your Enterprise with AI
            </h2>
            
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
              Join thousands of enterprises already using our AI platform to drive innovation, 
              improve efficiency, and accelerate growth. Start your journey today.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-base px-8 py-3">
                <Calendar className="mr-2 h-4 w-4" />
                Schedule Demo
              </Button>
              <Button variant="outline" size="lg" className="text-base px-8 py-3">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-8">
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
            </div>
          </div>

          <div className="absolute -top-16 -left-16 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-secondary/10 rounded-full blur-2xl"></div>
        </div>
      </div>
    </section>
  );
}