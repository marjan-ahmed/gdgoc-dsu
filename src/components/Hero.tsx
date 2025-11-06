import { Button } from "@/components/ui/button";
import { Code, Users, Rocket } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-google-blue/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-google-red/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-google-yellow/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-slide-up">
          {/* Terminal-style header */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/50 rounded-full border border-border/50 backdrop-blur-sm">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-google-red"></div>
              <div className="w-3 h-3 rounded-full bg-google-yellow"></div>
              <div className="w-3 h-3 rounded-full bg-google-green"></div>
            </div>
            <code className="text-sm text-muted-foreground font-mono">GDG-DSU$ npm run community</code>
          </div>

          {/* Main Heading */}
          <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
            <span className="text-gradient-hero">Build. Learn. Connect.</span>
            <br />
            <span className="text-foreground">Together at DSU</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Google Developer Groups On Campus at DHA Suffa University - Where innovation meets collaboration. 
            Join a vibrant community of developers, designers, and tech enthusiasts.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              onClick={() => scrollToSection("footer")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              <Users className="mr-2 h-5 w-5" />
              Join Our Community
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("events")}
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg rounded-full transition-all"
            >
              <Rocket className="mr-2 h-5 w-5" />
              View Events
            </Button>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 max-w-4xl mx-auto">
            {[
              { icon: Code, title: "Learn", desc: "Cutting-edge tech workshops", color: "text-google-blue" },
              { icon: Users, title: "Connect", desc: "Network with developers", color: "text-google-red" },
              { icon: Rocket, title: "Build", desc: "Real-world projects", color: "text-google-green" },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <feature.icon className={`h-10 w-10 ${feature.color} mb-4 mx-auto`} />
                <h3 className="font-heading font-semibold text-xl mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-2 bg-primary rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
