import { Code2, Zap, Shield, Users, Globe, Rocket } from "lucide-react";
import { Card } from "./ui/card";

const Features = () => {
  const features = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "We write maintainable, scalable code that stands the test of time.",
      color: "text-primary",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized performance ensures your applications run at peak speed.",
      color: "text-accent",
    },
    {
      icon: Shield,
      title: "Secure by Design",
      description: "Security-first approach protects your data and your users.",
      color: "text-primary",
    },
    {
      icon: Users,
      title: "User Focused",
      description: "Beautiful interfaces that users love to interact with.",
      color: "text-accent",
    },
    {
      icon: Globe,
      title: "Global Scale",
      description: "Built to scale from startup to enterprise level.",
      color: "text-primary",
    },
    {
      icon: Rocket,
      title: "Fast Delivery",
      description: "Agile development process ensures quick time to market.",
      color: "text-accent",
    },
  ];

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-secondary opacity-50"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              TechFlow?
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We combine cutting-edge technology with innovative design to deliver exceptional results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 backdrop-blur-sm bg-card/50 border-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
