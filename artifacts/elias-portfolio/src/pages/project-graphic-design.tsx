import { motion } from "framer-motion";
import { ArrowLeft, Palette, Monitor, Layers, Pen } from "lucide-react";
import logoImg from "@/assets/logo.png";

const tools = [
  { name: "Adobe Photoshop", icon: "🖼️", desc: "Photo manipulation, digital painting, compositing" },
  { name: "CorelDraw",       icon: "✏️", desc: "Vector illustration, logo design, layouts" },
  { name: "Adobe Illustrator", icon: "🖊️", desc: "Vector artwork, iconography, typography" },
  { name: "Adobe Animate",  icon: "🎬", desc: "Motion graphics, 2D animation, interactive content" },
  { name: "Canva",           icon: "🎨", desc: "Social media graphics, presentations, marketing material" },
];

const projects = [
  { title: "Event Organizer Branding", client: "Garindo Media Tama", year: "2019–2021", tags: ["Branding", "Print"], color: "#C778DD", desc: "Exhibition and conference branding for government events across Java — stage designs, banners, and advertisement materials." },
  { title: "Promotional Advertisements", client: "Teguh Mandiri Promosindo", year: "2019–2021", tags: ["Advertising", "Print"], color: "#7C5CBF", desc: "Large-format advertising and promotional materials for events managed across Sumatra (South Sumatra region)." },
  { title: "Social Media Content", client: "PT. AMS Global Mandiri", year: "2024–2025", tags: ["Social Media", "Digital"], color: "#C778DD", desc: "Full digital marketing visual content — posts, stories, banners, and campaign materials." },
  { title: "2D Game Assets & Maps", client: "Online Game Projects", year: "2015–2024", tags: ["Game Art", "Animation"], color: "#7C5CBF", desc: "2D/3D game asset design, map creation, event graphics, and in-game animation using Adobe Animate." },
  { title: "Freelance Design Portfolio", client: "Various Clients", year: "2013–present", tags: ["Freelance", "Various"], color: "#C778DD", desc: "10+ years of freelance graphic design across corporate identity, packaging, editorial, and promotional materials." },
];

export default function ProjectGraphicDesign() {
  const accentColor = "#C778DD";
  const pageBg = "#282C33";
  const mutedColor = "#ABB2BF";

  return (
    <div className="min-h-screen font-mono" style={{ backgroundColor: pageBg, color: "#ffffff" }}>

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-sm border-b border-white/10" style={{ backgroundColor: pageBg + "ee" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center gap-4">
          <a href="/" className="flex items-center gap-2 group">
            <img src={logoImg} alt="back" className="h-7 w-auto"
              style={{ filter: "brightness(0) saturate(100%) invert(59%) sepia(48%) saturate(800%) hue-rotate(250deg) brightness(1.1)" }}/>
            <span className="text-lg font-bold" style={{ color: accentColor }}>Eric Santana</span>
          </a>
          <span style={{ color: mutedColor }}>/</span>
          <span className="text-sm" style={{ color: mutedColor }}>graphic-design</span>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-16 space-y-20">

        {/* Hero */}
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="flex items-center gap-3 mb-4">
            <Palette size={32} style={{ color: accentColor }}/>
            <h1 className="text-4xl sm:text-5xl font-semibold">
              <span style={{ color: accentColor }}>#</span>graphic-design
            </h1>
          </div>
          <p className="text-lg max-w-2xl" style={{ color: mutedColor }}>
            10+ years of creative design experience — from large-scale event branding to digital campaigns and 2D game art.
            Proficient with industry-standard tools across print, digital, and motion.
          </p>
        </motion.section>

        {/* Tools */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-2xl font-medium mb-6" style={{ color: "#ffffff" }}>
            <span style={{ color: accentColor }}>//</span> Tools & Software
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tools.map((tool, i) => (
              <motion.div key={tool.name} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="p-4 flex gap-3 items-start"
                style={{ border: `1px solid ${accentColor}44`, backgroundColor: "hsl(240 28% 16%)" }}>
                <span className="text-2xl">{tool.icon}</span>
                <div>
                  <div className="font-medium text-sm" style={{ color: "#ffffff" }}>{tool.name}</div>
                  <div className="text-xs mt-1" style={{ color: mutedColor }}>{tool.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Projects */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-2xl font-medium mb-6" style={{ color: "#ffffff" }}>
            <span style={{ color: accentColor }}>//</span> Selected Work
          </h2>
          <div className="space-y-5">
            {projects.map((p, i) => (
              <motion.div key={p.title} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="p-5 sm:p-6 flex flex-col sm:flex-row gap-4 sm:gap-6"
                style={{ border: `1px solid ${p.color}44`, backgroundColor: "hsl(240 28% 16%)" }}>
                <div className="shrink-0">
                  <div className="w-2 h-full min-h-[60px] rounded-sm" style={{ backgroundColor: p.color }}/>
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <h3 className="text-lg font-medium" style={{ color: "#ffffff" }}>{p.title}</h3>
                    <span className="text-xs px-2 py-0.5 rounded-sm" style={{ backgroundColor: p.color + "22", color: p.color }}>{p.year}</span>
                  </div>
                  <div className="text-xs mb-3" style={{ color: accentColor }}>{p.client}</div>
                  <p className="text-sm" style={{ color: mutedColor }}>{p.desc}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {p.tags.map(tag => (
                      <span key={tag} className="text-xs px-2 py-0.5" style={{ border: `1px solid ${mutedColor}44`, color: mutedColor }}>{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Back */}
        <div className="pt-8">
          <a href="/" className="inline-flex items-center gap-2 text-sm hover:opacity-80 transition-opacity"
            style={{ color: accentColor }}>
            <ArrowLeft size={16}/> Back to portfolio
          </a>
        </div>
      </main>
    </div>
  );
}
