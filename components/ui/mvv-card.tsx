import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface MVVCardProps {
  title: string;
  icon: LucideIcon;
  description: string;
}

export const MVVCard: React.FC<MVVCardProps> = ({
  title,
  icon: Icon,
  description,
}) => {
  return (
    <Card className="p-8 text-center border border-slate-700 bg-slate-950/50 hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-600/20 transition-all duration-300 hover:scale-105 rounded-xl group">
      <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-orange-600/10 border border-orange-600/20 group-hover:bg-orange-600/20 group-hover:border-orange-600/50 transition-colors">
        <Icon className="h-8 w-8 text-orange-500" />
      </div>
      <h3 className="mb-4 text-xl font-bold text-white uppercase tracking-wider">
        {title}
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </Card>
  );
};
