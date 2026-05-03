import { ClientLogos } from "@/components/client-logos";

export const ClientsSection: React.FC = () => {
  return (
    <section
      id="clientes"
      className="section-reveal py-24 bg-slate-950 border-b border-slate-800"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Nossos Clientes
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-400 md:text-lg">
              Empresas que confiam em nossos serviços
            </p>
          </div>
        </div>
        <div className="mt-16">
          <ClientLogos />
        </div>
      </div>
    </section>
  );
};
