import { CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  items: string[];
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, items }) => {
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
};
