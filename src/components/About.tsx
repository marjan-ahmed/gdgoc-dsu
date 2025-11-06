import { Code2, Users2, Lightbulb, Zap } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Code2,
      title: "Innovation",
      desc: "Pushing boundaries with cutting-edge technology",
      color: "bg-google-blue/10 text-google-blue",
    },
    {
      icon: Users2,
      title: "Community",
      desc: "Building connections that last a lifetime",
      color: "bg-google-red/10 text-google-red",
    },
    {
      icon: Lightbulb,
      title: "Learning",
      desc: "Continuous growth through workshops & events",
      color: "bg-google-yellow/10 text-google-yellow",
    },
    {
      icon: Zap,
      title: "Impact",
      desc: "Creating solutions that matter",
      color: "bg-google-green/10 text-google-green",
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl">
              What is <span className="text-gradient-primary">GDG On Campus?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Google Developer Groups are community-driven hubs where students and professionals 
              come together to learn, share, and innovate.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Text Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-heading font-semibold text-2xl lg:text-3xl">
                  Empowering <span className="text-primary">Tech Enthusiasts</span> at DSU
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  GDG On Campus at DHA Suffa University is more than just a tech club—it's a 
                  vibrant ecosystem where ideas transform into reality. We bring together passionate 
                  students from all disciplines who share a common love for technology and innovation.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Through hands-on workshops, hackathons, speaker sessions, and collaborative 
                  projects, we provide the platform and resources for students to develop their 
                  skills, expand their network, and make a meaningful impact in the tech community.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                {[
                  { num: "500+", label: "Members" },
                  { num: "50+", label: "Events" },
                  { num: "20+", label: "Projects" },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="font-heading font-bold text-3xl text-primary">{stat.num}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Element - Logo Grid */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-google-blue/20 via-google-red/20 to-google-yellow/20 rounded-3xl p-8 backdrop-blur-sm border border-border/50">
                <div className="h-full flex flex-col items-center justify-center gap-8">
                  {/* Google Developer Logo Representation */}
                  <div className="relative">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="w-20 h-20 bg-google-blue rounded-2xl shadow-lg"></div>
                      <div className="w-20 h-20 bg-google-red rounded-2xl shadow-lg"></div>
                      <div className="w-20 h-20 bg-google-yellow rounded-2xl shadow-lg"></div>
                      <div className="w-20 h-20 bg-google-green rounded-2xl shadow-lg"></div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-24 h-24 bg-background rounded-full shadow-xl flex items-center justify-center">
                        <span className="font-heading font-bold text-2xl text-primary">GDG</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="font-heading font-bold text-xl">DHA Suffa University</div>
                    <div className="text-sm text-muted-foreground">On Campus Chapter</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-6 hover-lift"
              >
                <div className={`w-12 h-12 rounded-xl ${value.color} flex items-center justify-center mb-4`}>
                  <value.icon className="h-6 w-6" />
                </div>
                <h4 className="font-heading font-semibold text-lg mb-2">{value.title}</h4>
                <p className="text-sm text-muted-foreground">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
