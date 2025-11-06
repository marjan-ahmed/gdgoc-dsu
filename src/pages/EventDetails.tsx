import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin, Users, ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const EventDetails = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();

  // Event data (in a real app, this would come from an API or context)
  const eventsData: Record<string, any> = {
    'ai-workshop': {
      title: "AI & Machine Learning Workshop",
      date: "March 15, 2025",
      time: "2:00 PM - 5:00 PM",
      location: "DSU Tech Lab, Building A",
      attendees: "45",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
      shortDescription: "Hands-on workshop covering AI fundamentals and practical ML implementations.",
      fullDescription: `Join us for an intensive 3-hour workshop on Artificial Intelligence and Machine Learning. This workshop is designed for beginners and intermediate developers who want to dive into the world of AI.

We'll cover:
- Introduction to AI and ML concepts
- Python libraries: TensorFlow and PyTorch basics
- Building your first neural network
- Real-world AI applications
- Hands-on coding session with mentors

Our expert speakers from Google will guide you through practical exercises and share industry insights. You'll leave with working code samples and resources to continue your AI learning journey.

Prerequisites:
- Basic Python programming knowledge
- Laptop with Python installed
- Enthusiasm to learn!

What to bring:
- Your laptop
- Notebook for notes
- Questions and curiosity`,
      speakers: [
        { name: "Dr. Sarah Ahmed", role: "AI Research Lead, Google" },
        { name: "Ahmed Khan", role: "ML Engineer, Tech Corp" }
      ],
      agenda: [
        { time: "2:00 PM", activity: "Welcome & Introduction to AI" },
        { time: "2:30 PM", activity: "Neural Networks Fundamentals" },
        { time: "3:15 PM", activity: "Break & Networking" },
        { time: "3:30 PM", activity: "Hands-on Coding Session" },
        { time: "4:30 PM", activity: "Q&A and Resources" }
      ]
    },
    'web-dev-bootcamp': {
      title: "Web Development Bootcamp",
      date: "March 22, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "DSU Main Auditorium",
      attendees: "60",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80",
      shortDescription: "Full-day intensive bootcamp on modern web development with React and Node.js.",
      fullDescription: `Transform yourself into a full-stack developer in just one day! This comprehensive bootcamp covers everything from frontend to backend development.

What you'll learn:
- Modern React development with hooks and context
- Building RESTful APIs with Node.js and Express
- Database integration with MongoDB
- Authentication and authorization
- Deploying web applications
- Best practices and industry standards

This bootcamp includes:
- Live coding sessions
- Hands-on projects
- Lunch and refreshments
- Networking opportunities
- Certificate of completion
- Access to exclusive learning resources

Perfect for:
- Computer Science students
- Aspiring web developers
- Anyone interested in building web applications

Requirements:
- Laptop with Node.js installed
- Basic HTML, CSS, and JavaScript knowledge
- GitHub account`,
      speakers: [
        { name: "Fatima Noor", role: "Senior Frontend Developer" },
        { name: "Ali Hassan", role: "Backend Architect" }
      ],
      agenda: [
        { time: "10:00 AM", activity: "Registration & Breakfast" },
        { time: "10:30 AM", activity: "React Fundamentals" },
        { time: "12:00 PM", activity: "Lunch Break" },
        { time: "1:00 PM", activity: "Backend with Node.js" },
        { time: "3:00 PM", activity: "Full-Stack Project" },
        { time: "3:45 PM", activity: "Closing & Certificates" }
      ]
    },
    'flutter-workshop': {
      title: "Flutter Development Workshop",
      date: "February 20, 2025",
      time: "3:00 PM - 6:00 PM",
      location: "DSU Computer Lab 2",
      attendees: "80",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80",
      shortDescription: "Mobile app development masterclass covering Flutter basics to advanced state management.",
      fullDescription: `Master mobile app development with Flutter! This workshop covered everything from Flutter basics to advanced state management techniques.

Workshop highlights:
- Flutter framework fundamentals
- Widget composition and layouts
- State management with Provider and Riverpod
- API integration and data handling
- Building beautiful UIs with Material Design
- Publishing apps to Play Store and App Store

Participants built:
- A complete todo app
- Weather forecast application
- Social media feed prototype

Key takeaways:
- Understanding Flutter's reactive framework
- Best practices for app architecture
- Performance optimization techniques
- Cross-platform development strategies

The workshop included code examples, live demonstrations, and one-on-one mentoring sessions with experienced Flutter developers.`,
      speakers: [
        { name: "Zainab Malik", role: "Mobile Dev Lead" },
        { name: "Hamza Raza", role: "Flutter Specialist" }
      ],
      agenda: [
        { time: "3:00 PM", activity: "Flutter Basics & Setup" },
        { time: "3:45 PM", activity: "Widget Deep Dive" },
        { time: "4:30 PM", activity: "Break" },
        { time: "4:45 PM", activity: "State Management" },
        { time: "5:30 PM", activity: "Building Complete App" }
      ]
    },
    'cloud-seminar': {
      title: "Cloud Computing Seminar",
      date: "February 10, 2025",
      time: "2:00 PM - 5:00 PM",
      location: "DSU Conference Hall",
      attendees: "120",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
      shortDescription: "Industry experts shared insights on AWS, Azure, and modern cloud architecture patterns.",
      fullDescription: `Industry leaders shared their insights on cloud computing, covering AWS, Azure, and modern cloud architecture patterns in this comprehensive seminar.

Topics covered:
- Cloud computing fundamentals
- AWS services overview (EC2, S3, Lambda, etc.)
- Microsoft Azure platform
- Google Cloud Platform
- Serverless architecture
- Microservices and containerization
- Cloud security best practices
- Cost optimization strategies

This seminar featured:
- Expert speakers from top tech companies
- Real-world case studies
- Live cloud deployments
- Q&A sessions with industry professionals
- Networking opportunities

Attendees learned:
- How to choose the right cloud platform
- Designing scalable cloud architectures
- DevOps and CI/CD in the cloud
- Cloud migration strategies
- Future trends in cloud computing

Perfect for students interested in cloud computing, DevOps, and modern software architecture.`,
      speakers: [
        { name: "Dr. Ayesha Siddiqui", role: "Cloud Architect, AWS" },
        { name: "Omar Farooq", role: "Azure Solutions Expert" }
      ],
      agenda: [
        { time: "2:00 PM", activity: "Cloud Computing Overview" },
        { time: "2:45 PM", activity: "AWS Deep Dive" },
        { time: "3:30 PM", activity: "Break & Networking" },
        { time: "3:45 PM", activity: "Azure & GCP Comparison" },
        { time: "4:30 PM", activity: "Panel Discussion & Q&A" }
      ]
    },
    'winter-hackathon': {
      title: "Winter Hackathon 2024",
      date: "January 15-16, 2025",
      time: "24 Hours",
      location: "DSU Campus Wide",
      attendees: "200",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
      shortDescription: "Our biggest hackathon yet with amazing projects and incredible team collaboration.",
      fullDescription: `Our biggest hackathon event brought together 200+ students for 24 hours of non-stop coding, innovation, and collaboration!

Event highlights:
- 50+ teams competed
- 15+ innovative projects submitted
- Prizes worth PKR 500,000
- Industry mentors and judges
- Free meals and snacks throughout
- Swag bags for all participants

Challenge categories:
1. Social Impact - Solutions for community problems
2. AI/ML Innovation - Intelligent applications
3. Web3 & Blockchain - Decentralized solutions
4. Mobile Apps - Cross-platform applications
5. Open Innovation - Creative problem-solving

Winning projects:
🥇 Gold: EduConnect - AI-powered learning platform
🥈 Silver: GreenPath - Environmental tracking app
🥉 Bronze: HealthHub - Telemedicine solution

What participants gained:
- Real-world project experience
- Teamwork and collaboration skills
- Exposure to new technologies
- Networking with industry professionals
- Portfolio-worthy projects
- Memories and friendships

Sponsors:
- Google Developer Student Clubs
- Microsoft Azure
- GitHub Education
- Local tech companies

The energy was incredible, with teams working through the night, mentors guiding participants, and everyone supporting each other. This is what the developer community is all about!`,
      speakers: [
        { name: "Multiple Mentors", role: "Industry Experts" }
      ],
      agenda: [
        { time: "Jan 15, 9:00 AM", activity: "Opening Ceremony" },
        { time: "Jan 15, 10:00 AM", activity: "Hacking Begins!" },
        { time: "Jan 15, 8:00 PM", activity: "Dinner & Networking" },
        { time: "Jan 16, 8:00 AM", activity: "Breakfast & Final Push" },
        { time: "Jan 16, 10:00 AM", activity: "Submission Deadline" },
        { time: "Jan 16, 2:00 PM", activity: "Presentations & Judging" },
        { time: "Jan 16, 5:00 PM", activity: "Awards Ceremony" }
      ]
    }
  };

  const event = eventsData[eventId || ''];

  if (!event) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Event Not Found</h1>
            <Button onClick={() => navigate('/')}>Go Back Home</Button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const isPastEvent = new Date(event.date) < new Date();

  return (
    <>
      <Navbar />
      <div className="min-h-screen py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Button
            variant="ghost"
            onClick={() => navigate('/#events')}
            className="mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Events
          </Button>

          {/* Event Header Image */}
          <div className="relative h-64 md:h-96 rounded-3xl overflow-hidden mb-8">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className={`px-3 py-1 ${isPastEvent ? 'bg-gray-500' : 'bg-google-green'} text-white text-xs font-medium rounded-full`}>
                {isPastEvent ? 'Past Event' : 'Upcoming Event'}
              </span>
              <h1 className="font-heading font-bold text-3xl md:text-5xl text-white mt-4">
                {event.title}
              </h1>
            </div>
          </div>

          {/* Event Meta Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl">
              <Calendar className="h-5 w-5 text-google-blue" />
              <div>
                <p className="text-xs text-muted-foreground">Date</p>
                <p className="font-medium">{event.date}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl">
              <Clock className="h-5 w-5 text-google-red" />
              <div>
                <p className="text-xs text-muted-foreground">Time</p>
                <p className="font-medium">{event.time}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl">
              <MapPin className="h-5 w-5 text-google-yellow" />
              <div>
                <p className="text-xs text-muted-foreground">Location</p>
                <p className="font-medium">{event.location}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl">
              <Users className="h-5 w-5 text-google-green" />
              <div>
                <p className="text-xs text-muted-foreground">Attendees</p>
                <p className="font-medium">{event.attendees}</p>
              </div>
            </div>
          </div>

          {/* Event Description */}
          <div className="bg-card border border-border rounded-2xl p-8 mb-8">
            <h2 className="font-heading font-semibold text-2xl mb-4">About This Event</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              {event.fullDescription.split('\n\n').map((paragraph: string, index: number) => (
                <p key={index} className="mb-4 text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Speakers */}
          <div className="bg-card border border-border rounded-2xl p-8 mb-8">
            <h2 className="font-heading font-semibold text-2xl mb-6">Speakers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {event.speakers.map((speaker: any, index: number) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-secondary/50 rounded-xl">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-google-blue to-google-red flex items-center justify-center text-white font-bold">
                    {speaker.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold">{speaker.name}</p>
                    <p className="text-sm text-muted-foreground">{speaker.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Agenda */}
          <div className="bg-card border border-border rounded-2xl p-8 mb-8">
            <h2 className="font-heading font-semibold text-2xl mb-6">Event Agenda</h2>
            <div className="space-y-4">
              {event.agenda.map((item: any, index: number) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="min-w-[120px] text-sm font-medium text-primary">
                    {item.time}
                  </div>
                  <div className="flex-1">
                    <div className="h-full border-l-2 border-border pl-4 pb-4">
                      <p className="text-muted-foreground">{item.activity}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          {!isPastEvent && (
            <div className="text-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 px-8">
                Register for This Event
              </Button>
            </div>
          )}
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
};

export default EventDetails;
