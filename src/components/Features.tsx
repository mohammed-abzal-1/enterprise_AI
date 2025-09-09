import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { motion } from "motion/react";
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
    <section id="features" className="py-12 sm:py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Badge variant="secondary" className="mb-3">
            Platform Features
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl tracking-tight text-foreground">
            Built for Enterprise Excellence
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive AI platform delivers the tools and capabilities your enterprise needs 
            to drive innovation, efficiency, and growth at scale.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full group">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-3">
                      <motion.div 
                        className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors"
                        whileHover={{ rotate: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <feature.icon className="h-5 w-5 text-primary" />
                      </motion.div>
                      <Badge variant="outline" className="text-xs">
                        {feature.badge}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 p-4 sm:p-6 bg-background rounded-xl shadow-sm border">
            <div className="flex items-center space-x-2">
              <Zap className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Lightning Fast</span>
            </div>
            <div className="hidden sm:block h-6 w-px bg-border"></div>
            <div className="flex items-center space-x-2">
              <Users className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Multi-tenant</span>
            </div>
            <div className="hidden sm:block h-6 w-px bg-border"></div>
            <div className="flex items-center space-x-2">
              <Lock className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">SOC 2 Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}