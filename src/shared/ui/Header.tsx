"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Container } from "./Container";
import { Monogram } from "./Monogram";
import { GoldButton } from "./GoldButton";
import { nav } from "@/shared/config/site";
import { cn } from "@/shared/lib/cn";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-colors duration-300",
        scrolled || open
          ? "border-b border-line bg-ink/85 backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <Container className="flex items-center justify-between py-4 lg:py-5">
        <Link href="/" aria-label="Lucas Freitas — Página inicial" onClick={close}>
          <Monogram className="scale-90 sm:scale-100" />
        </Link>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-8 text-[11px] uppercase tracking-[0.3em] text-cream/85 xl:gap-9">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition-colors duration-300 hover:text-gold"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <GoldButton
            href="#contato"
            className="hidden gap-3 px-4 py-3 text-[10px] sm:inline-flex lg:gap-6 lg:px-6 lg:py-4 lg:text-[11px]"
            icon={<span aria-hidden />}
          >
            <span className="hidden sm:inline">Agenda </span>Institucional
          </GoldButton>

          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid size-10 place-items-center border border-gold/40 text-gold transition-colors hover:border-gold lg:hidden"
          >
            {open ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 5l14 14M19 5L5 19" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </Container>

      <div
        className={cn(
          "lg:hidden",
          "absolute inset-x-0 top-full z-30 overflow-hidden border-t border-line bg-ink/95 backdrop-blur-md transition-[max-height,opacity] duration-300",
          open ? "max-h-[80vh] opacity-100" : "pointer-events-none max-h-0 opacity-0"
        )}
      >
        <Container className="py-6">
          <ul className="flex flex-col divide-y divide-line">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={close}
                  className="block py-4 text-[12px] uppercase tracking-[0.32em] text-cream/90 transition-colors hover:text-gold"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <GoldButton href="#contato" onClick={close} className="w-full justify-between">
              Agenda Institucional
            </GoldButton>
          </div>
        </Container>
      </div>
    </header>
  );
}
