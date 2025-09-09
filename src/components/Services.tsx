import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { ChevronRight, Palette, Monitor, Smartphone, Layers, FileText, RefreshCw, LayoutGrid, Users, Code } from "lucide-react";

const Services = () => {
  const [activeService, setActiveService] = useState(-1);

  useEffect(() => {
    if (activeService !== -1) {
      const timer = setTimeout(() => {
        setActiveService(-1);
      }, 5000); // Closes after 5 seconds

      return () => clearTimeout(timer);
    }
  }, [activeService]);

  const services = [
    {
      id: 0,
      title: "Custom Website & Landing Page Design",
      icon: Monitor,
      description: "Modern, responsive websites and high-converting landing pages built with usability in mind.",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 1,
      title: "Web & Mobile App UI/UX Design",
      icon: Smartphone,
      description: "Intuitive, engaging interfaces designed for both web applications and mobile platforms.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Prototype & Interaction Design",
      icon: LayoutGrid,
      description: "Clickable prototypes and smooth interactions to visualize and test user journeys.",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 3,
      title: "UI/UX Redesign & Modernization",
      icon: RefreshCw,
      description: "Transforming outdated interfaces into sleek, user-focused, and modern digital experiences.",
      color: "from-orange-500 to-red-500"
    },
    {
      id: 4,
      title: "Design System & Developer Handoff",
      icon: Code,
      description: "Scalable design systems with detailed style guides for seamless collaboration with developers.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      id: 5,
      title: "User Research & Usability Testing",
      icon: Users,
      description: "Analyzing user behavior, testing designs, and refining experiences for better outcomes.",
      color: "from-pink-500 to-yellow-500"
    }
  ];

  return (
    <section id="services" className="pt-20 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 bg-portfolio-bg">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-portfolio-text mb-4">
            My Quality Services
          </h2>
          <p className="text-sm sm:text-base text-portfolio-text-muted max-w-xl sm:max-w-2xl mx-auto px-4 sm:px-0">
            I design responsive websites, landing pages, and web apps with clean 
            UI/UX that drive growth and deliver real user value.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-0">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card 
                className={`relative overflow-hidden border transition-all duration-500 cursor-pointer ${
                  activeService === service.id 
                    ? 'bg-gradient-primary border-portfolio-accent shadow-glow' 
                    : 'bg-portfolio-card border-border hover:border-portfolio-accent/50'
                }`}
                onClick={() => setActiveService(activeService === service.id ? -1 : service.id)}
              >
                <div className="p-6 lg:p-8">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      {/* Service Icon */}
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        activeService === service.id 
                          ? 'bg-white/20' 
                          : 'bg-portfolio-accent/10'
                      }`}>
                        <service.icon className={`w-6 h-6 ${
                          activeService === service.id 
                            ? 'text-white' 
                            : 'text-portfolio-accent'
                        }`} />
                      </div>

                      {/* Service Title */}
                      <h3 className={`text-sm lg:text-base font-semibold ${
                        activeService === service.id 
                          ? 'text-white' 
                          : 'text-portfolio-text'
                      }`}>
                        {service.title}
                      </h3>
                    </div>

                    {/* Arrow Icon */}
                    <motion.div
                      animate={{ 
                        rotate: activeService === service.id ? 90 : 0,
                        scale: activeService === service.id ? 1.1 : 1
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronRight className={`w-6 h-6 ${
                        activeService === service.id 
                          ? 'text-white' 
                          : 'text-portfolio-text-muted'
                      }`} />
                    </motion.div>
                  </div>

                  {/* Service Description - Expandable */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: activeService === service.id ? "auto" : 0,
                      opacity: activeService === service.id ? 1 : 0,
                      scale: activeService === service.id ? 1 : 0.95,
                      y: activeService === service.id ? 0 : 20
                    }}
                    transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-6 pl-18">
                      <p className={`text-lg leading-relaxed ${
                        activeService === service.id 
                          ? 'text-white/90' 
                          : 'text-portfolio-text-muted'
                      } text-xs lg:text-sm`}>
                        {service.description}
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Gradient Overlay for Active State */}
                {activeService === service.id && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-gradient-primary -z-10"
                  />
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;