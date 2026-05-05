import { TestimonialCarousel } from "@/components/testimonial-carousel";

export const TestimonialsSection: React.FC = () => {
  return (
    <section
      id="depoimentos"
      className="section-reveal py-24 bg-slate-900 border-b border-slate-800"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Depoimentos dos Clientes
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-400 md:text-lg">
              O que nossos clientes dizem sobre nós
            </p>
          </div>
        </div>
        <div className="mt-16">
          <TestimonialCarousel />
        </div>
      </div>
    </section>
  );
};
