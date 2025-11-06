import { Calendar, MapPin, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Events = () => {
  const upcomingEvents = [
    {
      title: "Web Development Bootcamp",
      date: "March 15, 2025",
      time: "2:00 PM - 5:00 PM",
      location: "Computer Lab, DSU",
      attendees: "50+",
      description: "Learn modern web development with React, Node.js, and MongoDB in this intensive workshop.",
      status: "upcoming",
      color: "border-google-blue",
    },
    {
      title: "AI/ML Workshop Series",
      date: "March 22, 2025",
      time: "3:00 PM - 6:00 PM",
      location: "Auditorium, DSU",
      attendees: "100+",
      description: "Dive into machine learning fundamentals and build your first AI model using Python and TensorFlow.",
      status: "upcoming",
      color: "border-google-green",
    },
    {
      title: "Spring Hackathon 2025",
      date: "April 5-6, 2025",
      time: "9:00 AM - 9:00 AM",
      location: "Main Campus, DSU",
      attendees: "150+",
      description: "24-hour hackathon where teams compete to build innovative solutions to real-world problems.",
      status: "upcoming",
      color: "border-google-red",
    },
  ];

  const pastEvents = [
    {
      title: "Flutter Development Workshop",
      date: "February 20, 2025",
      attendees: "80",
      description: "Mobile app development masterclass covering Flutter basics to advanced state management.",
    },
    {
      title: "Cloud Computing Seminar",
      date: "February 10, 2025",
      attendees: "120",
      description: "Industry experts shared insights on AWS, Azure, and modern cloud architecture patterns.",
    },
    {
      title: "Winter Hackathon 2024",
      date: "January 15-16, 2025",
      attendees: "200",
      description: "Our biggest hackathon yet with amazing projects and incredible team collaboration.",
    },
  ];

  return (
    <section id="events" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl">
              What's <span className="text-gradient-hero">Happening</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join us for workshops, hackathons, and tech talks designed to expand 
              your skills and network with fellow developers.
            </p>
          </div>

          {/* Upcoming Events */}
          <div className="mb-16">
            <h3 className="font-heading font-semibold text-2xl mb-8 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-google-green animate-pulse"></div>
              Upcoming Events
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {upcomingEvents.map((event, index) => (
                <div
                  key={index}
                  className={`group bg-card border-2 ${event.color} rounded-2xl p-6 hover-lift`}
                >
                  {/* Event Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-google-green/10 text-google-green text-xs font-medium rounded-full">
                      Upcoming
                    </span>
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {event.attendees} attending
                    </span>
                  </div>

                  {/* Event Title */}
                  <h4 className="font-heading font-semibold text-xl mb-3">
                    {event.title}
                  </h4>

                  {/* Event Details */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      {event.time}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      {event.location}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4">
                    {event.description}
                  </p>

                  {/* CTA */}
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Register Now
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Past Events */}
          <div>
            <h3 className="font-heading font-semibold text-2xl mb-8 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-muted-foreground"></div>
              Past Events
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pastEvents.map((event, index) => (
                <div
                  key={index}
                  className="bg-secondary/50 border border-border rounded-2xl p-6 hover-lift"
                >
                  <h4 className="font-heading font-semibold text-lg mb-2">
                    {event.title}
                  </h4>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="h-4 w-4" />
                    {event.date}
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    {event.description}
                  </p>
                  <div className="flex items-center gap-1 text-sm">
                    <Users className="h-4 w-4 text-primary" />
                    <span className="font-medium text-primary">{event.attendees}</span>
                    <span className="text-muted-foreground">participants</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter CTA */}
          <div className="mt-16 bg-gradient-to-br from-google-blue/10 via-google-red/10 to-google-yellow/10 rounded-3xl p-8 lg:p-12 border border-border/50 text-center">
            <h3 className="font-heading font-semibold text-2xl lg:text-3xl mb-3">
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
                className="flex-1 px-4 py-3 rounded-full border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="bg-primary hover:bg-primary/90 rounded-full px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
