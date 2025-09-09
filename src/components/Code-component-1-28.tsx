import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { 
  Brain, 
  BarChart3, 
  Workflow, 
  Shield, 
  Zap, 
  Users, 
  Lock, 
  Puzzle,
  TrendingUp
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Advanced AI Engine",
    description: "State-of-the-art machine learning algorithms that adapt and learn from your enterprise data patterns.",
    badge: "Core AI"
  },
  {
    icon: Workflow,
    title: "Intelligent Automation",
    description: "Automate complex business processes with AI-driven decision making and seamless workflow integration.",
    badge: "Automation"
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description: "Get instant insights from your data with advanced analytics and predictive modeling capabilities.",
    badge: "Analytics"
  },
  {
    icon: Puzzle,
    title: "Enterprise Integration",
    description: "Connect seamlessly with your existing tools and systems through our comprehensive API platform.",
    badge: "Integration"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security with SOC 2 compliance, end-to-end encryption, and advanced access controls.",
    badge: "Security"
  },
  {
    icon: TrendingUp,
    title: "Scalable Performance",
    description: "Built to handle enterprise workloads with auto-scaling infrastructure and 99.9% uptime SLA.",
    badge: "Performance"
  }
];

export function Features() {
  return (
    <section id="features" className="py-20 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Badge variant="secondary" className="mb-4">
            Platform Features
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight text-foreground">
            Built for Enterprise Excellence
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive AI platform delivers the tools and capabilities your enterprise needs 
            to drive innovation, efficiency, and growth at scale.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 p-6 bg-background rounded-xl shadow-sm border">
            <div className="flex items-center space-x-2">
              <Zap className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Lightning Fast</span>
            </div>
            <div className="h-6 w-px bg-border"></div>
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Multi-tenant</span>
            </div>
            <div className="h-6 w-px bg-border"></div>
            <div className="flex items-center space-x-2">
              <Lock className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">SOC 2 Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}