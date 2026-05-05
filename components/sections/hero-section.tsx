import Link from "next/link";
import { Button } from "@/components/ui/button";

export const HeroSection: React.FC = () => {
  return (
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
  );
};