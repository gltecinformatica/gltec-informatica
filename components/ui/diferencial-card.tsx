import { CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

interface DiferencialCardProps {
  title: string;
  description: string;
}

export const DiferencialCard: React.FC<DiferencialCardProps> = ({
  title,
  description,
}) => {
  return (
    <Card className="p-6 text-center border border-slate-700 bg-slate-900/50 hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-600/20 transition-all duration-300 hover:scale-105 rounded-xl">
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-orange-600/20 border border-orange-600/50">
        <CheckCircle className="h-7 w-7 text-orange-500" />
      </div>
      <h3 className="mb-3 text-lg font-bold text-white">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </Card>
  );
};
