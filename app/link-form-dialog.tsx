"use client";

import { useRef, ChangeEvent } from "react";
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
  logo: z.string().optional().or(z.literal("")),
  newCategoryName: z.string().optional(),
});

type LinkFormData = z.infer<typeof linkSchema>;

interface LinkFormDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
  initialData?: any;
  categories: { id: string; label: string }[];
}

export function LinkFormDialog({
  isOpen,
  onClose,
  onSubmit,
  initialData,
  categories,
}: LinkFormDialogProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<LinkFormData>({
    resolver: zodResolver(linkSchema),
    defaultValues: initialData || {
      name: "",
      url: "",
      category: "governo",
      description: "",
      color: "bg-blue-500",
      logo: "",
    },
  });

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setValue("logo", reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

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
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.label}
                </option>
              ))}
              <option value="new">+ Adicionar Nova Categoria</option>
            </select>
          </div>
          {watch("category") === "new" && (
            <div className="space-y-2 animate-in fade-in slide-in-from-top-1">
              <Label htmlFor="newCategoryName">Nome da Nova Categoria</Label>
              <Input
                id="newCategoryName"
                {...register("newCategoryName")}
                placeholder="Ex: Saúde, Educação..."
                autoFocus
              />
            </div>
          )}
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
          <div className="space-y-2">
            <Label htmlFor="logo">Logo do Serviço</Label>
            <div className="flex gap-2">
              <Input
                id="logo"
                {...register("logo")}
                placeholder="URL ou selecione um arquivo"
                className="flex-1"
              />
              <Button
                type="button"
                variant="outline"
                onClick={() => fileInputRef.current?.click()}
              >
                Procurar
              </Button>
            </div>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept="image/*"
              className="hidden"
            />
            {watch("logo") && (
              <div className="mt-2 flex items-center gap-2">
                <span className="text-xs text-gray-500">Prévia:</span>
                <div className="bg-white p-1 rounded border">
                  <img
                    src={watch("logo")}
                    alt="Preview"
                    className="h-8 w-8 object-contain"
                  />
                </div>
              </div>
            )}
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
