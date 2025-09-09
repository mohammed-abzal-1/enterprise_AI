import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import { scrollToSection } from "./utils/scroll";
import { 
  Shield, 
  Globe, 
  Clock, 
  Users, 
  Database, 
  Headphones,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

const enterpriseFeatures = [
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "SOC 2 Type II compliance, GDPR ready, and enterprise-grade security controls."
  },
  {
    icon: Globe,
    title: "Global Scale",
    description: "Multi-region deployment with 99.9% uptime SLA and global data residency options."
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Dedicated support team with guaranteed response times and technical account management."
  },
  {
    icon: Database,
    title: "Data Governance",
    description: "Complete data lineage, audit trails, and compliance reporting for regulatory requirements."
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Advanced user management, role-based access, and team workspace features."
  },
  {
    icon: Headphones,
    title: "Professional Services",
    description: "Implementation support, training, and custom development services available."
  }
];

const certifications = [
  "SOC 2 Type II",
  "ISO 27001",
  "GDPR Compliant",
  "HIPAA Ready",
  "FedRAMP Authorized"
];

export function Enterprise() {
  const handleContactSales = () => {
    // In a real app, this would open a contact form or redirect to sales page
    alert('Contact sales form would open here');
  };

  const handleSecurityWhitepaper = () => {
    // In a real app, this would download or open the whitepaper
    alert('Security whitepaper would download here');
  };

  return (
    <section id="enterprise" className="py-12 sm:py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Badge variant="secondary" className="mb-3">
            Enterprise Ready
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl tracking-tight text-foreground">
            Built for Enterprise Scale & Security
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-muted-foreground max-w-3xl mx-auto">
            Meet the strictest enterprise requirements with our comprehensive security, 
            compliance, and scalability features designed for the world's largest organizations.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {enterpriseFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300 h-full group">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <CardHeader className="pb-3">
                    <motion.div 
                      className="p-2 bg-primary/10 rounded-lg w-fit mb-3 group-hover:bg-primary/20 transition-colors"
                      whileHover={{ rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <feature.icon className="h-5 w-5 text-primary" />
                    </motion.div>
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

        <div className="mt-10 bg-background rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl tracking-tight text-foreground">
                Security & Compliance First
              </h3>
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-muted-foreground">
                We understand that enterprise data is your most valuable asset. Our platform 
                is built with security and compliance at its core, ensuring your data remains 
                protected and your organization stays compliant.
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground font-medium">{cert}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto group"
                  onClick={handleContactSales}
                >
                  Contact Sales
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full sm:w-auto"
                  onClick={handleSecurityWhitepaper}
                >
                  Security Whitepaper
                </Button>
              </div>
            </div>

            <div className="mt-8 lg:mt-0">
              <div className="bg-muted/50 rounded-xl p-4 sm:p-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-background rounded-lg shadow-sm">
                    <span className="text-sm font-medium">Data Encryption</span>
                    <Badge variant="secondary" className="text-xs">AES-256</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-background rounded-lg shadow-sm">
                    <span className="text-sm font-medium">Network Security</span>
                    <Badge variant="secondary" className="text-xs">TLS 1.3</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-background rounded-lg shadow-sm">
                    <span className="text-sm font-medium">Access Control</span>
                    <Badge variant="secondary" className="text-xs">RBAC + MFA</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-background rounded-lg shadow-sm">
                    <span className="text-sm font-medium">Audit Logging</span>
                    <Badge variant="secondary" className="text-xs">Real-time</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-background rounded-lg shadow-sm">
                    <span className="text-sm font-medium">Backup & Recovery</span>
                    <Badge variant="secondary" className="text-xs">99.99%</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}