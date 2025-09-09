import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight, CheckCircle } from "lucide-react";

const solutions = [
  {
    title: "Data Intelligence & Analytics",
    description: "Transform raw data into actionable insights with our advanced AI analytics platform.",
    image: "https://images.unsplash.com/photo-1748609160056-7b95f30041f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGRhdGElMjBhbmFseXRpY3MlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzU3MzE3MzAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    benefits: [
      "Real-time data processing",
      "Predictive analytics",
      "Custom dashboards",
      "Automated reporting"
    ],
    category: "Analytics"
  },
  {
    title: "Process Automation",
    description: "Streamline operations with intelligent automation that learns and adapts to your workflows.",
    image: "https://images.unsplash.com/photo-1664526937033-fe2c11f1be25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRlcnByaXNlJTIwaW50ZWdyYXRpb24lMjBuZXR3b3JrfGVufDF8fHx8MTc1NzQxNTEzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    benefits: [
      "Workflow optimization",
      "Task automation",
      "Error reduction",
      "Cost savings"
    ],
    category: "Automation"
  },
  {
    title: "AI-Powered Decision Making",
    description: "Make informed decisions faster with AI recommendations and intelligent insights.",
    image: "https://images.unsplash.com/photo-1737505599159-5ffc1dcbc08f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwYnJhaW4lMjBjaXJjdWl0fGVufDF8fHx8MTc1NzM1MDMzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    benefits: [
      "Risk assessment",
      "Opportunity identification",
      "Strategic planning",
      "Performance optimization"
    ],
    category: "Intelligence"
  }
];

export function Solutions() {
  return (
    <section id="solutions" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Badge variant="secondary" className="mb-4">
            Enterprise Solutions
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight text-foreground">
            AI Solutions for Every Business Need
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-3xl mx-auto">
            From data analytics to process automation, our AI platform provides comprehensive 
            solutions tailored to your enterprise requirements.
          </p>
        </div>

        <div className="mt-16 space-y-16">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className={`lg:grid lg:grid-cols-12 lg:gap-16 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={`lg:col-span-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl transform -rotate-1"></div>
                  <Card className="relative border-0 shadow-xl overflow-hidden">
                    <ImageWithFallback
                      src={solution.image}
                      alt={solution.title}
                      className="w-full h-[300px] sm:h-[400px] object-cover"
                    />
                  </Card>
                </div>
              </div>

              <div className={`mt-10 lg:mt-0 lg:col-span-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <Badge variant="outline" className="mb-4">
                  {solution.category}
                </Badge>
                
                <h3 className="text-2xl sm:text-3xl lg:text-4xl tracking-tight text-foreground">
                  {solution.title}
                </h3>
                
                <p className="mt-6 text-lg leading-8 text-muted-foreground">
                  {solution.description}
                </p>

                <div className="mt-8 space-y-3">
                  {solution.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <Button variant="outline" className="group">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}