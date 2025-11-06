import { Linkedin, Github, Twitter } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Ahmed Hassan",
      role: "Lead",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmed",
      linkedin: "#",
      github: "#",
      twitter: "#",
    },
    {
      name: "Sara Khan",
      role: "Technical Lead",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sara",
      linkedin: "#",
      github: "#",
      twitter: "#",
    },
    {
      name: "Ali Raza",
      role: "Event Manager",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ali",
      linkedin: "#",
      github: "#",
      twitter: "#",
    },
    {
      name: "Fatima Noor",
      role: "Marketing Lead",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Fatima",
      linkedin: "#",
      github: "#",
      twitter: "#",
    },
    {
      name: "Hassan Ali",
      role: "Design Lead",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Hassan",
      linkedin: "#",
      github: "#",
      twitter: "#",
    },
    {
      name: "Ayesha Malik",
      role: "Community Manager",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ayesha",
      linkedin: "#",
      github: "#",
      twitter: "#",
    },
  ];

  return (
    <section id="team" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl">
              Meet the <span className="text-gradient-primary">Builders</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our dedicated team of students passionate about technology, 
              innovation, and building a thriving developer community at DSU.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group bg-card border border-border rounded-2xl p-6 hover-lift"
              >
                {/* Avatar */}
                <div className="relative mb-6">
                  <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-google-blue/20 to-google-green/20">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Colored border on hover */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-primary/0 group-hover:border-primary/50 transition-all"></div>
                </div>

                {/* Info */}
                <div className="text-center mb-4">
                  <h3 className="font-heading font-semibold text-xl mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>

                {/* Social Links */}
                <div className="flex items-center justify-center gap-3">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-secondary hover:bg-google-blue hover:text-white flex items-center justify-center transition-all"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-secondary hover:bg-foreground hover:text-background flex items-center justify-center transition-all"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                  <a
                    href={member.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-secondary hover:bg-google-blue hover:text-white flex items-center justify-center transition-all"
                  >
                    <Twitter className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Join Team CTA */}
          <div className="mt-16 text-center">
            <div className="inline-block bg-card border border-border rounded-2xl p-8 max-w-2xl">
              <h3 className="font-heading font-semibold text-2xl mb-3">
                Want to Join Our Team?
              </h3>
              <p className="text-muted-foreground mb-6">
                We're always looking for passionate individuals to help grow our community. 
                Applications open at the start of each semester!
              </p>
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
