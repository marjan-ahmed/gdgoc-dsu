import { Linkedin, Github, Twitter, Mail } from "lucide-react";
import { useRef, useCallback, useMemo, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

// Simplified ProfileCard Component for Team Display
interface ProfileCardProps {
  avatarUrl: string;
  name: string;
  role: string;
  linkedin?: string;
  github?: string;
  twitter?: string;
  className?: string;
  index: number;
}

const clamp = (value: number, min = 0, max = 100): number => Math.min(Math.max(value, min), max);

const ProfileCard: React.FC<ProfileCardProps> = ({
  avatarUrl,
  name,
  role,
  linkedin,
  github,
  twitter,
  className = '',
  index
}) => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const updateCardTransform = useCallback((offsetX: number, offsetY: number) => {
    const card = cardRef.current;
    const wrap = wrapRef.current;
    if (!card || !wrap) return;

    const width = card.clientWidth;
    const height = card.clientHeight;

    const percentX = clamp((100 / width) * offsetX);
    const percentY = clamp((100 / height) * offsetY);

    const centerX = percentX - 50;
    const centerY = percentY - 50;

    wrap.style.setProperty('--pointer-x', `${percentX}%`);
    wrap.style.setProperty('--pointer-y', `${percentY}%`);
    wrap.style.setProperty('--rotate-x', `${-(centerX / 5)}deg`);
    wrap.style.setProperty('--rotate-y', `${centerY / 4}deg`);
  }, []);

  const handlePointerMove = useCallback((event: React.PointerEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    updateCardTransform(event.clientX - rect.left, event.clientY - rect.top);
  }, [updateCardTransform]);

  const handlePointerEnter = useCallback(() => {
    wrapRef.current?.classList.add('active');
    cardRef.current?.classList.add('active');
  }, []);

  const handlePointerLeave = useCallback(() => {
    wrapRef.current?.classList.remove('active');
    cardRef.current?.classList.remove('active');
    
    // Reset to center
    const card = cardRef.current;
    const wrap = wrapRef.current;
    if (card && wrap) {
      updateCardTransform(card.clientWidth / 2, card.clientHeight / 2);
    }
  }, [updateCardTransform]);

  useEffect(() => {
    // Initialize at center
    const card = cardRef.current;
    const wrap = wrapRef.current;
    if (card && wrap) {
      updateCardTransform(card.clientWidth / 2, card.clientHeight / 2);
    }
  }, [updateCardTransform]);

  const cardGradients = [
    'from-google-blue/20 via-google-green/20 to-google-yellow/20',
    'from-google-red/20 via-google-blue/20 to-google-green/20',
    'from-google-yellow/20 via-google-red/20 to-google-blue/20',
    'from-google-green/20 via-google-yellow/20 to-google-red/20',
    'from-google-blue/20 via-google-red/20 to-google-yellow/20',
    'from-google-red/20 via-google-green/20 to-google-blue/20',
  ];

  const gradient = cardGradients[index % cardGradients.length];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div
        ref={wrapRef}
        className={`profile-card-wrapper ${className}`.trim()}
        style={{
          perspective: '500px',
          transform: 'translate3d(0, 0, 0.1px)',
          position: 'relative',
          // @ts-ignore
          '--pointer-x': '50%',
          '--pointer-y': '50%',
          '--rotate-x': '0deg',
          '--rotate-y': '0deg',
        }}
      >
        <div
          ref={cardRef}
          className="profile-card group"
          onPointerMove={handlePointerMove}
          onPointerEnter={handlePointerEnter}
          onPointerLeave={handlePointerLeave}
          style={{
            transition: 'transform 0.5s ease',
            transform: 'translate3d(0, 0, 0.1px) rotateX(var(--rotate-y)) rotateY(var(--rotate-x))',
          }}
        >
          <div className={`relative aspect-[3/4] bg-gradient-to-br ${gradient} rounded-3xl overflow-hidden border border-border/50 shadow-2xl`}>
            {/* Glare effect */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: `radial-gradient(
                  circle at var(--pointer-x) var(--pointer-y),
                  rgba(255, 255, 255, 0.15) 0%,
                  rgba(255, 255, 255, 0.08) 30%,
                  transparent 60%
                )`
              }}
            />

            {/* Inner gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background/95 backdrop-blur-sm" />
            
            {/* Avatar */}
            <div className="relative h-full flex flex-col justify-between p-6">
              <div className="flex-1 flex items-center justify-center">
                <div className="relative">
                  <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl group-hover:border-primary/40 transition-all duration-300 group-hover:scale-105">
                    <img
                      src={avatarUrl}
                      alt={name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Glow ring */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-google-blue via-google-red to-google-yellow opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />
                </div>
              </div>

              {/* Info Card */}
              <div className="relative bg-card/80 backdrop-blur-md border border-border/50 rounded-2xl p-4">
                <div className="text-center mb-3">
                  <h3 className="font-heading font-bold text-lg mb-1 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                    {name}
                  </h3>
                  <p className="text-sm text-primary font-medium">{role}</p>
                </div>

                {/* Social Links */}
                <div className="flex items-center justify-center gap-2">
                  {linkedin && (
                    <a
                      href={linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-google-blue/10 hover:bg-google-blue hover:text-white border border-google-blue/20 hover:border-google-blue flex items-center justify-center transition-all duration-300 hover:scale-110"
                      style={{ pointerEvents: 'auto' }}
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  )}
                  {github && (
                    <a
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-foreground/10 hover:bg-foreground hover:text-background border border-foreground/20 hover:border-foreground flex items-center justify-center transition-all duration-300 hover:scale-110"
                      style={{ pointerEvents: 'auto' }}
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  )}
                  {twitter && (
                    <a
                      href={twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-google-blue/10 hover:bg-google-blue hover:text-white border border-google-blue/20 hover:border-google-blue flex items-center justify-center transition-all duration-300 hover:scale-110"
                      style={{ pointerEvents: 'auto' }}
                    >
                      <Twitter className="h-4 w-4" />
                    </a>
                  )}
                  <a
                    href={`mailto:${name.toLowerCase().replace(' ', '.')}@gdgdsu.com`}
                    className="w-8 h-8 rounded-full bg-google-red/10 hover:bg-google-red hover:text-white border border-google-red/20 hover:border-google-red flex items-center justify-center transition-all duration-300 hover:scale-110"
                    style={{ pointerEvents: 'auto' }}
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Team = () => {
  const teamMembers = [
    {
      name: "Ahmed Hassan",
      role: "Lead",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmed",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      twitter: "https://twitter.com",
    },
    {
      name: "Sara Khan",
      role: "Technical Lead",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sara",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      twitter: "https://twitter.com",
    },
    {
      name: "Ali Raza",
      role: "Event Manager",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ali",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      twitter: "https://twitter.com",
    },
    {
      name: "Fatima Noor",
      role: "Marketing Lead",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Fatima",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      twitter: "https://twitter.com",
    },
    {
      name: "Hassan Ali",
      role: "Design Lead",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Hassan",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      twitter: "https://twitter.com",
    },
    {
      name: "Ayesha Malik",
      role: "Community Manager",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ayesha",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      twitter: "https://twitter.com",
    },
  ];

  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section id="team" className="py-20 lg:py-32 bg-gradient-to-b from-secondary/20 via-background to-secondary/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-google-blue/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-google-green/30 rounded-full blur-3xl"></div>
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
              <span className="text-sm font-medium text-primary">Our Team</span>
            </div>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl">
              Meet the <span className="bg-clip-text text-transparent bg-gradient-to-r from-google-blue via-google-red to-google-yellow">Builders</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our dedicated team of students passionate about technology, 
              innovation, and building a thriving developer community at DSU.
            </p>
          </motion.div>

          {/* Team Grid with ProfileCards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-16">
            {teamMembers.map((member, index) => (
              <ProfileCard
                key={index}
                avatarUrl={member.image}
                name={member.name}
                role={member.role}
                linkedin={member.linkedin}
                github={member.github}
                twitter={member.twitter}
                index={index}
              />
            ))}
          </div>

          {/* Join Team CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-block bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 lg:p-10 max-w-2xl">
              <div className="mb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-google-blue to-google-green mb-4">
                  <Mail className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="font-heading font-bold text-2xl lg:text-3xl mb-3">
                Want to Join Our Team?
              </h3>
              <p className="text-muted-foreground mb-6 text-base lg:text-lg">
                We're always looking for passionate individuals to help grow our community. 
                Applications open at the start of each semester!
              </p>
              <button className="px-8 py-3 bg-gradient-to-r from-google-blue to-google-green text-white rounded-full font-medium hover:shadow-xl hover:scale-105 transition-all duration-300">
                Apply Now
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Team;
