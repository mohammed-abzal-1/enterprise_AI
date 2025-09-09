import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
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
    <section id="solutions" className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Badge variant="secondary" className="mb-3">
            Enterprise Solutions
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl tracking-tight text-foreground">
            AI Solutions for Every Business Need
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-muted-foreground max-w-3xl mx-auto">
            From data analytics to process automation, our AI platform provides comprehensive 
            solutions tailored to your enterprise requirements.
          </p>
        </div>

        <div className="mt-10 space-y-12 lg:space-y-16">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              className={`lg:grid lg:grid-cols-12 lg:gap-8 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className={`lg:col-span-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}
                initial={{ opacity: 0, x: index % 2 === 1 ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="relative">
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl transform -rotate-1"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                  ></motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="relative border-0 shadow-xl overflow-hidden">
                      <ImageWithFallback
                        src={solution.image}
                        alt={solution.title}
                        className="w-full h-[200px] sm:h-[300px] lg:h-[350px] object-cover"
                      />
                    </Card>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div 
                className={`mt-6 lg:mt-0 lg:col-span-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}
                initial={{ opacity: 0, x: index % 2 === 1 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Badge variant="outline" className="mb-3">
                    {solution.category}
                  </Badge>
                </motion.div>
                
                <motion.h3 
                  className="text-xl sm:text-2xl lg:text-3xl tracking-tight text-foreground"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  {solution.title}
                </motion.h3>
                
                <motion.p 
                  className="mt-4 text-base sm:text-lg leading-relaxed text-muted-foreground"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  {solution.description}
                </motion.p>

                <motion.div 
                  className="mt-5 space-y-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  {solution.benefits.map((benefit, benefitIndex) => (
                    <motion.div 
                      key={benefitIndex} 
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.9 + benefitIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground">{benefit}</span>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div 
                  className="mt-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  viewport={{ once: true }}
                >
                  <Button variant="outline" className="group">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}