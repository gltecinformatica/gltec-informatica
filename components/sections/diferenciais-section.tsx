import { DiferencialCard } from "@/components/ui/diferencial-card";
import { diferenciais } from "@/lib/constants/diferenciais";

export const DiferenciaisSection: React.FC = () => {
  return (
    <section
      id="diferenciais"
      className="section-reveal py-24 bg-slate-950 border-b border-slate-800"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Nossos Diferenciais
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-400 md:text-lg">
              O que nos torna a melhor escolha para seus serviços de gráfica e
              TI
            </p>
          </div>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {diferenciais.map((diferencial, index) => (
            <DiferencialCard
              key={index}
              title={diferencial.title}
              description={diferencial.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
