import React, { useRef, useState } from 'react';
import { Code2, Users, Lightbulb, Rocket, Trophy, Calendar } from "lucide-react";

interface Position {
  x: number;
  y: number;
}

interface SpotlightCardProps extends React.PropsWithChildren {
  className?: string;
  spotlightColor?: string;
}

const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = '',
  spotlightColor = 'rgba(82, 39, 255, 0.15)'
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState<number>(0);

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = e => {
    if (!divRef.current || isFocused) return;

    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(0.6);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out"
        style={{
          opacity,
          background: `radial-gradient(circle 400px at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 80%)`
        }}
      />
      {children}
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: Code2,
      title: "Technical Workshops",
      description: "Hands-on coding sessions covering the latest technologies, frameworks, and best practices in software development.",
      color: "rgba(66, 133, 244, 0.2)",
      iconColor: "text-google-blue",
      iconBg: "bg-google-blue/10"
    },
    {
      icon: Users,
      title: "Networking Events",
      description: "Connect with industry professionals, alumni, and fellow developers. Build relationships that accelerate your career.",
      color: "rgba(234, 67, 53, 0.2)",
      iconColor: "text-google-red",
      iconBg: "bg-google-red/10"
    },
    {
      icon: Lightbulb,
      title: "Innovation Labs",
      description: "Transform your ideas into reality with access to mentorship, resources, and collaborative project opportunities.",
      color: "rgba(251, 188, 4, 0.2)",
      iconColor: "text-google-yellow",
      iconBg: "bg-google-yellow/10"
    },
    {
      icon: Rocket,
      title: "Hackathons",
      description: "Compete in exciting coding challenges, push your limits, and create innovative solutions to real-world problems.",
      color: "rgba(52, 168, 83, 0.2)",
      iconColor: "text-google-green",
      iconBg: "bg-google-green/10"
    },
    {
      icon: Trophy,
      title: "Competitions & Awards",
      description: "Showcase your skills in tech competitions and gain recognition through certificates and achievement badges.",
      color: "rgba(82, 39, 255, 0.2)",
      iconColor: "text-primary",
      iconBg: "bg-primary/10"
    },
    {
      icon: Calendar,
      title: "Tech Talks & Seminars",
      description: "Learn from industry experts through inspiring talks, panel discussions, and interactive Q&A sessions.",
      color: "rgba(234, 67, 53, 0.2)",
      iconColor: "text-google-red",
      iconBg: "bg-google-red/10"
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-background via-secondary/20 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-google-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-google-green/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-full border border-primary/20 mb-4">
              <span className="text-sm font-medium text-primary">What We Offer</span>
            </div>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl">
              Experience <span className="bg-clip-text text-transparent bg-gradient-to-r from-google-blue via-google-red to-google-green">Learning Beyond</span> Classroom
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore a world of opportunities designed to enhance your skills, expand your network, 
              and accelerate your journey in technology.
            </p>
          </div>

          {/* Features Grid with SpotlightCards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <SpotlightCard
                key={index}
                className="p-8 group transition-all duration-300 hover:scale-[1.02]"
                spotlightColor={feature.color}
              >
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl ${feature.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className={`h-7 w-7 ${feature.iconColor}`} />
                  </div>

                  {/* Content */}
                  <h3 className="font-heading font-bold text-xl mb-3 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {feature.description}
                  </p>

                  {/* Decorative element */}
                  <div className={`absolute -bottom-2 -right-2 w-20 h-20 ${feature.iconBg} rounded-full blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}></div>
                </div>
              </SpotlightCard>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4">
              <p className="text-muted-foreground">
                Ready to start your journey?
              </p>
              <a
                href="#footer"
                className="px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-medium transition-all hover:scale-105 hover:shadow-lg"
              >
                Join GDG DSU Today →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
