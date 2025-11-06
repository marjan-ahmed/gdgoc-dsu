import { Button } from "@/components/ui/button";
import { Code, Users, Rocket, Sparkles } from "lucide-react";
import { Terminal, TypingAnimation, AnimatedSpan } from "@/components/ui/terminal";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-br from-background via-background to-primary/5">
      {/* Header.svg Background Overlay */}
      <div 
        className="absolute top-0 left-0 right-0 bottom-0 -z-10 "
        style={{
          backgroundImage: "url('https://gdgoc-dsu.vercel.app/Header.svg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Animated Grid Background Pattern */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(82, 39, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(82, 39, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-gradient-to-br from-google-blue/20 via-google-blue/10 to-transparent rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-gradient-to-bl from-google-red/15 via-google-yellow/10 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-gradient-to-tr from-google-green/15 via-transparent to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }}></div>
      </div>

      {/* Subtle moving beam effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent animate-beam-1"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-google-blue/20 to-transparent animate-beam-2"></div>
        <div className="absolute top-0 left-2/3 w-px h-full bg-gradient-to-b from-transparent via-google-red/15 to-transparent animate-beam-3"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8 mb-20">

          {/* Main Headline - Updated */}
          <h1 className="font-heading mt-20 font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight tracking-tight">
            <span className="block mb-2 bg-clip-text text-transparent bg-gradient-to-r from-google-blue via-google-red to-google-green animate-gradient-x">
              Build. Learn. Connect.
            </span>
            <span className="block text-foreground">
              Together at <span className="text-primary relative inline-block">
                DSU
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-google-blue via-google-yellow to-google-red rounded-full"></span>
              </span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join DHA Suffa University's premier developer community. Where passionate developers, 
            designers, and tech enthusiasts unite to innovate, collaborate, and grow together.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <Button
              size="lg"
              onClick={() => scrollToSection("footer")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-7 text-lg rounded-full shadow-lg hover:shadow-2xl transition-all hover:scale-105 group relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-google-blue/20 via-google-red/20 to-google-yellow/20 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              <Users className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              <span className="relative">Join Our Community</span>
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("events")}
              className="border-2 border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary px-8 py-7 text-lg rounded-full transition-all hover:scale-105 group"
            >
              <Rocket className="mr-2 h-5 w-5 group-hover:-translate-y-1 transition-transform" />
              Explore Events
            </Button>
          </div>


          {/* Terminal Component - Promoting GDGOC DSU */}
          <div className="pt-10 pb-12  flex justify-center">
            <Terminal className="max-w-2xl w-full">
              <TypingAnimation className="text-google-blue">$ gdgoc-dsu --init</TypingAnimation>
              <AnimatedSpan className="text-google-green">✔ Connecting to developer community...</AnimatedSpan>
              <AnimatedSpan className="text-google-green">✔ Verifying passion for technology...</AnimatedSpan>
              <AnimatedSpan className="text-google-green">✔ Loading upcoming workshops and hackathons...</AnimatedSpan>
              <AnimatedSpan className="text-google-yellow">⚡ Found 15+ active projects</AnimatedSpan>
              <AnimatedSpan className="text-google-yellow">⚡ 200+ community members ready to collaborate</AnimatedSpan>
              <AnimatedSpan className="text-muted-foreground">📍 Location: DHA Suffa University, Karachi</AnimatedSpan>
              <AnimatedSpan className="text-muted-foreground">🌐 Platform: Web, Mobile, Cloud, AI/ML</AnimatedSpan>
              <TypingAnimation className="text-google-blue" duration={50}>$ gdgoc-dsu --join</TypingAnimation>
              <AnimatedSpan className="text-google-green font-bold">✨ Welcome to GDGOC DSU! Your journey begins now.</AnimatedSpan>
              <AnimatedSpan className="text-muted-foreground italic">Ready to build amazing things together? 🚀</AnimatedSpan>
            </Terminal>
          </div>
        </div>
      </div>


      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes beam-1 {
          0%, 100% { transform: translateY(-100%); opacity: 0; }
          50% { transform: translateY(100%); opacity: 1; }
        }
        @keyframes beam-2 {
          0%, 100% { transform: translateY(-100%); opacity: 0; }
          50% { transform: translateY(100%); opacity: 1; }
        }
        @keyframes beam-3 {
          0%, 100% { transform: translateY(-100%); opacity: 0; }
          50% { transform: translateY(100%); opacity: 1; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        .animate-beam-1 {
          animation: beam-1 8s ease-in-out infinite;
        }
        .animate-beam-2 {
          animation: beam-2 10s ease-in-out infinite 2s;
        }
        .animate-beam-3 {
          animation: beam-3 12s ease-in-out infinite 4s;
        }
      `}</style>
    </section>
  );
};

export default Hero;
