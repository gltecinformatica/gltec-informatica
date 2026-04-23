"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const linkSchema = z.object({
  name: z.string().min(2, "Nome é obrigatório"),
  url: z.string().url("URL inválida"),
  category: z.string().min(1, "Categoria é obrigatória"),
  description: z.string().min(2, "Descrição é obrigatória"),
  color: z.string().default("bg-blue-500"),
});

type LinkFormData = z.infer<typeof linkSchema>;

interface LinkFormDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
  initialData?: any;
}

export function LinkFormDialog({
  isOpen,
  onClose,
  onSubmit,
  initialData,
}: LinkFormDialogProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LinkFormData>({
    resolver: zodResolver(linkSchema),
    defaultValues: initialData || {
      name: "",
      url: "",
      category: "governo",
      description: "",
      color: "bg-blue-500",
    },
  });

  const handleFormSubmit = (data: LinkFormData) => {
    onSubmit(data);
    toast.success(
      initialData
        ? "Link atualizado com sucesso!"
        : "Link adicionado com sucesso!",
    );
    reset();
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {initialData ? "Editar Link" : "Adicionar Novo Link"}
          </DialogTitle>
        </DialogHeader>
        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className="space-y-4 py-4"
        >
          <div className="space-y-2">
            <Label htmlFor="name">Nome do Serviço</Label>
            <Input
              id="name"
              {...register("name")}
              placeholder="Ex: DETRAN-PE"
            />
            {errors.name && (
              <p className="text-xs text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="url">URL</Label>
            <Input id="url" {...register("url")} placeholder="https://..." />
            {errors.url && (
              <p className="text-xs text-red-500">{errors.url.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="category">Categoria</Label>
            <select
              id="category"
              {...register("category")}
              className="w-full border rounded-md p-2 text-sm"
            >
              <option value="governo">Governamental</option>
              <option value="telecom">Telecom</option>
              <option value="documentos">Documentos</option>
              <option value="financas">Financeiro</option>
            </select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Descrição Curta</Label>
            <Input
              id="description"
              {...register("description")}
              placeholder="O que este serviço faz?"
            />
            {errors.description && (
              <p className="text-xs text-red-500">
                {errors.description.message}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="color">Classe de Cor (Tailwind)</Label>
            <Input
              id="color"
              {...register("color")}
              placeholder="bg-orange-500"
            />
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancelar
            </Button>
            <Button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white"
            >
              Salvar
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
