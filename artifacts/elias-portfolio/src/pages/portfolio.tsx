import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

import heroImg from "@/assets/hero-portrait.png";
import logoImg from "@/assets/logo.png";
import aboutImg from "@/assets/about-portrait.png";
import chertNodesImg from "@/assets/project-chertnodes.png";
import protectXImg from "@/assets/project-protectx.png";
import kahootImg from "@/assets/project-kahoot.png";

const DotsPattern = ({ className = "" }: { className?: string }) => {
  return (
    <svg className={className} width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
      {Array.from({ length: 5 }).map((_, row) =>
        Array.from({ length: 5 }).map((_, col) => (
          <circle key={`${row}-${col}`} cx={4 + col * 19} cy={4 + row * 19} r="2" fill="currentColor" opacity="0.3" />
        ))
      )}
    </svg>
  );
};

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "projects", "skills", "about-me", "contacts"];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top >= -100 && rect.top <= 200) {
            setActiveSection(section);
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-mono">
      {/* Sidebar Socials */}
      <div className="fixed left-4 top-0 h-full flex flex-col items-center justify-center gap-4 hidden lg:flex">
        <div className="w-px h-32 bg-muted-foreground/30"></div>
        <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Github size={20} /></a>
        <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin size={20} /></a>
        <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Mail size={20} /></a>
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border/10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#home" className="text-xl font-bold flex items-center gap-2">
            <img src={logoImg} alt="Eric Santana" className="h-8 w-auto" style={{ filter: "invert(1) brightness(2)" }} /> Eric Santana
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {["home", "projects", "skills", "about-me", "contacts"].map((section) => (
              <a 
                key={section} 
                href={`#${section}`}
                className={`text-sm hover:text-white transition-colors ${activeSection === section ? "text-white" : "text-muted-foreground"}`}
              >
                <span className="text-primary">#</span>{section}
              </a>
            ))}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="text-white">EN</span>
              <span className="opacity-50">/</span>
              <span className="hover:text-white cursor-pointer">RU</span>
            </div>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-20">
        {/* Hero Section */}
        <section id="home" className="min-h-[80vh] flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 space-y-6"
          >
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              Junior AI Engineer | <span className="text-primary">Prompt Specialist</span> & <span className="text-primary">Automation</span>
            </h1>
            <p className="text-muted-foreground max-w-lg">
              I'm currently focused on building AI-powered solutions: prompt engineering, workflow automation, and creative content generation using AI tools.
            </p>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
              Contact me
            </Button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 relative"
          >
            <div className="absolute top-10 left-10 text-primary">
              <svg width="40" height="40" viewBox="0 0 100 100" fill="none"><path d="M50 0L100 50L50 100L0 50L50 0Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2"/></svg>
            </div>
            <img src={heroImg} alt="Elias - Developer" className="w-full max-w-[400px] mx-auto object-cover border-b border-primary relative z-10" />
            <DotsPattern className="absolute bottom-10 right-10 text-primary z-0" />
            <div className="mt-4 p-2 border border-border inline-flex items-center gap-2 bg-background relative z-10 w-full max-w-[400px] mx-auto">
              <div className="w-3 h-3 bg-primary"></div>
              <span className="text-muted-foreground text-sm">Currently working on <span className="text-white">Freelance</span></span>
            </div>
          </motion.div>
        </section>

        {/* Quote Section */}
        <section className="py-20 flex justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative inline-block"
          >
            <div className="absolute -top-4 -left-4 text-4xl text-primary font-serif">"</div>
            <div className="border border-border p-6 text-xl bg-card">
              "A person who has held a knife for too long may not know what to do when handed a flower."
            </div>
            <div className="absolute -bottom-4 -right-4 text-4xl text-primary font-serif">"</div>
            <div className="border border-border border-t-0 p-4 text-right bg-card">
              - Enrel
            </div>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-4">
              <h2 className="text-3xl font-medium"><span className="text-primary">#</span>projects</h2>
              <div className="w-32 h-px bg-primary/50"></div>
            </div>
            <a href="#" className="text-white hover:text-primary transition-colors flex items-center gap-2">
              View all <ChevronRight size={16} />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "ChertNodes",
                desc: "Minecraft servers hosting",
                tags: ["HTML", "SCSS", "Python", "Flask"],
                img: chertNodesImg,
                buttons: ["Live ~>", "Cached >"]
              },
              {
                title: "ProtectX",
                desc: "Discord anti-crash bot",
                tags: ["React", "Express", "Discord.js", "Node.js"],
                img: protectXImg,
                buttons: ["Live ~>"]
              },
              {
                title: "Kahoot Answers Viewer",
                desc: "Get answers to your Kahoot Quiz",
                tags: ["CSS", "Express", "Node.js"],
                img: kahootImg,
                buttons: ["Live ~>"]
              }
            ].map((project, i) => (
              <motion.div 
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border border-border flex flex-col bg-card hover:border-primary/50 transition-colors"
              >
                <div className="aspect-video border-b border-border overflow-hidden">
                  <img src={project.img} alt={project.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-3 border-b border-border flex flex-wrap gap-2 text-sm text-muted-foreground">
                  {project.tags.join("  ")}
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="text-xl font-medium mb-2 text-white">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-1">{project.desc}</p>
                  <div className="flex gap-4">
                    {project.buttons.map(btn => (
                      <Button key={btn} variant="outline" className="border-primary text-white hover:bg-primary/10 rounded-none h-9 px-4">
                        {btn}
                      </Button>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-medium"><span className="text-primary">#</span>skills</h2>
            <div className="w-48 h-px bg-primary/50"></div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            <div className="flex-1 relative min-h-[300px] hidden lg:block">
              <DotsPattern className="absolute top-10 left-10 text-primary" />
              <div className="absolute top-20 right-20 w-16 h-16 border border-border"></div>
              <div className="absolute bottom-20 left-32 w-24 h-24 border border-primary"></div>
              <DotsPattern className="absolute bottom-10 right-10 text-muted-foreground" />
            </div>

            <div className="flex-1 flex flex-wrap gap-4 items-start content-start justify-end">
              {[
                { title: "Languages", skills: ["TypeScript", "Lua", "Python", "JavaScript"] },
                { title: "Databases", skills: ["SQLite", "PostgreSQL", "Mongo"] },
                { title: "Tools", skills: ["VSCode", "Neovim", "Linux", "Figma", "XFCE", "Arch", "Git", "Font Awesome"] },
                { title: "Other", skills: ["HTML", "CSS", "EJS", "SCSS", "REST", "Jinja"] },
                { title: "Frameworks", skills: ["React", "Vue", "Biscake", "Discord.js", "Flask", "Express.js"] },
              ].map((category, i) => (
                <motion.div 
                  key={category.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="border border-border bg-card max-w-[200px]"
                >
                  <div className="p-2 border-b border-border font-medium text-white">
                    {category.title}
                  </div>
                  <div className="p-2 text-muted-foreground text-sm">
                    {category.skills.join(" ")}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section id="about-me" className="py-20">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-medium"><span className="text-primary">#</span>about-me</h2>
            <div className="w-64 h-px bg-primary/50"></div>
          </div>

          <div className="flex flex-col md:flex-row gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 space-y-6"
            >
              <p className="text-muted-foreground">
                Hello, I'm Eric Santana!
              </p>
              <p className="text-muted-foreground">
                I'm a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from scratch and make them into modern user-friendly web experiences.
              </p>
              <p className="text-muted-foreground">
                Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.
              </p>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 rounded-none mt-4">
                Read more -{'>'}
              </Button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 relative"
            >
              <DotsPattern className="absolute top-10 left-0 text-primary z-0" />
              <img src={aboutImg} alt="About Elias" className="w-full max-w-[350px] mx-auto border-b border-primary relative z-10 object-cover" />
              <DotsPattern className="absolute bottom-20 right-10 text-primary z-0" />
            </motion.div>
          </div>
        </section>

        {/* Contacts Section */}
        <section id="contacts" className="py-20">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-medium"><span className="text-primary">#</span>contacts</h2>
            <div className="w-32 h-px bg-primary/50"></div>
          </div>

          <div className="flex flex-col md:flex-row gap-12 justify-between">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex-1 text-muted-foreground max-w-md"
            >
              I'm interested in freelance opportunities. However, if you have other request or question, don't hesitate to contact me
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border border-border p-4 bg-card inline-block"
            >
              <h3 className="font-medium text-white mb-4">Message me here</h3>
              <div className="space-y-2 text-muted-foreground text-sm">
                <a href="#" className="flex items-center gap-2 hover:text-white transition-colors">
                  <div className="text-primary">@</div> Elias#5179
                </a>
                <a href="mailto:elias@elias.me" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Mail size={16} className="text-primary" /> elias@elias.me
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-20 py-8 bg-background">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-xl font-bold flex items-center gap-2 text-white">
                <img src={logoImg} alt="Eric Santana" className="h-6 w-auto inline-block mr-1" style={{ filter: "invert(1) brightness(2)" }} /> Eric Santana
              </span>
              <a href="mailto:elias@elias-dev.nl" className="text-muted-foreground hover:text-white transition-colors">
                elias@elias-dev.nl
              </a>
            </div>
            <p className="text-white">Web designer and front-end developer</p>
          </div>
          
          <div className="md:text-right">
            <h3 className="text-xl text-white font-medium mb-4">Media</h3>
            <div className="flex items-center gap-4 justify-start md:justify-end text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors"><Github size={20} /></a>
              <a href="#" className="hover:text-primary transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-primary transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>
        </div>
        <div className="text-center text-muted-foreground text-sm mt-12">
          © Copyright 2022. Made by Eric Santana
        </div>
      </footer>
    </div>
  );
}
