import { ContactForm } from "@/components/contact-form";
import { contactInfo } from "@/lib/constants/contact";

export const ContactSection: React.FC = () => {
  return (
    <section
      id="contato"
      className="section-reveal py-24 bg-slate-950 border-b border-slate-800"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Entre em Contato
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-400 md:text-lg">
              Estamos prontos para atender suas necessidades
            </p>
          </div>
        </div>
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-orange-600/50 transition-colors"
              >
                <info.icon className="h-6 w-6 text-orange-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-white">{info.title}</h3>
                  {info.content.map((line, idx) => (
                    <p key={idx} className="text-gray-400 mt-1">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
            <div className="aspect-video w-full rounded-2xl overflow-hidden border-2 border-slate-800">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.6855774749396!2d-37.0551!3d-8.4192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7a98f2d5e9c2c65%3A0x3b35fb490e5c6c6a!2sArcoverde%2C%20PE!5e0!3m2!1spt-BR!2sbr!4v1621436289012!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Localização GLTEC Informática"
              ></iframe>
            </div>
          </div>
          <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-6">
              Envie uma mensagem
            </h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};
