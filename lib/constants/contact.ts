import { MapPin, Phone, Mail, Clock } from "lucide-react";

export interface ContactItem {
  icon: typeof MapPin;
  title: string;
  content: string[];
}

export const contactInfo: ContactItem[] = [
  {
    icon: MapPin,
    title: "Endereço",
    content: ["Rua João Gonçalves de Lima - São Geraldo - Arcoverde-PE"],
  },
  {
    icon: Phone,
    title: "Telefones",
    content: ["(87) 99182-0080 / (87) 99195-8156"],
  },
  {
    icon: Mail,
    title: "E-mail",
    content: ["contato@gltecinformatica.com.br"],
  },
  {
    icon: Clock,
    title: "Horário de Funcionamento",
    content: ["Segunda a Sexta: 8h às 18h", "Sábado: 8h às 12h"],
  },
];

export const footerContact = {
  phones: ["(87) 99182-0080", "(87) 99195-8156"],
  email: "contato@gltecinformatica.com.br",
  address: "Rua João Gonçalves de Lima - São Geraldo - Arcoverde-PE",
  hours: [
    "Segunda a Sexta: 8h às 18h",
    "Sábado: 8h às 12h",
    "Domingo: Fechado",
  ],
};
