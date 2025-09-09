import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
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
  return (
    <section id="enterprise" className="py-20 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Badge variant="secondary" className="mb-4">
            Enterprise Ready
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight text-foreground">
            Built for Enterprise Scale & Security
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-3xl mx-auto">
            Meet the strictest enterprise requirements with our comprehensive security, 
            compliance, and scalability features designed for the world's largest organizations.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {enterpriseFeatures.map((feature, index) => (
            <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="p-2 bg-primary/10 rounded-lg w-fit mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
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

        <div className="mt-16 bg-background rounded-2xl shadow-xl p-8 lg:p-12">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl tracking-tight text-foreground">
                Security & Compliance First
              </h3>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                We understand that enterprise data is your most valuable asset. Our platform 
                is built with security and compliance at its core, ensuring your data remains 
                protected and your organization stays compliant.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground font-medium">{cert}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button size="lg">
                  Contact Sales
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg">
                  Security Whitepaper
                </Button>
              </div>
            </div>

            <div className="mt-10 lg:mt-0">
              <div className="bg-muted/50 rounded-xl p-8">
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-background rounded-lg shadow-sm">
                    <span className="font-medium">Data Encryption</span>
                    <Badge variant="secondary">AES-256</Badge>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-background rounded-lg shadow-sm">
                    <span className="font-medium">Network Security</span>
                    <Badge variant="secondary">TLS 1.3</Badge>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-background rounded-lg shadow-sm">
                    <span className="font-medium">Access Control</span>
                    <Badge variant="secondary">RBAC + MFA</Badge>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-background rounded-lg shadow-sm">
                    <span className="font-medium">Audit Logging</span>
                    <Badge variant="secondary">Real-time</Badge>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-background rounded-lg shadow-sm">
                    <span className="font-medium">Backup & Recovery</span>
                    <Badge variant="secondary">99.99%</Badge>
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