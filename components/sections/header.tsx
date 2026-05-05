"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { WhatsAppButton } from "@/components/whatsapp-button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/placeholder-logo.png?height=40&width=120"
            alt="GLTEC INFORMÁTICA"
            width={120}
            height={40}
            className="h-10 w-auto"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="#sobre"
            className="text-sm font-medium text-gray-300 hover:text-orange-500 transition-colors"
          >
            SOBRE
          </Link>

          <Link
            href="#servicos"
            className="text-sm font-medium text-gray-300 hover:text-orange-500 transition-colors"
          >
            SERVIÇOS
          </Link>
          <Link
            href="#depoimentos"
            className="text-sm font-medium text-gray-300 hover:text-orange-500 transition-colors"
          >
            DEPOIMENTOS
          </Link>
          <Link
            href="/pdv-expresso"
            className="text-sm font-medium text-gray-300 hover:text-orange-500 transition-colors"
          >
            PDV EXPRESSO
          </Link>
          <Link
            href="#contato"
            className="text-sm font-medium text-gray-300 hover:text-orange-500 transition-colors"
          >
            CONTATOS
          </Link>
          <WhatsAppButton phoneNumber="8799182-0080" />
        </nav>

        <div className="md:hidden">
          <Drawer>
            <DrawerTrigger asChild>
              <button
                type="button"
                aria-label="Abrir menu"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-white transition hover:bg-slate-800"
              >
                <Menu className="h-5 w-5" />
              </button>
            </DrawerTrigger>
            <DrawerContent className="pb-6">
              <DrawerHeader className="px-4">
                <div className="flex items-center justify-between gap-4">
                  <Link href="/" className="flex items-center gap-2">
                    <Image
                      src="/placeholder-logo.png?height=40&width=120"
                      alt="GLTEC INFORMÁTICA"
                      width={120}
                      height={40}
                      className="h-10 w-auto"
                    />
                  </Link>
                  <DrawerClose asChild>
                    <button
                      type="button"
                      aria-label="Fechar menu"
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-white transition hover:bg-slate-800"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </DrawerClose>
                </div>
              </DrawerHeader>

              <div className="grid gap-4 p-4">
                <Link
                  href="#sobre"
                  className="rounded-xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-sm font-medium text-gray-100 hover:border-orange-500 hover:text-white transition-colors"
                >
                  SOBRE
                </Link>
                <Link
                  href="#servicos"
                  className="rounded-xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-sm font-medium text-gray-100 hover:border-orange-500 hover:text-white transition-colors"
                >
                  SERVIÇOS
                </Link>
                <Link
                  href="#depoimentos"
                  className="rounded-xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-sm font-medium text-gray-100 hover:border-orange-500 hover:text-white transition-colors"
                >
                  DEPOIMENTOS
                </Link>
                <Link
                  href="/pdv-expresso"
                  className="rounded-xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-sm font-medium text-gray-100 hover:border-orange-500 hover:text-white transition-colors"
                >
                  PDV EXPRESSO
                </Link>
                <Link
                  href="#contato"
                  className="rounded-xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-sm font-medium text-gray-100 hover:border-orange-500 hover:text-white transition-colors"
                >
                  CONTATOS
                </Link>
                <WhatsAppButton
                  phoneNumber="8799182-0080"
                  className="w-full justify-center"
                />
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </header>
  );
};
