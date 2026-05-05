import { Target, Eye, ShieldCheck } from "lucide-react";

export interface MVVItem {
  title: string;
  icon: typeof Target;
  description: string;
}

export const mvvItems: MVVItem[] = [
  {
    title: "Missão",
    icon: Target,
    description:
      "Proporcionar serviços de alta qualidade, com agilidade e preço justo, contribuindo para o sucesso de nossos clientes através de soluções eficientes em comunicação visual e tecnologia.",
  },
  {
    title: "Visão",
    icon: Eye,
    description:
      "Ser referência em inovação e qualidade nos serviços de TI e gráfica rápida, sendo a primeira escolha de empresas e pessoas físicas em Arcoverde e região.",
  },
  {
    title: "Valores",
    icon: ShieldCheck,
    description:
      "Ética profissional, compromisso com o resultado, inovação constante, qualidade superior em cada detalhe e transparência total com o cliente.",
  },
];
