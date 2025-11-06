import { Code, Presentation, Trophy, BookOpen, Sparkles, Users } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Workshops",
      description: "Hands-on technical workshops covering the latest technologies, frameworks, and development practices.",
      color: "bg-google-blue",
      borderColor: "border-google-blue/20",
    },
    {
      icon: Trophy,
      title: "Hackathons",
      description: "Competitive coding events where teams build innovative solutions to real-world problems in 24-48 hours.",
      color: "bg-google-red",
      borderColor: "border-google-red/20",
    },
    {
      icon: Presentation,
      title: "Tech Talks",
      description: "Expert sessions featuring industry professionals sharing insights on emerging technologies and career paths.",
      color: "bg-google-yellow",
      borderColor: "border-google-yellow/20",
    },
    {
      icon: Users,
      title: "Study Groups",
      description: "Collaborative learning circles for students to explore new technologies together and work on group projects.",
      color: "bg-google-green",
      borderColor: "border-google-green/20",
    },
    {
      icon: BookOpen,
      title: "Bootcamps",
      description: "Intensive training programs designed to take you from beginner to proficient in specific tech stacks.",
      color: "bg-google-blue",
      borderColor: "border-google-blue/20",
    },
    {
      icon: Sparkles,
      title: "Community Events",
      description: "Networking sessions, meetups, and social events to build lasting connections in the tech community.",
      color: "bg-google-red",
      borderColor: "border-google-red/20",
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl">
              What <span className="text-gradient-accent">We Do</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our professional team delivers engaging programs designed to boost your technical skills 
              and expand your network in the tech community.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group relative bg-card border-2 ${service.borderColor} rounded-2xl p-8 hover-lift overflow-hidden`}
              >
                {/* Background Gradient on Hover */}
                <div className={`absolute inset-0 ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${service.color} text-white mb-6 shadow-lg`}>
                    <service.icon className="h-8 w-8" />
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-semibold text-xl mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full border border-primary/20">
              <Sparkles className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-primary">
                New events and workshops announced monthly!
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
