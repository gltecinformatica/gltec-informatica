import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ServiceCard } from "@/components/ui/service-card";
import { TechServiceCard } from "@/components/ui/tech-service-card";
import {
  graficaServices,
  tiServices,
  softwareServices,
} from "@/lib/constants/services";

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="servicos"
      className="section-reveal py-24 bg-slate-900 border-b border-slate-800"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Nossos Serviços
            </h2>
            <p className="mx-auto max-w-[900px] text-gray-400 md:text-lg">
              Oferecemos soluções completas em gráfica rápida, assistência
              técnica em TI e desenvolvimento de software.
            </p>
          </div>
        </div>
        <div className="mt-16">
          <Tabs defaultValue="grafica" className="w-full">
            <TabsList className="w-full grid grid-cols-1 sm:grid-cols-3 gap-2 bg-slate-800 border border-slate-700">
              <TabsTrigger
                value="grafica"
                className="w-full text-sm sm:text-base min-h-[64px] rounded-xl data-[state=active]:bg-orange-600 data-[state=active]:text-white"
              >
                SERVIÇOS DE GRÁFICA RÁPIDA
              </TabsTrigger>
              <TabsTrigger
                value="ti"
                className="w-full text-sm sm:text-base min-h-[64px] rounded-xl data-[state=active]:bg-orange-600 data-[state=active]:text-white"
              >
                SERVIÇOS DE ASSISTÊNCIA TÉCNICA
              </TabsTrigger>
              <TabsTrigger
                value="software"
                className="w-full text-sm sm:text-base min-h-[64px] rounded-xl data-[state=active]:bg-orange-600 data-[state=active]:text-white"
              >
                DESENVOLVIMENTO DE SOFTWARE
              </TabsTrigger>
            </TabsList>
            <TabsContent value="grafica" className="mt-8">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {graficaServices.map((service, index) => (
                  <ServiceCard
                    key={index}
                    title={service.title}
                    items={service.items}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="ti" className="mt-8">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {tiServices.map((service, index) => (
                  <TechServiceCard
                    key={index}
                    title={service.title}
                    description={service.description}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="software" className="mt-8">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {softwareServices.map((service, index) => (
                  <TechServiceCard
                    key={index}
                    title={service.title}
                    description={service.description}
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};
