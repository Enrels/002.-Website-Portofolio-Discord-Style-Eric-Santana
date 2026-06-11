import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Instagram } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

import heroRealImg from "@/assets/hero-real.jpeg";
import aboutRealImg from "@/assets/about-real.jpeg";
import logoImg from "@/assets/logo.png";

const translations = {
  EN: {
    nav: ["home", "projects", "skills", "about-me", "contacts"],
    heroTitle: <>Junior AI Engineer | <span className="text-primary">Prompt Specialist</span> & <span className="text-primary">Automation</span></>,
    heroSub: "I'm currently focused on building AI-powered solutions: prompt engineering, workflow automation, and creative content generation using AI tools.",
    heroBtn: "Contact me",
    workingOn: "Currently working on",
    freelance: "Freelance",
    quoteText: '"A person who has held a knife for too long may not know what to do when handed a flower."',
    quoteAuthor: "- Enrel",
    projectsTitle: "projects",
    viewAll: "View all",
    viewBtn: "View",
    project1Title: "Graphic Design",
    project1Desc: "Creative design work using industry-standard tools.",
    project1Tags: ["Photoshop", "Canva", "Illustrator", "Adobe Animate"],
    project2Title: "3D Design",
    project2Desc: "3D modeling and visualization projects.",
    project2Tags: ["Blender 3D", "SketchUp"],
    skillsTitle: "skills",
    langTitle: "Languages",
    langSkills: "Javascript  C++  Python  etc.",
    toolsTitle: "Tools",
    toolsSkills: "VSCode  Linux  Windows  Figma  Android Studio  GitHub  Photoshop  Animate  Illustrator  SketchUp  Blender  etc.",
    othersTitle: "Others",
    othersSkills: "HTML  CSS  EJS  SCSS  etc.",
    aboutTitle: "about-me",
    aboutText: [
      "I'm Eric Santana Siahaan — a creative tech professional transitioning into AI Engineering, with a strong foundation in Graphic Design and Digital Marketing.",
      "My journey in tech started in 2018 after graduating from Vocational High School majoring in Computer and Network Engineering. Since then, I've worn many hats:",
      [
        "Graphic Designer — 10+ years of freelance experience using Adobe Photoshop, CorelDraw, Adobe Animate, SketchUp, and Blender 3D.",
        "Digital Marketing Manager — Managed full digital presence at PT. AMS Global Mandiri (AMS Trans), Sidoarjo, from August 2024 to December 2025.",
        "AI Engineer (Beginner) — Currently self-learning AI prompting, automation, and building practical AI-powered tools using Python.",
      ],
      "What makes me different is the combination: I don't just build — I design and communicate. That means AI solutions I work on are practical, visually clear, and user-friendly.",
      "I'm open to freelance projects, collaborations, and opportunities in AI, automation, or creative tech.",
    ],
    contactsTitle: "contacts",
    contactsText: "I'm interested in freelance opportunities. However, if you have any other requests or questions, don't hesitate to contact me.",
    messageMe: "Message me here",
    footerTagline: "Junior AI Engineer | Prompt Specialist & Automation",
    copyright: "© Copyright 2026. Made by Eric Santana Siahaan",
    media: "Media",
  },
  ID: {
    nav: ["beranda", "proyek", "keahlian", "tentang-saya", "kontak"],
    heroTitle: <>Junior AI Engineer | <span className="text-primary">Spesialis Prompt</span> & <span className="text-primary">Otomasi</span></>,
    heroSub: "Saya saat ini fokus membangun solusi berbasis AI: rekayasa prompt, otomasi alur kerja, dan pembuatan konten kreatif menggunakan alat-alat AI.",
    heroBtn: "Hubungi saya",
    workingOn: "Sedang mengerjakan",
    freelance: "Freelance",
    quoteText: '"Seseorang yang terlalu lama memegang pisau mungkin tidak tahu harus berbuat apa ketika diberi bunga."',
    quoteAuthor: "- Enrel",
    projectsTitle: "proyek",
    viewAll: "Lihat semua",
    viewBtn: "Lihat",
    project1Title: "Desain Grafis",
    project1Desc: "Karya desain kreatif menggunakan alat-alat industri terkemuka.",
    project1Tags: ["Photoshop", "Canva", "Illustrator", "Adobe Animate"],
    project2Title: "Desain 3D",
    project2Desc: "Pemodelan dan visualisasi 3D.",
    project2Tags: ["Blender 3D", "SketchUp"],
    skillsTitle: "keahlian",
    langTitle: "Bahasa",
    langSkills: "Javascript  C++  Python  dll.",
    toolsTitle: "Alat",
    toolsSkills: "VSCode  Linux  Windows  Figma  Android Studio  GitHub  Photoshop  Animate  Illustrator  SketchUp  Blender  dll.",
    othersTitle: "Lainnya",
    othersSkills: "HTML  CSS  EJS  SCSS  dll.",
    aboutTitle: "tentang-saya",
    aboutText: [
      "Saya Eric Santana Siahaan — seorang profesional teknologi kreatif yang bertransisi ke AI Engineering, dengan fondasi kuat di Desain Grafis dan Pemasaran Digital.",
      "Perjalanan saya di bidang teknologi dimulai pada 2018 setelah lulus dari SMK jurusan Teknik Komputer dan Jaringan. Sejak saat itu, saya telah menjalani berbagai peran:",
      [
        "Desainer Grafis — 10+ tahun pengalaman freelance menggunakan Adobe Photoshop, CorelDraw, Adobe Animate, SketchUp, dan Blender 3D.",
        "Manajer Pemasaran Digital — Mengelola kehadiran digital penuh di PT. AMS Global Mandiri (AMS Trans), Sidoarjo, dari Agustus 2024 hingga Desember 2025.",
        "AI Engineer (Pemula) — Saat ini belajar mandiri tentang prompting AI, otomasi, dan membangun alat praktis berbasis AI menggunakan Python.",
      ],
      "Yang membuat saya berbeda adalah kombinasinya: saya tidak hanya membangun — saya juga merancang dan berkomunikasi. Artinya, solusi AI yang saya kerjakan bersifat praktis, jelas secara visual, dan ramah pengguna.",
      "Saya terbuka untuk proyek freelance, kolaborasi, dan peluang di bidang AI, otomasi, atau teknologi kreatif.",
    ],
    contactsTitle: "kontak",
    contactsText: "Saya tertarik dengan peluang freelance. Namun, jika Anda memiliki permintaan atau pertanyaan lain, jangan ragu untuk menghubungi saya.",
    messageMe: "Hubungi saya di sini",
    footerTagline: "Junior AI Engineer | Spesialis Prompt & Otomasi",
    copyright: "© Hak Cipta 2026. Dibuat oleh Eric Santana Siahaan",
    media: "Media",
  },
};

const DiscordIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.001.022.015.043.03.056a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
  </svg>
);

const WhatsAppIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const DotsPattern = ({ className = "" }: { className?: string }) => (
  <svg className={className} width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
    {Array.from({ length: 5 }).map((_, row) =>
      Array.from({ length: 5 }).map((_, col) => (
        <circle key={`${row}-${col}`} cx={4 + col * 19} cy={4 + row * 19} r="2" fill="currentColor" opacity="0.3" />
      ))
    )}
  </svg>
);

const GraphicDesignPlaceholder = () => (
  <div className="w-full h-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, #1a1a2e 0%, #3d1a78 100%)" }}>
    <div className="text-center">
      <div className="text-5xl mb-2">🎨</div>
      <div className="text-primary text-xs font-mono">Graphic Design</div>
    </div>
  </div>
);

const ThreeDPlaceholder = () => (
  <div className="w-full h-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, #0d1b2a 0%, #1b4332 100%)" }}>
    <div className="text-center">
      <div className="text-5xl mb-2">🧊</div>
      <div className="text-primary text-xs font-mono">3D Design</div>
    </div>
  </div>
);

type Lang = "EN" | "ID";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [lang, setLang] = useState<Lang>("EN");
  const t = translations[lang];

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

  const navIds = ["home", "projects", "skills", "about-me", "contacts"];

  return (
    <div className="min-h-screen text-foreground font-mono" style={{ backgroundColor: "#282C33" }}>

      {/* Sidebar Socials */}
      <div className="fixed left-4 top-0 h-full flex-col items-center justify-center gap-4 hidden lg:flex z-40">
        <div className="w-px h-32 bg-muted-foreground/30"></div>
        <a href="https://github.com/Enrels" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Github size={20} /></a>
        <a href="https://www.linkedin.com/in/eric-santana-siahaan-2199a92b9/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin size={20} /></a>
        <a href="https://mail.google.com/mail/u/2/#inbox?compose=CllgCJlKGDGMgnRggcFHqwpsVhdKBTBJpPlVRFpbVXLsqjKLmLtslwtnHJSgddcVPXtRrTbGtGq" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Mail size={20} /></a>
        <div className="w-px h-32 bg-muted-foreground/30"></div>
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b border-border/10" style={{ backgroundColor: "#282C33ee" }}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#home" className="text-xl font-bold flex items-center gap-2">
            <img
              src={logoImg}
              alt="Eric Santana"
              className="h-8 w-auto"
              style={{
                filter: "brightness(0) saturate(100%) invert(59%) sepia(48%) saturate(800%) hue-rotate(250deg) brightness(1.1) drop-shadow(0 0 8px #C778DD)",
              }}
            />
            <span style={{ color: "#C778DD", textShadow: "0 0 10px #C778DD88" }}>Eric Santana</span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {navIds.map((id, i) => (
              <a
                key={id}
                href={`#${id}`}
                className={`text-sm hover:text-white transition-colors ${activeSection === id ? "text-white" : "text-muted-foreground"}`}
              >
                <span className="text-primary">#</span>{t.nav[i]}
              </a>
            ))}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span
                onClick={() => setLang("EN")}
                className={`cursor-pointer hover:text-white transition-colors ${lang === "EN" ? "text-white" : ""}`}
              >EN</span>
              <span className="opacity-50">/</span>
              <span
                onClick={() => setLang("ID")}
                className={`cursor-pointer hover:text-white transition-colors ${lang === "ID" ? "text-white" : ""}`}
              >ID</span>
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
              {t.heroTitle}
            </h1>
            <p className="text-muted-foreground max-w-lg">
              {t.heroSub}
            </p>
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 text-sm px-5 py-2"
              onClick={() => document.getElementById("contacts")?.scrollIntoView({ behavior: "smooth" })}
            >
              {t.heroBtn}
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 flex flex-col items-center relative"
          >
            <div className="absolute top-10 left-10 text-primary z-0">
              <svg width="40" height="40" viewBox="0 0 100 100" fill="none"><path d="M50 0L100 50L50 100L0 50L50 0Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2"/></svg>
            </div>
            <img
              src={heroRealImg}
              alt="Eric Santana"
              className="w-full max-w-[400px] object-cover object-top border-b border-primary relative z-10 rounded-sm"
              style={{ maxHeight: "480px" }}
            />
            <DotsPattern className="absolute bottom-16 right-10 text-primary z-0" />
            <div className="mt-4 p-2 border border-border inline-flex items-center gap-2 relative z-10 w-full max-w-[400px]" style={{ backgroundColor: "#282C33" }}>
              <div className="w-3 h-3 bg-primary"></div>
              <span className="text-muted-foreground text-sm">{t.workingOn} <span className="text-white">{t.freelance}</span></span>
            </div>
          </motion.div>
        </section>

        {/* Quote Section */}
        <section className="py-20 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative inline-block max-w-2xl w-full"
          >
            <div className="absolute -top-4 -left-4 text-4xl text-primary font-serif">"</div>
            <div className="border border-border p-6 text-xl" style={{ backgroundColor: "#282C33" }}>
              {t.quoteText}
            </div>
            <div className="absolute -bottom-4 -right-4 text-4xl text-primary font-serif">"</div>
            <div className="border border-border border-t-0 p-4 text-right" style={{ backgroundColor: "#282C33" }}>
              {t.quoteAuthor}
            </div>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-4">
              <h2 className="text-3xl font-medium"><span className="text-primary">#</span>{t.projectsTitle}</h2>
              <div className="w-32 h-px bg-primary/50"></div>
            </div>
            <a href="#" className="text-white hover:text-primary transition-colors flex items-center gap-2 text-sm">
              {t.viewAll} →
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
            {[
              {
                title: t.project1Title,
                desc: t.project1Desc,
                tags: t.project1Tags,
                placeholder: <GraphicDesignPlaceholder />,
              },
              {
                title: t.project2Title,
                desc: t.project2Desc,
                tags: t.project2Tags,
                placeholder: <ThreeDPlaceholder />,
              },
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
                  {project.placeholder}
                </div>
                <div className="p-3 border-b border-border text-sm text-muted-foreground">
                  {project.tags.join("  ")}
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="text-xl font-medium mb-2 text-white">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-1">{project.desc}</p>
                  <div className="flex gap-4">
                    <Button variant="outline" className="border-primary text-white hover:bg-primary/10 rounded-none h-9 px-4">
                      {t.viewBtn} →
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl font-medium"><span className="text-primary">#</span>{t.skillsTitle}</h2>
            <div className="w-32 h-px bg-primary/50"></div>
          </div>

          <div className="flex flex-wrap gap-4">
            {[
              { title: t.langTitle, skills: t.langSkills },
              { title: t.toolsTitle, skills: t.toolsSkills },
              { title: t.othersTitle, skills: t.othersSkills },
            ].map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border border-border min-w-[180px] max-w-[280px]"
                style={{ backgroundColor: "#282C33" }}
              >
                <div className="p-2 border-b border-border font-medium text-white">
                  {cat.title}
                </div>
                <div className="p-2 text-muted-foreground text-sm leading-relaxed">
                  {cat.skills}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* About Me Section */}
        <section id="about-me" className="py-20">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-medium"><span className="text-primary">#</span>{t.aboutTitle}</h2>
            <div className="w-64 h-px bg-primary/50"></div>
          </div>

          <div className="flex flex-col md:flex-row gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 space-y-4"
            >
              {t.aboutText.map((block, i) =>
                Array.isArray(block) ? (
                  <ul key={i} className="space-y-2 pl-2">
                    {block.map((item, j) => (
                      <li key={j} className="text-muted-foreground flex gap-2">
                        <span className="text-primary shrink-0">\\</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p key={i} className="text-muted-foreground">{block}</p>
                )
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 relative flex justify-center"
            >
              <DotsPattern className="absolute top-10 left-0 text-primary z-0" />
              <div className="flex flex-col items-center relative z-10">
                <img
                  src={aboutRealImg}
                  alt="Eric Santana"
                  className="w-full max-w-[320px] border-b border-primary object-cover rounded-sm"
                  style={{ maxHeight: "420px", objectPosition: "top" }}
                />
                <p className="mt-3 text-xs font-mono" style={{ color: "#C778DD" }}>Generated by ChatGPT</p>
              </div>
              <DotsPattern className="absolute bottom-10 right-0 text-primary z-0" />
            </motion.div>
          </div>
        </section>

        {/* Contacts Section */}
        <section id="contacts" className="py-20">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-medium"><span className="text-primary">#</span>{t.contactsTitle}</h2>
            <div className="w-32 h-px bg-primary/50"></div>
          </div>

          <div className="flex flex-col gap-10 items-start">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-muted-foreground max-w-md"
            >
              {t.contactsText}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border border-border p-6 bg-card w-full max-w-sm mx-auto"
            >
              <h3 className="font-medium text-white mb-5 text-lg">{t.messageMe}</h3>
              <div className="space-y-3 text-muted-foreground text-sm">
                <a
                  href="https://wa.me/6287840105200"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-white transition-colors"
                >
                  <span className="text-primary"><WhatsAppIcon size={16} /></span>
                  +62 878-4010-5200 (ID)
                </a>
                <a
                  href="mailto:santanixproject@gmail.com"
                  className="flex items-center gap-3 hover:text-white transition-colors"
                >
                  <Mail size={16} className="text-primary" />
                  santanixproject@gmail.com
                </a>
                <div className="flex items-center gap-3">
                  <span className="text-primary"><DiscordIcon size={16} /></span>
                  Enrel#6886
                </div>
                <a
                  href="https://www.instagram.com/enrelacuz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-white transition-colors"
                >
                  <Instagram size={16} className="text-primary" />
                  @enrelacuz
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-20 py-8" style={{ backgroundColor: "#282C33" }}>
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <div className="flex items-center gap-4 mb-3">
              <span className="text-xl font-bold flex items-center gap-2">
                <img src={logoImg} alt="Eric Santana" className="h-6 w-auto inline-block mr-1" style={{ filter: "brightness(0) saturate(100%) invert(59%) sepia(48%) saturate(800%) hue-rotate(250deg) brightness(1.1) drop-shadow(0 0 6px #C778DD)" }} />
                <span style={{ color: "#C778DD", textShadow: "0 0 10px #C778DD88" }}>Eric Santana</span>
              </span>
            </div>
            <a href="mailto:santanixproject@gmail.com" className="text-muted-foreground hover:text-white transition-colors text-sm block mb-2">
              santanixproject@gmail.com
            </a>
            <p className="text-muted-foreground text-sm">{t.footerTagline}</p>
          </div>

          <div className="md:text-right">
            <h3 className="text-xl text-white font-medium mb-4">{t.media}</h3>
            <div className="flex items-center gap-4 justify-start md:justify-end text-muted-foreground">
              <a href="https://github.com/Enrels" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><Github size={20} /></a>
              <a href="https://wa.me/6287840105200" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><WhatsAppIcon size={20} /></a>
              <a href="https://www.linkedin.com/in/eric-santana-siahaan-2199a92b9/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><Linkedin size={20} /></a>
              <a href="https://discord.com/users/Enrel" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><DiscordIcon size={20} /></a>
              <a href="https://www.instagram.com/enrelacuz/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><Instagram size={20} /></a>
            </div>
          </div>
        </div>
        <div className="text-center text-sm mt-12" style={{ color: "#C778DD", textShadow: "0 0 8px #C778DD99" }}>
          {t.copyright}
        </div>
      </footer>
    </div>
  );
}
