import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface WhatsAppButtonProps {
  phoneNumber: string;
  className?: string;
}

export function WhatsAppButton({
  phoneNumber,
  className,
}: WhatsAppButtonProps) {
  const formattedNumber = phoneNumber.replace(/\D/g, "");
  const whatsappUrl = `https://wa.me/55${formattedNumber}`;

  return (
    <Button
      asChild
      className={`bg-green-500 hover:bg-green-600 text-white ${className ?? ""}`}
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2"
      >
        <Phone className="h-4 w-4" />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>
    </Button>
  );
}
