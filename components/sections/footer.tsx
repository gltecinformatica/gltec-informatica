import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { footerContact } from "@/lib/constants/contact";

export const Footer: React.FC = () => {
  return (
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
                  href="#missao-visao-valores"
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  Missão e Valores
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
                  href="#depoimentos"
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  Depoimentos
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
            <h3 className="text-lg font-bold mb-4 text-orange-500">Contato</h3>
            <ul className="space-y-3">
              {footerContact.phones.map((phone, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-orange-500 flex-shrink-0" />
                  <span className="text-gray-400">{phone}</span>
                </li>
              ))}
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-orange-500 flex-shrink-0" />
                <span className="text-gray-400">{footerContact.email}</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-orange-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">{footerContact.address}</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-orange-500">
              Horário de Funcionamento
            </h3>
            <ul className="space-y-2">
              {footerContact.hours.map((hour, index) => (
                <li key={index} className="text-gray-400">
                  {hour}
                </li>
              ))}
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
  );
};
