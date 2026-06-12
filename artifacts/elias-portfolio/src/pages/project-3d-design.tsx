import { motion } from "framer-motion";
import { ArrowLeft, Box, Cpu } from "lucide-react";
import logoImg from "@/assets/logo.png";

const tools = [
  { name: "Blender 3D", icon: "🧊", desc: "3D modeling, sculpting, rigging, rendering, and animation" },
  { name: "SketchUp",   icon: "🏗️", desc: "Architectural and interior 3D visualization" },
];

const projects = [
  { title: "3D Character & Environment Design", client: "Online Game Projects", year: "2015–2024", tags: ["3D Modeling", "Game Art", "Blender"], color: "#C778DD",
    desc: "Designed 3D character models, environments, and game assets for online game projects. Handled full pipeline from modeling to UV unwrapping and texture baking." },
  { title: "Architectural Visualization", client: "Freelance", year: "2018–present", tags: ["SketchUp", "Visualization", "Interior"], color: "#7C5CBF",
    desc: "3D interior and exterior architectural models for client presentations. SketchUp-based modeling with detailed scene compositions." },
  { title: "3D Animation & Motion", client: "Various Clients", year: "2019–present", tags: ["Blender", "Animation", "Rigging"], color: "#C778DD",
    desc: "Character rigging and animation sequences in Blender — from walk cycles to cutscene animations for game and marketing use." },
  { title: "Product 3D Mockups", client: "Freelance", year: "2020–present", tags: ["Blender", "Product Design", "Rendering"], color: "#7C5CBF",
    desc: "Photorealistic product renders for marketing materials — packaging, merchandise, and promotional 3D mockups." },
];

const stats = [
  { label: "Years experience", value: "9+" },
  { label: "Primary tool", value: "Blender" },
  { label: "Specialization", value: "Game Art" },
  { label: "Rendering", value: "Cycles / EEVEE" },
];

export default function Project3DDesign() {
  const accentColor = "#C778DD";
  const pageBg = "#282C33";
  const mutedColor = "#ABB2BF";

  return (
    <div className="min-h-screen font-mono" style={{ backgroundColor: pageBg, color: "#ffffff" }}>

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-sm border-b border-white/10" style={{ backgroundColor: pageBg + "ee" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center gap-4">
          <a href="/" className="flex items-center gap-2">
            <img src={logoImg} alt="back" className="h-7 w-auto"
              style={{ filter: "brightness(0) saturate(100%) invert(59%) sepia(48%) saturate(800%) hue-rotate(250deg) brightness(1.1)" }}/>
            <span className="text-lg font-bold" style={{ color: accentColor }}>Eric Santana</span>
          </a>
          <span style={{ color: mutedColor }}>/</span>
          <span className="text-sm" style={{ color: mutedColor }}>3d-design</span>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-16 space-y-20">

        {/* Hero */}
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="flex items-center gap-3 mb-4">
            <Box size={32} style={{ color: accentColor }}/>
            <h1 className="text-4xl sm:text-5xl font-semibold">
              <span style={{ color: accentColor }}>#</span>3d-design
            </h1>
          </div>
          <p className="text-lg max-w-2xl" style={{ color: mutedColor }}>
            3D modeling, animation, and visualization using Blender and SketchUp — from game-ready character assets
            to photorealistic architectural renders.
          </p>
        </motion.section>

        {/* Stats */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="p-4 text-center"
                style={{ border: `1px solid ${accentColor}44`, backgroundColor: "hsl(240 28% 16%)" }}>
                <div className="text-2xl font-bold mb-1" style={{ color: accentColor }}>{s.value}</div>
                <div className="text-xs" style={{ color: mutedColor }}>{s.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Tools */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-2xl font-medium mb-6" style={{ color: "#ffffff" }}>
            <span style={{ color: accentColor }}>//</span> Tools & Software
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {tools.map((tool, i) => (
              <motion.div key={tool.name} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="p-5 flex gap-4 items-start"
                style={{ border: `1px solid ${accentColor}44`, backgroundColor: "hsl(240 28% 16%)" }}>
                <span className="text-3xl">{tool.icon}</span>
                <div>
                  <div className="font-medium" style={{ color: "#ffffff" }}>{tool.name}</div>
                  <div className="text-sm mt-1" style={{ color: mutedColor }}>{tool.desc}</div>
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

        {/* 3D Preview placeholder */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-2xl font-medium mb-6" style={{ color: "#ffffff" }}>
            <span style={{ color: accentColor }}>//</span> 3D Showcase
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {["Character Model", "Environment Scene", "Architectural Viz", "Product Render", "Game Asset", "Animation"].map((label, i) => (
              <motion.div key={label} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="aspect-square flex flex-col items-center justify-center gap-2"
                style={{ background: `linear-gradient(135deg, #1a1a2e ${i * 10}%, #${i % 2 === 0 ? "3d1a78" : "1b4332"} 100%)`, border: `1px solid ${accentColor}22` }}>
                <Cpu size={24} style={{ color: accentColor, opacity: 0.6 }}/>
                <span className="text-xs text-center px-2" style={{ color: mutedColor }}>{label}</span>
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
