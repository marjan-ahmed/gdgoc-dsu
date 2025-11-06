import { Code2, Users2, Lightbulb, Zap } from "lucide-react";
import { useRef, useEffect, ReactNode } from 'react';
import { useInView, useMotionValue, useSpring, motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// AnimatedContent Component
interface AnimatedContentProps {
  children: ReactNode;
  distance?: number;
  direction?: 'vertical' | 'horizontal';
  reverse?: boolean;
  duration?: number;
  ease?: string;
  delay?: number;
}

const AnimatedContent: React.FC<AnimatedContentProps> = ({
  children,
  distance = 80,
  direction = 'vertical',
  reverse = false,
  duration = 0.8,
  ease = 'power3.out',
  delay = 0
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const axis = direction === 'horizontal' ? 'x' : 'y';
    const offset = reverse ? -distance : distance;

    gsap.set(el, {
      [axis]: offset,
      opacity: 0
    });

    gsap.to(el, {
      [axis]: 0,
      opacity: 1,
      duration,
      ease,
      delay,
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none none',
        once: true
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
      gsap.killTweensOf(el);
    };
  }, [distance, direction, reverse, duration, ease, delay]);

  return <div ref={ref}>{children}</div>;
};

// CountUp Component
interface CountUpProps {
  to: number;
  from?: number;
  duration?: number;
  className?: string;
  suffix?: string;
}

function CountUp({ to, from = 0, duration = 2, className = '', suffix = '' }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(from);
  
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100
  });

  const isInView = useInView(ref, { once: true, margin: '0px' });

  useEffect(() => {
    if (ref.current) {
      ref.current.textContent = from.toString() + suffix;
    }
  }, [from, suffix]);

  useEffect(() => {
    if (isInView) {
      motionValue.set(to);
    }
  }, [isInView, motionValue, to]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest: number) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toString() + suffix;
      }
    });

    return () => unsubscribe();
  }, [springValue, suffix]);

  return <span className={className} ref={ref} />;
}

// TiltedCard Component
interface TiltedCardProps {
  children: ReactNode;
  className?: string;
}

const TiltedCard: React.FC<TiltedCardProps> = ({ children, className = '' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useSpring(0, { damping: 30, stiffness: 100 });
  const rotateY = useSpring(0, { damping: 30, stiffness: 100 });
  const scale = useSpring(1, { damping: 30, stiffness: 100 });

  function handleMouse(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / (rect.height / 2)) * -10;
    const rotationY = (offsetX / (rect.width / 2)) * 10;

    rotateX.set(rotationX);
    rotateY.set(rotationY);
  }

  function handleMouseEnter() {
    scale.set(1.05);
  }

  function handleMouseLeave() {
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <div className="[perspective:1000px]">
      <motion.div
        ref={ref}
        className={`[transform-style:preserve-3d] ${className}`}
        style={{
          rotateX,
          rotateY,
          scale
        }}
        onMouseMove={handleMouse}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </motion.div>
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute top-20 left-10 w-96 h-96 bg-google-yellow/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-google-blue/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-32">
          
          {/* First Section: What is GDSC? */}
          <AnimatedContent direction="vertical" distance={60}>
            <div className="grid lg:grid-cols-[1fr,auto] gap-12 lg:gap-20 items-start">
              {/* Left: Content with Question Mark and Text */}
              <div className="space-y-8">
                <div className="flex items-start gap-8">
                  {/* Large Question Mark */}
                  <div className="flex-shrink-0">
                    <div className="text-[200px] lg:text-[280px] font-bold text-google-blue/10 leading-none select-none">
                      ?
                    </div>
                  </div>
                  
                  {/* Text Content */}
                  <div className="space-y-6 flex-1">
                    <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl">
                      What is GDSC?
                    </h2>
                    <p className="text-muted-foreground leading-relaxed text-base lg:text-lg text-justify">
                      Google Developer Student Clubs are university based community groups for students interested in Google developer technologies. Students from all undergraduate or graduate programs with an interest in growing as a developer are welcome. This club offers workshops, study jams, and hackathons to foster collaboration and skill development among students passionate about technology.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right: What.svg Image */}
              <div className="flex items-center justify-center lg:justify-end">
                <img 
                  src="https://gdgoc-dsu.vercel.app/what.svg" 
                  alt="GDSC Questions" 
                  className="w-72 lg:w-80 h-auto"
                />
              </div>
            </div>
          </AnimatedContent>

          {/* Second Section: About GDSC@DSU */}
          <AnimatedContent direction="vertical" distance={60} delay={0.3}>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left: DHA Suffa Building Image */}
              <div className="flex items-center justify-center order-2 lg:order-1">
                <div className="relative w-full max-w-md">
                  
                  {/* DHA Suffa Building SVG */}
                  <img 
                    src="https://gdgoc-dsu.vercel.app/dhaSuffa.svg" 
                    alt="DHA Suffa University" 
                    className="w-full h-auto"
                  />
                  
                  {/* Decorative dotted line */}
                  {/* <div className="absolute -top-4 left-0 w-full border-t-2 border-dashed border-google-yellow/30"></div> */}
                </div>
              </div>

              {/* Right: Content */}
              <div className="space-y-6 order-1 lg:order-2">
                <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl">
                  About GDSC@DSU
                </h2>
                <p className="text-muted-foreground leading-relaxed text-base lg:text-lg text-justify">
                  GDSC@DSU started its journey with the aim to make a community of tech enthusiasts eager to learn outside the classroom. Through workshops, events, and hands-on projects, we provide opportunities for students to expand their skills, connect with like-minded peers, and prepare for a successful career in the industry. By cultivating growth in leadership and teamwork skills, we prepare students for success beyond academia.
                </p>
              </div>
            </div>
          </AnimatedContent>

        </div>
      </div>
    </section>
  );
};

export default About;
