import Image from "next/image";
import Link from "next/link";
import { WhatsAppButton } from "@/components/whatsapp-button";

export const Header: React.FC = () => {
  return (
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
            href="#depoimentos"
            className="text-sm font-medium text-gray-300 hover:text-orange-500 transition-colors"
          >
            DEPOIMENTOS
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
  );
};
