import { Calendar, MapPin, Users, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// Simple StarBorder Component - lightweight animated border
interface StarBorderProps {
  children: React.ReactNode;
  className?: string;
  color?: string;
  speed?: string;
}

const StarBorder: React.FC<StarBorderProps> = ({
  children,
  className = '',
  color = 'rgb(66, 133, 244)',
  speed = '6s'
}) => {
  return (
    <div className={`relative inline-block w-full overflow-hidden rounded-2xl ${className}`}>
      <div
        className="absolute w-[300%] h-[50%] opacity-60 bottom-[-11px] right-[-250%] rounded-full animate-star-movement-bottom z-0"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed
        }}
      />
      <div
        className="absolute w-[300%] h-[50%] opacity-60 top-[-10px] left-[-250%] rounded-full animate-star-movement-top z-0"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed
        }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

const Events = () => {
  const navigate = useNavigate();
  
  const upcomingEvents = [
    {
      id: "ai-workshop",
      title: "AI & Machine Learning Workshop",
      date: "March 15, 2025",
      location: "DSU Tech Lab, Building A",
      attendees: "45",
      description: "Hands-on workshop covering AI fundamentals and practical ML implementations.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80",
      color: "border-google-blue",
      bgColor: "bg-google-blue",
    },
    {
      id: "web-dev-bootcamp",
      title: "Web Development Bootcamp",
      date: "March 22, 2025",
      location: "DSU Main Auditorium",
      attendees: "60",
      description: "Full-day intensive bootcamp on modern web development with React and Node.js.",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80",
      color: "border-google-green",
      bgColor: "bg-google-green",
    },
  ];

  const pastEvents = [
    {
      id: "flutter-workshop",
      title: "Flutter Development Workshop",
      date: "February 20, 2025",
      attendees: "80",
      description: "Mobile app development masterclass covering Flutter basics to advanced state management.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&q=80",
    },
    {
      id: "cloud-seminar",
      title: "Cloud Computing Seminar",
      date: "February 10, 2025",
      attendees: "120",
      description: "Industry experts shared insights on AWS, Azure, and modern cloud architecture patterns.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80",
    },
    {
      id: "winter-hackathon",
      title: "Winter Hackathon 2024",
      date: "January 15-16, 2025",
      attendees: "200",
      description: "Our biggest hackathon yet with amazing projects and incredible team collaboration.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80",
    },
  ];

  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section id="events" className="py-20 lg:py-32 bg-gradient-to-b from-background via-secondary/10 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute top-40 left-10 w-96 h-96 bg-google-yellow/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-google-red/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: -20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 space-y-4"
          >
            <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-full border border-primary/20 mb-2">
              <span className="text-sm font-medium text-primary">Events</span>
            </div>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl">
              What's <span className="bg-clip-text text-transparent bg-gradient-to-r from-google-blue via-google-red to-google-yellow">Happening</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Join us for workshops, hackathons, and tech talks designed to expand 
              your skills and network with fellow developers.
            </p>
          </motion.div>

          {/* Upcoming Events */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-2 rounded-full bg-google-green animate-pulse"></div>
              <h3 className="font-heading font-semibold text-2xl">Upcoming Events</h3>
              <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <StarBorder color="rgb(66, 133, 244)" speed="6s" className="h-full">
                    <div className={`bg-card border-2 ${event.color} rounded-2xl overflow-hidden h-full hover-lift`}>
                      {/* Event Image */}
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-google-green text-white text-xs font-medium rounded-full backdrop-blur-sm flex items-center gap-1">
                            <Sparkles className="h-3 w-3" />
                            Upcoming
                          </span>
                        </div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <h4 className="font-heading font-bold text-xl text-white line-clamp-2">
                            {event.title}
                          </h4>
                        </div>
                      </div>

                      {/* Event Content */}
                      <div className="p-6">
                        {/* Event Meta */}
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4 text-google-blue" />
                            {event.date}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <MapPin className="h-4 w-4 text-google-red" />
                            <span className="line-clamp-1">{event.location}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Users className="h-4 w-4 text-google-green" />
                            {event.attendees} attending
                          </div>
                        </div>

                        {/* Short Description */}
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
                          {event.description}
                        </p>

                        {/* Learn More Button */}
                        <Button
                          onClick={() => navigate(`/events/${event.id}`)}
                          className="w-full bg-gradient-to-r from-google-blue to-google-green text-white hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group/btn"
                        >
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </StarBorder>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Past Events */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-2 rounded-full bg-muted-foreground"></div>
              <h3 className="font-heading font-semibold text-2xl">Past Events</h3>
              <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pastEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-card border border-border rounded-2xl overflow-hidden hover-lift cursor-pointer"
                  onClick={() => navigate(`/events/${event.id}`)}
                >
                  {/* Event Image */}
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-1 bg-gray-500 text-white text-xs font-medium rounded-full backdrop-blur-sm">
                        Past Event
                      </span>
                    </div>
                  </div>

                  {/* Event Content */}
                  <div className="p-5">
                    <h4 className="font-heading font-semibold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      {event.title}
                    </h4>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <Calendar className="h-4 w-4" />
                      {event.date}
                    </div>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2 leading-relaxed">
                      {event.description}
                    </p>
                    <div className="flex items-center justify-between pt-3 border-t border-border/50">
                      <div className="flex items-center gap-1 text-sm">
                        <Users className="h-4 w-4 text-primary" />
                        <span className="font-medium text-primary">{event.attendees}</span>
                        <span className="text-muted-foreground">attended</span>
                      </div>
                      <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Newsletter CTA with StarBorder */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <StarBorder color="rgb(66, 133, 244)" speed="8s">
              <div className="bg-gradient-to-br from-card via-card to-card/80 backdrop-blur-sm rounded-2xl p-8 lg:p-12 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-google-blue to-google-green mb-4">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-heading font-bold text-2xl lg:text-3xl mb-3">
                  Never Miss an Event
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Subscribe to our newsletter to get updates on upcoming workshops, 
                  hackathons, and exclusive community events.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-full border border-border bg-background/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  />
                  <Button className="bg-gradient-to-r from-google-blue to-google-green text-white hover:shadow-xl rounded-full px-8">
                    Subscribe
                  </Button>
                </div>
              </div>
            </StarBorder>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Events;
