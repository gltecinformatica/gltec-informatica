"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  Plus,
  Pencil,
  Trash2,
  Lock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from "@/auth-context";
import { LinkFormDialog } from "@/app/link-form-dialog";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function PDVExpresso() {
  const [services, setServices] = useState([
    {
      id: 1,
      name: "DETRAN-PE",
      category: "governo",
      description: "Serviços de Habilitação DETRAN-PE",
      url: "https://www.detran.pe.gov.br/habilitacao",
      logo: "/pdv-logos/detran-pe.png",
      color: "bg-blue-600",
    },
    {
      id: 2,
      name: "GOV.BR",
      category: "governo",
      description: "Portal de Serviços do Governo Federal",
      url: "https://www.gov.br/",
      logo: "/pdv-logos/gov-br.png",
      color: "bg-green-600",
    },
    {
      id: 3,
      name: "PORTAL DO EMPREENDEDOR",
      category: "governo",
      description: "Portal do Empreendedor - MEI",
      url: "https://www.gov.br/empresas-e-negocios/pt-br/empreendedor",
      logo: "/pdv-logos/portal-empreendedor.png",
      color: "bg-purple-600",
    },
    {
      id: 4,
      name: "CLARO",
      category: "telecom",
      description: "Claro - Serviços de Telecomunicações",
      url: "https://www.claro.com.br/",
      logo: "/pdv-logos/claro.png",
      color: "bg-red-600",
    },
    {
      id: 5,
      name: "TIM",
      category: "telecom",
      description: "TIM - Serviços de Telecomunicações",
      url: "https://www.tim.com.br/",
      logo: "/pdv-logos/tim.png",
      color: "bg-blue-500",
    },
    {
      id: 6,
      name: "TSE",
      category: "governo",
      description: "Certidões e Autoatendimento Eleitoral",
      url: "https://www.tse.jus.br/servicos-eleitorais/autoatendimento-eleitoral#/",
      logo: "/pdv-logos/tim.png",
      color: "bg-blue-500",
    },
    {
      id: 7,
      name: "ANTECEDENTES FEDERAL",
      category: "documentos",
      description: "Portal de emissão do Antecedentes criminais Federal",
      url: "https://servicos.pf.gov.br/epol-sinic-publico/",
      logo: "/pdv-logos/tim.png",
      color: "bg-yellow-500",
    },
    {
      id: 8,
      name: "ANTECEDENTES ESTADUAL - PE / IITB",
      category: "documentos",
      description:
        "Portal de emissão do Antecedentes criminais Estadual - IITB - PE",
      url: "https://abrir.link/DrYdw",
      logo: "/pdv-logos/placeholder-logo.png",
      color: "bg-blue-500",
    },
    {
      id: 9,
      name: "AGENDAMENTO ELEITORAL",
      category: "governo",
      description: "Solicitar agendamento no TRE-PE",
      url: "https://www.tre-pe.jus.br/servicos-eleitorais/solicitar-agendamento",
      logo: "/pdv-logos/tse.png",
      color: "bg-blue-700",
    },
    {
      id: 10,
      name: "DETRAN - VEÍCULOS",
      category: "governo",
      description: "Serviços de Veículos DETRAN-PE",
      url: "https://www.detran.pe.gov.br/veiculos",
      logo: "/pdv-logos/detran-pe.png",
      color: "bg-sky-600",
    },
    {
      id: 11,
      name: "CONSULTAR VEÍCULO",
      category: "governo",
      description: "Consultar online dados de seus veículos (Gov.br)",
      url: "https://www.gov.br/pt-br/servicos/consultar-online-dados-de-seus-veiculos",
      logo: "/pdv-logos/gov-br.png",
      color: "bg-green-700",
    },
    {
      id: 12,
      name: "BOLETO MEI",
      category: "financas",
      description: "Gerar boleto DAS para Microempreendedor Individual",
      url: "https://www8.receita.fazenda.gov.br/simplesnacional/aplicacoes/atspo/pgmei.app/identificacao",
      logo: "/pdv-logos/portal-empreendedor.png",
      color: "bg-orange-600",
    },
    {
      id: 13,
      name: "GERAR GPS / SAL",
      category: "financas",
      description: "Cálculo de contribuições e emissão de GPS",
      url: "https://sal.rfb.gov.br/calculo-contribuicao/contribuintes-2",
      logo: "/pdv-logos/gov-br.png",
      color: "bg-emerald-600",
    },
    {
      id: 14,
      name: "MEU INSS",
      category: "governo",
      description: "Portal de serviços e benefícios do INSS",
      url: "https://meu.inss.gov.br/#/login",
      logo: "/pdv-logos/gov-br.png",
      color: "bg-blue-800",
    },
    {
      id: 15,
      name: "IMPRESSÃO DO CPF",
      category: "documentos",
      description: "Emissão de comprovante de inscrição no CPF",
      url: "https://servicos.receita.fazenda.gov.br/servicos/cpf/impressaocomprovante/ConsultaImpressao.asp",
      logo: "/pdv-logos/gov-br.png",
      color: "bg-slate-700",
    },
    {
      id: 16,
      name: "GERAR PIX QRCODE",
      category: "financas",
      description: "Gerador de código PIX para pagamentos rápidos",
      url: "https://geradordepix.com/",
      logo: "/pdv-logos/placeholder-logo.png",
      color: "bg-teal-500",
    },
  ]);

  const { isAuthenticated, login, logout } = useAuth();
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingLink, setEditingLink] = useState<any>(null);
  const [tempPassword, setTempPassword] = useState("");

  const handleAddClick = () => {
    if (!isAuthenticated) {
      setIsLoginOpen(true);
    } else {
      setEditingLink(null);
      setIsFormOpen(true);
    }
  };

  const handleLoginSubmit = async () => {
    const success = await login(tempPassword);
    if (success) {
      toast.success("Autenticado com sucesso!");
      setIsLoginOpen(false);
      setTempPassword("");
    } else {
      toast.error("Senha incorreta!");
    }
  };

  const handleSaveLink = (data: any) => {
    if (editingLink) {
      setServices(
        services.map((s) => (s.id === editingLink.id ? { ...s, ...data } : s)),
      );
    } else {
      const newLink = {
        ...data,
        id: Date.now(),
        logo: "/pdv-logos/placeholder-logo.png",
      };
      setServices([...services, newLink]);
    }
  };

  const handleEdit = (service: any) => {
    setEditingLink(service);
    setIsFormOpen(true);
  };

  const handleDelete = (id: number) => {
    if (confirm("Tem certeza que deseja excluir este link?")) {
      setServices(services.filter((s) => s.id !== id));
      toast.success("Link removido!");
    }
  };

  const categories = [
    { id: "governo", label: "Governamental" },
    { id: "telecom", label: "Telecom" },
    { id: "documentos", label: "Documentos" },
    { id: "financas", label: "Financeiro" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              <Button asChild variant="outline" size="sm">
                <Link href="/" className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Voltar
                </Link>
              </Button>
              {isAuthenticated && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={logout}
                  className="text-gray-500"
                >
                  Sair do Admin
                </Button>
              )}
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">PDV EXPRESSO</h1>
              <p className="text-gray-600">
                Acesso rápido aos principais serviços online
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Serviços Online
            </h2>
            <p className="text-gray-600 max-w-2xl">
              Acesse rapidamente os principais portais e serviços que você
              precisa.
            </p>
          </div>
          <Button
            onClick={handleAddClick}
            className="bg-orange-500 hover:bg-orange-600 text-white flex items-center gap-2"
          >
            {isAuthenticated ? (
              <>
                <Plus className="h-4 w-4" /> Adicionar Link
              </>
            ) : (
              <>
                <Lock className="h-4 w-4" /> Área Restrita
              </>
            )}
          </Button>
        </div>

        <Tabs defaultValue="governo" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8 h-auto">
            {categories.map((cat) => (
              <TabsTrigger
                key={cat.id}
                value={cat.id}
                className="text-sm md:text-base"
              >
                {cat.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((cat) => (
            <TabsContent
              key={cat.id}
              value={cat.id}
              className="animate-in fade-in slide-in-from-bottom-4 duration-500 outline-none"
            >
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {services
                  .filter((service) => service.category === cat.id)
                  .map((service) => (
                    <Card
                      key={service.id}
                      className="relative overflow-hidden hover:shadow-lg transition-shadow border-orange-100"
                    >
                      {isAuthenticated && (
                        <div className="absolute top-2 right-2 flex gap-1 z-10">
                          <Button
                            size="icon"
                            variant="secondary"
                            className="h-8 w-8"
                            onClick={() => handleEdit(service)}
                          >
                            <Pencil className="h-4 w-4" />
                          </Button>
                          <Button
                            size="icon"
                            variant="destructive"
                            className="h-8 w-8"
                            onClick={() => handleDelete(service.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      )}
                      <div className={`${service.color} p-4 text-white`}>
                        <div className="flex items-center justify-center mb-2">
                          <div className="bg-white p-2 rounded-lg">
                            <Image
                              src={
                                service.logo ||
                                "/placeholder.svg?height=60&width=60"
                              }
                              alt={`Logo ${service.name}`}
                              width={60}
                              height={60}
                              className="object-contain"
                            />
                          </div>
                        </div>
                        <h3 className="text-lg font-bold text-center">
                          {service.name}
                        </h3>
                      </div>
                      <div className="p-4">
                        <p className="text-gray-600 text-sm mb-4 text-center h-10">
                          {service.description}
                        </p>
                        <Button
                          asChild
                          className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                        >
                          <a
                            href={service.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2"
                          >
                            Acessar Site
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Info Section */}
        <div className="mt-12 bg-white rounded-lg p-6 shadow-sm">
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Informações Importantes
            </h3>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 text-sm text-gray-600">
              <div className="p-4 bg-orange-50 rounded-lg">
                <h4 className="font-semibold text-orange-800 mb-2">
                  Segurança
                </h4>
                <p>
                  Todos os links redirecionam para os sites oficiais dos
                  respectivos órgãos e empresas.
                </p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">
                  Atualização
                </h4>
                <p>
                  Os links são verificados regularmente para garantir que
                  estejam sempre funcionando.
                </p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Suporte</h4>
                <p>
                  Precisa de ajuda? Entre em contato conosco pelo WhatsApp ou
                  telefone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Image
              src="/placeholder-logo.png?height=40&width=120"
              alt="GLTEC INFORMÁTICA"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </div>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} GLTEC INFORMÁTICA. Todos os direitos
            reservados.
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Rua João Gonçalves de Lima - São Geraldo - Arcoverde-PE | (87)
            99182-0080 / (87) 99195-8156
          </p>
        </div>
      </footer>

      {/* Modal de Login */}
      <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
        <DialogContent className="sm:max-w-[350px]">
          <DialogHeader>
            <DialogTitle>Acesso Administrativo</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="pass">Senha de Acesso</Label>
              <Input
                id="pass"
                type="password"
                value={tempPassword}
                onChange={(e) => setTempPassword(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleLoginSubmit()}
              />
            </div>
            <Button
              onClick={handleLoginSubmit}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white"
            >
              Entrar
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Modal de Formulário de Link */}
      {isFormOpen && (
        <LinkFormDialog
          isOpen={isFormOpen}
          onClose={() => {
            setIsFormOpen(false);
            setEditingLink(null);
          }}
          onSubmit={handleSaveLink}
          initialData={editingLink}
        />
      )}
    </div>
  );
}
