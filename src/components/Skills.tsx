import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";

const Skills = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragConstraints, setDragConstraints] = useState({ left: -999999, right: 999999 }); // Unlimited constraints
  const [containerWidth, setContainerWidth] = useState(0);
  const [animationEnabled, setAnimationEnabled] = useState(true);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);
  const [currentPosition, setCurrentPosition] = useState(0);
  const containerRef = useRef(null);
  const resumeTimeoutRef = useRef(null);
  const motionRef = useRef(null);
  const singleSetWidth = useRef(0);

  // Detect if device is mobile or tablet
  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      setIsMobileOrTablet(width < 1280); // xl breakpoint
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  // Calculate drag constraints based on screen size
  useEffect(() => {
    const updateConstraints = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        singleSetWidth.current = testimonials.length * 320 + (testimonials.length - 1) * 24;
        setContainerWidth(containerWidth);
        // No constraints - infinite scroll
        setDragConstraints({ left: -999999, right: 999999 });
      }
    };

    updateConstraints();
    window.addEventListener('resize', updateConstraints);
    return () => window.removeEventListener('resize', updateConstraints);
  }, []);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (resumeTimeoutRef.current) {
        clearTimeout(resumeTimeoutRef.current);
      }
    };
  }, []);

  const skills = [
    {
      name: "Figma",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      level: 90
    },
    {
      name: "Adobe XD",
      icon: "https://cdn.worldvectorlogo.com/logos/adobe-xd-1.svg",
      level: 80
    },
    {
      name: "Webflow",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webflow/webflow-original.svg",
      level: 75
    },
    {
      name: "Notion",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/notion/notion-original.svg",
      level: 75
    },
    {
      name: "ChatGPT",
      icon: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
      level: 85
    },
    {
      name: "InVision",
      icon: "https://cdn.worldvectorlogo.com/logos/invision.svg",
      level: 70
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Product Manager, TechFlow Solutions",
      avatar: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=150&h=150&fit=crop&crop=face&auto=format",
      rating: 5,
      text: "Adeel delivered exceptional UI/UX designs for our e-commerce platform. His attention to detail and user-centered approach increased our conversion rates by 40%. Highly professional and responsive throughout the project."
    },
    {
      id: 2,
      name: "Ahmed Hassan",
      role: "CEO, Digital Innovations",
      avatar: "https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=150&h=150&fit=crop&crop=face&auto=format",
      rating: 5,
      text: "Working with Adeel was a fantastic experience. He understood our vision perfectly and created a modern, intuitive design for our SaaS product. The user feedback has been overwhelmingly positive."
    },
    {
      id: 3,
      name: "Emily Chen",
      role: "Marketing Director, StartupHub",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face&auto=format",
      rating: 4,
      text: "Adeel's design skills are top-notch. He redesigned our landing page and the results speak for themselves - 60% increase in lead generation. Great communication and met all deadlines."
    },
    {
      id: 4,
      name: "Omar Al-Rashid",
      role: "Founder, FinanceFirst",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format",
      rating: 5,
      text: "Exceptional work on our financial dashboard design. Adeel created a clean, professional interface that our clients love. His expertise in fintech UX really showed in the final product."
    },
    {
      id: 5,
      name: "Lisa Rodriguez",
      role: "CTO, MedTech Solutions",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face&auto=format",
      rating: 5,
      text: "Adeel's UI/UX design for our healthcare app was outstanding. He balanced complex functionality with simplicity, making it easy for both doctors and patients to use. Truly impressed!"
    },
    {
      id: 6,
      name: "Fatima Al-Zahra",
      role: "Operations Manager, EduTech Hub",
      avatar: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=150&h=150&fit=crop&crop=face&auto=format",
      rating: 4,
      text: "Adeel designed our e-learning platform with great attention to user experience. Students find it intuitive and engaging. His cultural understanding helped create an inclusive design."
    },
    {
      id: 7,
      name: "David Thompson",
      role: "VP Product, CloudSync",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face&auto=format",
      rating: 5,
      text: "Brilliant work on our cloud storage interface. Adeel transformed a complex system into something beautiful and user-friendly. Our customer satisfaction scores improved significantly."
    },
    {
      id: 8,
      name: "Amina Sheikh",
      role: "Creative Director, BrandCraft",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face&auto=format",
      rating: 5,
      text: "Adeel's design aesthetic perfectly matched our brand vision. He created stunning visuals for our creative agency website that truly represent our values and attract the right clients."
    },
    {
      id: 9,
      name: "James Wilson",
      role: "Founder, RetailPro",
      avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face&auto=format",
      rating: 4,
      text: "Great experience working with Adeel on our retail management system. He delivered clean, functional designs on time and within budget. Would definitely work with him again."
    },
    {
      id: 10,
      name: "Yusuf Ibrahim",
      role: "Tech Lead, SmartCity Solutions",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face&auto=format",
      rating: 5,
      text: "Adeel's UI design for our smart city dashboard exceeded expectations. He created an intuitive interface for complex data visualization. Professional, skilled, and easy to work with."
    }
  ];

  // Auto-scroll animation variants with infinite loop logic
  const scrollVariants = {
    animate: {
      x: [currentPosition, currentPosition - singleSetWidth.current || currentPosition - 3000],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        },
      },
    },
    hover: {
      transition: {
        duration: 0.5,
      }
    }
  };

  // Function to normalize position for infinite loop
  const normalizePosition = (position) => {
    if (singleSetWidth.current === 0) return position;
    
    // Reset position when it goes beyond one full set
    const normalizedPos = position % (-singleSetWidth.current);
    return normalizedPos > 0 ? normalizedPos - singleSetWidth.current : normalizedPos;
  };

  return (
    <section id="skills" className="py-20 px-6 bg-portfolio-bg">
      <div className="container mx-auto">
        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-portfolio-text mb-4">
              My Skills
            </h2>
            <p className="text-portfolio-text-muted max-w-2xl mx-auto">
              As one professional new opportunities and resources every day, 
              these are my favorite platforms
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0, y: 50 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  viewport={{ once: true }}
                  className="group"
                >
                <Card className="bg-portfolio-card border-border hover:border-portfolio-accent/50 transition-all duration-300 p-6 text-center hover:shadow-glow">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="h-12 mb-4 flex items-center justify-center"
                  >
                    <img src={skill.icon} alt={skill.name} className="w-10 h-10" />
                  </motion.div>
                  
                  <h3 className="text-portfolio-text font-medium mb-3">
                    {skill.name}
                  </h3>
                  
                  {/* Skill Level */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-portfolio-text-muted">Level</span>
                      <span className="text-portfolio-accent font-medium">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-portfolio-bg rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                        viewport={{ once: true }}
                        className="bg-gradient-primary h-2 rounded-full"
                      />
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-portfolio-text mb-4">
              My Client's Stories
            </h2>
            <p className="text-portfolio-text-muted max-w-2xl mx-auto">
              Empowering people in new a digital journey with my super services
            </p>
          </div>

          <div className="overflow-hidden touch-pan-x" ref={containerRef}>
            <motion.div 
              ref={motionRef}
              className="flex gap-6"
              drag="x"
              dragConstraints={dragConstraints}
              dragElastic={0.1}
              dragMomentum={false}
              animate={animationEnabled && !isHovered && !isDragging ? scrollVariants.animate : undefined}
              onMouseEnter={() => {
                setIsHovered(true);
                setAnimationEnabled(false);
                // Clear any existing timeout
                if (resumeTimeoutRef.current) {
                  clearTimeout(resumeTimeoutRef.current);
                  resumeTimeoutRef.current = null;
                }
              }}
              onMouseLeave={() => {
                setIsHovered(false);
                // Capture current position when mouse leaves
                if (motionRef.current) {
                  const transform = motionRef.current.style.transform;
                  const match = transform.match(/translateX\(([^)]+)\)/);
                  if (match) {
                    const xValue = parseFloat(match[1]);
                    const normalizedPos = normalizePosition(xValue);
                    setCurrentPosition(normalizedPos);
                  }
                }
                // Set delay for all devices (desktop gets same treatment)
                resumeTimeoutRef.current = setTimeout(() => {
                  setAnimationEnabled(true);
                }, 5000); // 5 second delay for desktop too
              }}
              onTouchStart={() => {
                setIsHovered(true);
                setAnimationEnabled(false);
                // Clear any existing timeout
                if (resumeTimeoutRef.current) {
                  clearTimeout(resumeTimeoutRef.current);
                  resumeTimeoutRef.current = null;
                }
              }}
              onTouchEnd={() => {
                setIsHovered(false);
                // Capture current position when touch ends
                if (motionRef.current) {
                  const transform = motionRef.current.style.transform;
                  const match = transform.match(/translateX\(([^)]+)\)/);
                  if (match) {
                    const xValue = parseFloat(match[1]);
                    const normalizedPos = normalizePosition(xValue);
                    setCurrentPosition(normalizedPos);
                  }
                }
                // Set delay for all devices
                resumeTimeoutRef.current = setTimeout(() => {
                  setAnimationEnabled(true);
                }, 5000); // 5 second delay for all devices
              }}
              onDragStart={() => {
                setIsDragging(true);
                setAnimationEnabled(false);
                // Clear any existing timeout
                if (resumeTimeoutRef.current) {
                  clearTimeout(resumeTimeoutRef.current);
                  resumeTimeoutRef.current = null;
                }
              }}
              onDragEnd={() => {
                setIsDragging(false);
                // Capture current position when drag ends
                if (motionRef.current) {
                  const transform = motionRef.current.style.transform;
                  const match = transform.match(/translateX\(([^)]+)\)/);
                  if (match) {
                    const xValue = parseFloat(match[1]);
                    const normalizedPos = normalizePosition(xValue);
                    setCurrentPosition(normalizedPos);
                  }
                }
                // Set delay for all devices
                resumeTimeoutRef.current = setTimeout(() => {
                  setAnimationEnabled(true);
                }, 5000); // 5 second delay for all devices
              }}
              onDoubleClick={() => {
                // Double click to re-enable auto-scroll animation
                setAnimationEnabled(true);
              }}
              style={{ 
                width: `${testimonials.length * 5 * 320 + (testimonials.length * 5 - 1) * 24}px`, // 5 copies for seamless infinite scroll
                cursor: isHovered || isDragging ? 'grab' : 'default'
              }}
              whileTap={{ cursor: 'grabbing' }}
            >
              {/* Render 5 copies of testimonials for true infinite scroll */}
              {Array.from({ length: 5 }, (_, setIndex) => 
                testimonials.map((testimonial) => (
                  <Card 
                    key={`set-${setIndex}-${testimonial.id}`}
                    className="bg-portfolio-card border-border hover:border-portfolio-accent/50 transition-all duration-300 p-6 sm:p-8 hover:shadow-glow h-[350px] sm:h-[400px] flex flex-col w-[280px] sm:w-[300px] md:w-[320px] flex-shrink-0"
                  >
                    {/* Rating Stars */}
                    <div className="flex gap-1 mb-3 sm:mb-4">
                      {[...Array(testimonial.rating)].map((_, starIndex) => (
                        <Star key={starIndex} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <blockquote className="text-portfolio-text-muted leading-relaxed flex-grow text-sm sm:text-base">
                      "{testimonial.text}"
                    </blockquote>

                    {/* Client Info */}
                    <div className="flex items-center gap-3 sm:gap-4 pt-4 sm:pt-6 mt-auto border-t border-border">
                      <Avatar className="w-10 h-10 sm:w-12 sm:h-12 shrink-0">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                      </Avatar>
                      
                      <div className="min-w-0">
                        <h4 className="text-portfolio-text font-semibold truncate text-sm sm:text-base">
                          {testimonial.name}
                        </h4>
                        <p className="text-portfolio-text-muted text-xs sm:text-sm truncate">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))
              ).flat()}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
