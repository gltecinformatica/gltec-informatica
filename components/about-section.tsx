"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export function AboutSection() {
  const pillars = [
    {
      title: "Desenvolvimento de Sistemas",
      description:
        "Criamos soluções de software personalizadas que impulsionam o crescimento do seu negócio com tecnologia de ponta.",
      icon: "⚙️",
    },
    {
      title: "Assistência em TI",
      description:
        "Suporte técnico confiável para manter suas operações funcionando sem interrupções, 24/7.",
      icon: "🛠️",
    },
    {
      title: "Gráfica Rápida",
      description:
        "Impressões de alta qualidade, materiais personalizados e acabamentos profissionais com entrega ágil.",
      icon: "🖨️",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
      },
    },
  };

  return (
    <section
      id="sobre"
      className="py-24 bg-[#0a0f1a] border-b border-slate-800"
    >
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Coluna Esquerda - Texto e Pilares */}
          <motion.div
            className="space-y-8 order-2 lg:order-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <motion.div className="space-y-4" variants={itemVariants}>
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white font-urbanist">
                Sobre a GLTEC
                <br />
                INFORMÁTICA
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Somos uma empresa especializada em soluções de tecnologia e
                gráfica rápida, atendendo empresas e pessoas físicas em
                Arcoverde e região com profissionalismo e excelência.
              </p>
            </motion.div>

            {/* Pilares */}
            <motion.div className="space-y-4" variants={containerVariants}>
              {pillars.map((pillar, index) => (
                <motion.div
                  key={index}
                  className="p-6 rounded-xl bg-slate-900/40 border border-slate-700 hover:border-orange-500/50 transition-all hover:bg-slate-900/60"
                  variants={itemVariants}
                >
                  <div className="flex gap-4 items-start">
                    <span className="text-3xl flex-shrink-0">
                      {pillar.icon}
                    </span>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white font-urbanist mb-2">
                        {pillar.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Missão */}
          </motion.div>

          {/* Coluna Direita - Vídeo com Efeito */}
          <motion.div
            className="flex justify-center items-stretch order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            variants={floatingVariants}
            animate="animate"
          >
            <div className="relative w-full max-w-lg h-full min-h-[320px] lg:min-h-[520px] flex flex-col justify-center">
              {/* Gradiente de fundo (efeito de glow) */}
              <div className="absolute -inset-2 bg-gradient-to-r from-orange-600/20 to-blue-600/20 rounded-2xl blur-xl opacity-75"></div>

              {/* Container do Vídeo */}
              <div className="relative bg-slate-900 rounded-2xl overflow-hidden border-2 border-slate-700 shadow-2xl h-full min-h-[280px] lg:min-h-[420px] flex flex-col justify-center">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover aspect-video"
                >
                  <source src="/Agent_video_Pippit.mp4" type="video/mp4" />
                  Seu navegador não suporta a tag de vídeo.
                </video>

                {/* Overlay com ícone de play subtil */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Indicador de status */}
              <motion.div
                className="mt-4 flex items-center justify-center gap-2"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span className="text-sm text-gray-400">
                  Transmissão em tempo real
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
