"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, CheckCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ContactForm } from "@/components/contact-form";
import { TestimonialCarousel } from "@/components/testimonial-carousel";
import { ClientLogos } from "@/components/client-logos";
import { WhatsAppButton } from "@/components/whatsapp-button";

export default function Home() {
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>(".section-reveal");
    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observerInstance.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-white">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/placeholder-logo.png?height=40&width=120"
              alt="GLTEC INFORMÁTICA"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#sobre"
              className="text-sm font-medium text-gray-300 hover:text-orange-500 transition-colors"
            >
              SOBRE
            </Link>
            <Link
              href="#servicos"
              className="text-sm font-medium text-gray-300 hover:text-orange-500 transition-colors"
            >
              SERVIÇOS
            </Link>
            <Link
              href="/pdv-expresso"
              className="text-sm font-medium text-gray-300 hover:text-orange-500 transition-colors"
            >
              PDV EXPRESSO
            </Link>
            <Link
              href="#contato"
              className="text-sm font-medium text-gray-300 hover:text-orange-500 transition-colors"
            >
              CONTATOS
            </Link>
            <WhatsAppButton phoneNumber="8799182-0080" />
          </nav>
          <div className="flex md:hidden">
            <WhatsAppButton phoneNumber="8799182-0080" />
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section with Video Background */}
        <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
          {/* Video Background */}
          <div className="absolute inset-0 w-full h-full">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="hero-video.mp4" type="video/mp4" />
            </video>
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60" />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 container px-4 md:px-6 mx-auto text-center">
            <div className="space-y-6 max-w-3xl mx-auto">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white drop-shadow-lg">
                GLTEC INFORMÁTICA
              </h1>
              <p className="text-xl md:text-2xl text-gray-100 drop-shadow-md">
                Soluções completas em gráfica rápida e assistência técnica em TI
                para empresas e pessoas físicas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  asChild
                  className="bg-orange-600 hover:bg-orange-700 text-black font-bold px-8 py-6 text-lg rounded-xl transition-all hover:scale-105 shadow-lg"
                >
                  <Link href="#servicos">Nossos Serviços</Link>
                </Button>
                <Button
                  asChild
                  className="border-2 border-white text-white hover:bg-white/10 font-bold px-8 py-6 text-lg rounded-xl transition-all hover:scale-105 bg-transparent"
                >
                  <Link href="#contato">Entre em Contato</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section
          id="servicos"
          className="section-reveal py-24 bg-slate-900 border-b border-slate-800"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                  Nossos Serviços
                </h2>
                <p className="mx-auto max-w-[900px] text-gray-400 md:text-lg">
                  Oferecemos soluções completas em gráfica rápida e assistência
                  técnica em TI.
                </p>
              </div>
            </div>
            <div className="mt-16">
              <Tabs defaultValue="grafica" className="w-full">
                <TabsList className="grid w-full grid-cols-2 bg-slate-800 border border-slate-700">
                  <TabsTrigger
                    value="grafica"
                    className="text-base data-[state=active]:bg-orange-600 data-[state=active]:text-white"
                  >
                    SERVIÇOS DE GRÁFICA RÁPIDA
                  </TabsTrigger>
                  <TabsTrigger
                    value="ti"
                    className="text-base data-[state=active]:bg-orange-600 data-[state=active]:text-white"
                  >
                    SERVIÇOS DE ASSISTÊNCIA TÉCNICA
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="grafica" className="mt-8">
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <ServiceCard
                      title="📇 Impressões e Cópias"
                      items={[
                        "Impressões coloridas e P&B",
                        "Cópias P&B e coloridas",
                        "Impressão de documentos",
                        "Digitalização de documentos",
                        "Impressão (Fotográfica e Alta Qualidade)",
                      ]}
                    />
                    <ServiceCard
                      title="📘 Encadernação e Acabamento"
                      items={[
                        "Encadernação espiral e wire-o",
                        "Plastificação de documentos",
                        "Corte e vinco",
                        "Dobras e vincos especiais",
                        "Laminação",
                      ]}
                    />
                    <ServiceCard
                      title="🎨 Materiais Gráficos e Publicitários"
                      items={[
                        "Cartões de visita",
                        "Panfletos e folders",
                        "Banners e faixas",
                        "Adesivos e etiquetas",
                        "Calendários personalizados",
                      ]}
                    />
                    <ServiceCard
                      title="📦 Personalizados e Criativos (Silhouette)"
                      items={[
                        "Recorte em vinil adesivo",
                        "Personalização de canecas",
                        "Camisetas personalizadas",
                        "Brindes corporativos",
                        "Convites e lembrancinhas",
                      ]}
                    />
                    <ServiceCard
                      title="💼 Serviços Corporativos"
                      items={[
                        "Material de escritório personalizado",
                        "Papel timbrado com logo e CNPJ",
                        "Impressão de notas fiscais",
                        "Relatórios e apresentações",
                        "Identidade visual completa",
                      ]}
                    />
                    <ServiceCard
                      title="📦 Serviços Extras"
                      items={[
                        "Montagem de apostilas (impressão + encadernação)",
                        "Impressão urgente (entrega em poucas horas)",
                        "Impressão por e-mail ou WhatsApp (serviço expresso)",
                        "Impressão a partir de pen drive ou QR code",
                      ]}
                    />
                  </div>
                </TabsContent>
                <TabsContent value="ti" className="mt-8">
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <TechServiceCard
                      title="🛠️ Manutenção de Computadores e Notebooks"
                      description="Serviços de reparo, limpeza e otimização para prolongar a vida útil do seu equipamento e melhorar seu desempenho."
                    />
                    <TechServiceCard
                      title="💾 Instalação de Programas e Sistemas"
                      description="Instalação e configuração de sistemas operacionais, softwares e aplicativos para uso pessoal ou empresarial."
                    />
                    <TechServiceCard
                      title="💻 Desenvolvimento de Sistemas e Automação"
                      description="Criação de sistemas personalizados e soluções de automação para otimizar processos e aumentar a produtividade."
                    />
                    <TechServiceCard
                      title="🌐 Redes e Conectividade"
                      description="Instalação, configuração e manutenção de redes locais, Wi-Fi, servidores e equipamentos de conectividade."
                    />
                    <TechServiceCard
                      title="📁 Recuperação de Dados"
                      description="Recuperação de arquivos e informações de dispositivos danificados, formatados ou com problemas de acesso."
                    />
                    <TechServiceCard
                      title="🧑‍💻 Suporte Técnico Remoto"
                      description="Assistência técnica à distância para resolução rápida de problemas sem necessidade de deslocamento."
                    />
                    <TechServiceCard
                      title="📈 Consultoria e Upgrades"
                      description="Orientação especializada para melhorias de hardware e software, otimizando investimentos em tecnologia."
                    />
                    <TechServiceCard
                      title="🏢 Serviços para Empresas"
                      description="Soluções completas em TI para empresas, incluindo manutenção preventiva, gestão de parque tecnológico e suporte contínuo."
                    />
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Diferenciais Section */}
        <section
          id="diferenciais"
          className="section-reveal py-24 bg-slate-950 border-b border-slate-800"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                  Nossos Diferenciais
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-lg">
                  O que nos torna a melhor escolha para seus serviços de gráfica
                  e TI
                </p>
              </div>
            </div>
            <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <DiferencialCard
                title="Atendimento Personalizado"
                description="Entendemos suas necessidades específicas e oferecemos soluções sob medida."
              />
              <DiferencialCard
                title="Rapidez na Entrega"
                description="Cumprimos prazos com agilidade sem comprometer a qualidade."
              />
              <DiferencialCard
                title="Profissionais Qualificados"
                description="Nossa equipe é composta por especialistas com ampla experiência no mercado."
              />
              <DiferencialCard
                title="Tecnologia de Ponta"
                description="Utilizamos equipamentos modernos e as melhores soluções tecnológicas."
              />
            </div>
          </div>
        </section>

        {/* Clients Section */}
        <section
          id="clientes"
          className="section-reveal py-24 bg-slate-900 border-b border-slate-800"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                  Nossos Clientes
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-lg">
                  Empresas que confiam em nossos serviços
                </p>
              </div>
            </div>
            <div className="mt-16">
              <ClientLogos />
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section
          id="depoimentos"
          className="section-reveal py-24 bg-slate-950 border-b border-slate-800"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                  Depoimentos dos Clientes
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-lg">
                  O que nossos clientes dizem sobre nós
                </p>
              </div>
            </div>
            <div className="mt-16">
              <TestimonialCarousel />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="sobre"
          className="section-reveal py-24 bg-slate-900 border-b border-slate-800"
        >
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                  Sobre a GLTEC INFORMÁTICA
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  A GLTEC INFORMÁTICA é uma empresa especializada em serviços de
                  gráfica rápida e assistência técnica em TI, atendendo clientes
                  em Arcoverde e região. Com profissionais qualificados e
                  equipamentos modernos, oferecemos soluções completas para
                  pessoas físicas e empresas.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Nossa missão é proporcionar serviços de alta qualidade, com
                  agilidade e preço justo, contribuindo para o sucesso de nossos
                  clientes através de soluções eficientes em comunicação visual
                  e tecnologia.
                </p>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/placeholder.jpg?height=400&width=500"
                  alt="GLTEC Informática"
                  width={500}
                  height={400}
                  className="rounded-2xl object-cover border-2 border-orange-600 shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contato"
          className="section-reveal py-24 bg-slate-950 border-b border-slate-800"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                  Entre em Contato
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-lg">
                  Estamos prontos para atender suas necessidades
                </p>
              </div>
            </div>
            <div className="mt-16 grid gap-8 lg:grid-cols-2">
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-orange-600/50 transition-colors">
                  <MapPin className="h-6 w-6 text-orange-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-white">Endereço</h3>
                    <p className="text-gray-400 mt-1">
                      Rua João Gonçalves de Lima - São Geraldo - Arcoverde-PE
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-orange-600/50 transition-colors">
                  <Phone className="h-6 w-6 text-orange-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-white">Telefones</h3>
                    <p className="text-gray-400 mt-1">
                      (87) 99182-0080 / (87) 99195-8156
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-orange-600/50 transition-colors">
                  <Mail className="h-6 w-6 text-orange-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-white">E-mail</h3>
                    <p className="text-gray-400 mt-1">
                      contato@gltecinformatica.com.br
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-orange-600/50 transition-colors">
                  <Clock className="h-6 w-6 text-orange-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-white">
                      Horário de Funcionamento
                    </h3>
                    <p className="text-gray-400 mt-1">
                      Segunda a Sexta: 8h às 18h
                    </p>
                    <p className="text-gray-400">Sábado: 8h às 12h</p>
                  </div>
                </div>
                <div className="aspect-video w-full rounded-2xl overflow-hidden border-2 border-slate-800">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.6855774749396!2d-37.0551!3d-8.4192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7a98f2d5e9c2c65%3A0x3b35fb490e5c6c6a!2sArcoverde%2C%20PE!5e0!3m2!1spt-BR!2sbr!4v1621436289012!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Localização GLTEC Informática"
                  ></iframe>
                </div>
              </div>
              <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Envie uma mensagem
                </h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-16 border-t border-slate-800">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 mb-10">
            <div>
              <Link href="/" className="flex items-center gap-2 mb-4">
                <Image
                  src="/placeholder-logo.png?height=40&width=120"
                  alt="GLTEC INFORMÁTICA"
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                />
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed">
                Soluções completas em gráfica rápida e assistência técnica em TI
                para empresas e pessoas físicas.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-orange-500">
                Links Rápidos
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#sobre"
                    className="text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    Sobre Nós
                  </Link>
                </li>
                <li>
                  <Link
                    href="#servicos"
                    className="text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    Nossos Serviços
                  </Link>
                </li>
                <li>
                  <Link
                    href="#diferenciais"
                    className="text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    Diferenciais
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contato"
                    className="text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    Contato
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-orange-500">
                Contato
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-orange-500 flex-shrink-0" />
                  <span className="text-gray-400">(87) 99182-0080</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-orange-500 flex-shrink-0" />
                  <span className="text-gray-400">(87) 99195-8156</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-orange-500 flex-shrink-0" />
                  <span className="text-gray-400">
                    contato@gltecinformatica.com.br
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-400">
                    Rua João Gonçalves de Lima - São Geraldo - Arcoverde-PE
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-orange-500">
                Horário de Funcionamento
              </h3>
              <ul className="space-y-2">
                <li className="text-gray-400">Segunda a Sexta: 8h às 18h</li>
                <li className="text-gray-400">Sábado: 8h às 12h</li>
                <li className="text-gray-400">Domingo: Fechado</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
            <p>
              © {new Date().getFullYear()} GLTEC INFORMÁTICA. Todos os direitos
              reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ title, items }: { title: string; items: string[] }) {
  return (
    <Card className="overflow-hidden border border-slate-700 bg-slate-900/50 hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-600/20 transition-all duration-300 hover:scale-105 rounded-xl">
      <div className="bg-gradient-to-r from-orange-600 to-orange-500 p-5">
        <h3 className="text-lg font-bold text-white">{title}</h3>
      </div>
      <div className="p-6">
        <ul className="space-y-3">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
              <span className="text-gray-300 text-sm">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}

function TechServiceCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <Card className="overflow-hidden border border-slate-700 bg-slate-900/50 hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-600/20 transition-all duration-300 hover:scale-105 rounded-xl">
      <div className="bg-black/50 p-5 border-b border-slate-700">
        <h3 className="text-lg font-bold text-white">{title}</h3>
      </div>
      <div className="p-6">
        <p className="text-gray-400 leading-relaxed">{description}</p>
      </div>
    </Card>
  );
}

function DiferencialCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <Card className="p-6 text-center border border-slate-700 bg-slate-900/50 hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-600/20 transition-all duration-300 hover:scale-105 rounded-xl">
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-orange-600/20 border border-orange-600/50">
        <CheckCircle className="h-7 w-7 text-orange-500" />
      </div>
      <h3 className="mb-3 text-lg font-bold text-white">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </Card>
  );
}
