import { Code, Presentation, Trophy, BookOpen, Sparkles, Users, ArrowRight, Calendar, Award, Zap } from "lucide-react";
import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

// GlareHover Component - Adds realistic moving glare highlight on hover
interface GlareHoverProps {
  children: React.ReactNode;
  glareColor?: string;
  glareOpacity?: number;
  className?: string;
}

const GlareHover: React.FC<GlareHoverProps> = ({
  children,
  glareColor = '#ffffff',
  glareOpacity = 0.3,
  className = ''
}) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const hex = glareColor.replace('#', '');
  let rgba = glareColor;
  if (/^[\dA-Fa-f]{6}$/.test(hex)) {
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    rgba = `rgba(${r}, ${g}, ${b}, ${glareOpacity})`;
  }

  const handleMouseEnter = () => {
    setIsHovered(true);
    const el = overlayRef.current;
    if (!el) return;
    
    el.style.transition = 'none';
    el.style.backgroundPosition = '-100% -100%';
    setTimeout(() => {
      el.style.transition = '650ms ease';
      el.style.backgroundPosition = '100% 100%';
    }, 10);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    const el = overlayRef.current;
    if (!el) return;
    
    el.style.transition = '650ms ease';
    el.style.backgroundPosition = '-100% -100%';
  };

  return (
    <div 
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        ref={overlayRef}
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(-45deg,
            hsla(0,0%,0%,0) 60%,
            ${rgba} 70%,
            hsla(0,0%,0%,0) 100%)`,
          backgroundSize: '250% 250%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '-100% -100%',
          transition: '650ms ease'
        }}
      />
      {children}
    </div>
  );
};

// ExpandableServiceCard Component
interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  details: string[];
  color: string;
  index: number;
}

const ExpandableServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon,
  title,
  description,
  details,
  color,
  index
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <GlareHover className="h-full">
        <div 
          className={`group relative bg-card border-2 border-border rounded-2xl overflow-hidden transition-all duration-500 h-full flex flex-col
            ${isExpanded ? 'shadow-2xl scale-[1.02]' : 'hover:shadow-xl hover:border-${color}/30'}`}
        >
          {/* Color accent bar */}
          <div className={`h-1.5 ${color} transition-all duration-300 ${isExpanded ? 'opacity-100' : 'opacity-40 group-hover:opacity-100'}`} />
          
          {/* Card Content */}
          <div className="p-6 sm:p-8 flex-1 flex flex-col">
            {/* Icon */}
            <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${color} text-white mb-4 shadow-lg
              group-hover:scale-110 transition-transform duration-300`}>
              <Icon className="h-7 w-7" />
            </div>

            {/* Title */}
            <h3 className="font-heading font-bold text-xl sm:text-2xl mb-3 group-hover:text-primary transition-colors">
              {title}
            </h3>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed mb-4 flex-1">
              {description}
            </p>

            {/* Expandable Details */}
            <motion.div
              initial={false}
              animate={{ height: isExpanded ? 'auto' : 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="pt-4 border-t border-border/50 space-y-2">
                {details.map((detail, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: isExpanded ? 1 : 0, x: isExpanded ? 0 : -20 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-2"
                  >
                    <Zap className={`h-4 w-4 mt-0.5 flex-shrink-0 ${color.replace('bg-', 'text-')}`} />
                    <span className="text-sm text-muted-foreground">{detail}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Expand Button */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className={`mt-4 w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium
                transition-all duration-300 ${color} text-white hover:shadow-lg`}
            >
              <span className="text-sm">{isExpanded ? 'Show Less' : 'Learn More'}</span>
              <ArrowRight className={`h-4 w-4 transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`} />
            </button>
          </div>
        </div>
      </GlareHover>
    </motion.div>
  );
};

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Workshops",
      description: "Hands-on technical workshops covering the latest technologies, frameworks, and development practices.",
      details: [
        "Weekly hands-on coding sessions",
        "Industry-standard tools & frameworks",
        "Project-based learning approach",
        "Certificates upon completion"
      ],
      color: "bg-google-blue",
    },
    {
      icon: Trophy,
      title: "Hackathons",
      description: "Competitive coding events where teams build innovative solutions to real-world problems in 24-48 hours.",
      details: [
        "24-48 hour coding marathons",
        "Real-world problem solving",
        "Prizes & recognition for winners",
        "Mentorship from industry experts"
      ],
      color: "bg-google-red",
    },
    {
      icon: Presentation,
      title: "Tech Talks",
      description: "Expert sessions featuring industry professionals sharing insights on emerging technologies and career paths.",
      details: [
        "Guest speakers from top companies",
        "Latest industry trends & insights",
        "Career guidance & networking",
        "Q&A sessions with experts"
      ],
      color: "bg-google-yellow",
    },
    {
      icon: Users,
      title: "Study Groups",
      description: "Collaborative learning circles for students to explore new technologies together and work on group projects.",
      details: [
        "Peer-to-peer learning sessions",
        "Collaborative problem solving",
        "Regular meetups & discussions",
        "Shared resources & materials"
      ],
      color: "bg-google-green",
    },
    {
      icon: BookOpen,
      title: "Bootcamps",
      description: "Intensive training programs designed to take you from beginner to proficient in specific tech stacks.",
      details: [
        "Intensive 4-6 week programs",
        "Full-stack development focus",
        "Portfolio projects included",
        "Job-ready skill development"
      ],
      color: "bg-google-blue",
    },
    {
      icon: Sparkles,
      title: "Community Events",
      description: "Networking sessions, meetups, and social events to build lasting connections in the tech community.",
      details: [
        "Monthly networking mixers",
        "Casual tech meetups",
        "Team building activities",
        "Alumni networking opportunities"
      ],
      color: "bg-google-red",
    },
  ];

  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section id="services" className="py-20 lg:py-32 bg-gradient-to-b from-background via-secondary/20 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute top-40 right-10 w-96 h-96 bg-google-red/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-10 w-96 h-96 bg-google-green/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div 
            ref={headerRef}
            initial={{ opacity: 0, y: -20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 space-y-4"
          >
            <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-full border border-primary/20 mb-2">
              <span className="text-sm font-medium text-primary">Our Services</span>
            </div>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl">
              What <span className="bg-clip-text text-transparent bg-gradient-to-r from-google-blue via-google-red to-google-yellow">We Offer</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive programs designed to accelerate your growth as a developer, 
              connect you with like-minded individuals, and prepare you for the tech industry.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
            {services.map((service, index) => (
              <ExpandableServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                details={service.details}
                color={service.color}
                index={index}
              />
            ))}
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-8 bg-card/50 backdrop-blur-sm border border-border rounded-2xl"
          >
            <div className="text-center">
              <Calendar className="h-8 w-8 text-google-blue mx-auto mb-2" />
              <div className="font-heading font-bold text-3xl text-primary mb-1">25+</div>
              <div className="text-sm text-muted-foreground">Events Per Year</div>
            </div>
            <div className="text-center">
              <Users className="h-8 w-8 text-google-green mx-auto mb-2" />
              <div className="font-heading font-bold text-3xl text-primary mb-1">500+</div>
              <div className="text-sm text-muted-foreground">Active Participants</div>
            </div>
            <div className="text-center">
              <Award className="h-8 w-8 text-google-yellow mx-auto mb-2" />
              <div className="font-heading font-bold text-3xl text-primary mb-1">15+</div>
              <div className="text-sm text-muted-foreground">Industry Partners</div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-google-blue/10 via-google-red/10 to-google-yellow/10 rounded-full border border-primary/20">
              <Sparkles className="h-5 w-5 text-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">
                New events and workshops announced monthly!
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
