import { MVVCard } from "@/components/ui/mvv-card";
import { mvvItems } from "@/lib/constants/mvv";

export const MVVSection: React.FC = () => {
  return (
    <section
      id="missao-visao-valores"
      className="section-reveal py-24 bg-slate-900 border-b border-slate-800"
    >
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {mvvItems.map((item, index) => (
            <MVVCard
              key={index}
              title={item.title}
              icon={item.icon}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
