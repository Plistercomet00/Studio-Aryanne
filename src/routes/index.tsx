import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Leaf,
  Sparkles,
  Star,
  Layers,
  Eye,
  Feather,
  Droplets,
  MessageCircle,
  Instagram,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";
import heroBrows from "@/assets/hero-brows.jpg";
import aryannePortrait from "@/assets/aryanne-portrait.jpg";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Studio Aryanne Medeiros Beauty | Design de Sobrancelhas em Recife" },
      {
        name: "description",
        content:
          "Design de sobrancelhas e estética facial em Recife. Nature Brows, Brow Lamination, Lash Lifting e mais. Realce sua beleza natural.",
      },
      { property: "og:title", content: "Studio Aryanne Medeiros Beauty" },
      {
        property: "og:description",
        content: "Design de sobrancelhas e estética facial em Recife.",
      },
    ],
  }),
  component: Index,
});

const WHATSAPP_URL = "https://wa.me/5581999999999";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Serviços", href: "#servicos" },
    { label: "Sobre", href: "#sobre" },
    { label: "Portfólio", href: "#portfolio" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <a href="#" className="flex items-baseline gap-2">
          <span className="font-display text-2xl text-gold tracking-wide">
            Aryanne Medeiros
          </span>
          <span className="text-xs tracking-[0.2em] text-gold/80 uppercase">Beauty</span>
        </a>

        <ul className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm tracking-wide text-foreground/80 transition-colors hover:text-primary"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="hidden rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary-dark md:inline-block"
        >
          Agendar
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
          className="md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <ul className="flex flex-col px-6 py-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-foreground/80"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-2 block rounded-full bg-primary px-6 py-2.5 text-center text-primary-foreground"
              >
                Agendar
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-sage-light pt-32 pb-20 lg:pt-44 lg:pb-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <div className="reveal">
          <div className="flex items-center gap-4">
            <span className="text-xs font-medium uppercase tracking-[0.28em] text-primary-dark">
              Studio Aryanne Medeiros
            </span>
          </div>
          <div className="mt-3 h-px w-24 bg-gold" />

          <h1 className="mt-8 font-display text-5xl leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Realce a sua
            <br />
            beleza{" "}
            <em className="font-display italic text-primary-dark">natural.</em>
          </h1>

          <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground">
            Design de sobrancelhas e estética facial em Recife, com técnicas
            exclusivas pensadas para cada rosto.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:bg-primary-dark hover:shadow-md"
            >
              Agendar agora
            </a>
            <a
              href="#servicos"
              className="group inline-flex items-center gap-2 text-sm font-medium tracking-wide text-foreground"
            >
              Ver serviços
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>

        <div className="reveal relative" style={{ animationDelay: "120ms" }}>
          <div className="relative overflow-hidden rounded-[2.5rem] shadow-xl">
            <img
              src={heroBrows}
              alt="Design de sobrancelhas natural"
              width={1024}
              height={1280}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden h-32 w-32 rounded-full border border-gold/40 sm:block" />
          <div className="absolute -top-4 -right-4 hidden h-20 w-20 rounded-full bg-gold/20 sm:block" />
        </div>
      </div>
    </section>
  );
}

function Credibility() {
  const items = [
    { icon: Leaf, value: "500+", label: "clientes atendidas" },
    { icon: Sparkles, value: "5 anos", label: "de experiência" },
    { icon: Star, value: "5 estrelas", label: "de avaliação" },
  ];
  return (
    <section className="border-y border-border bg-background py-12">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-6 sm:grid-cols-3 lg:px-10">
        {items.map((it) => (
          <div key={it.label} className="flex items-center justify-center gap-4">
            <it.icon size={24} className="text-primary" strokeWidth={1.5} />
            <div className="text-left">
              <div className="font-display text-2xl text-foreground">{it.value}</div>
              <div className="text-xs tracking-wide text-muted-foreground">
                {it.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      icon: Leaf,
      title: "Nature Brows",
      desc: "Técnica que cria fios realistas respeitando o crescimento natural, para sobrancelhas com aspecto completamente orgânico e despojado.",
    },
    {
      icon: Layers,
      title: "Brow Lamination",
      desc: 'Alinha e fixa os fios em posição elevada, dando volume e definição duradouros — efeito "brow soap" que dura semanas.',
    },
    {
      icon: Eye,
      title: "Lash Lifting",
      desc: "Curvatura permanente dos cílios naturais, abrindo o olhar sem precisar de extensão. Resultado natural e sofisticado.",
    },
    {
      icon: Feather,
      title: "Design & Henna",
      desc: "Mapeamento preciso do rosto + coloração com henna para definir e preencher as sobrancelhas com duração de até 4 semanas.",
    },
    {
      icon: Droplets,
      title: "Limpeza de Pele",
      desc: "Protocolo facial completo para higienização profunda, controle de oleosidade e renovação da pele — pele limpa e luminosa.",
    },
  ];

  return (
    <section id="servicos" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.28em] text-primary">
            O que oferecemos
          </span>
          <h2 className="mt-4 font-display text-4xl text-foreground sm:text-5xl">
            Nossos <em className="italic text-primary-dark">Serviços</em>
          </h2>
          <p className="mt-5 text-base text-muted-foreground">
            Técnicas exclusivas pensadas para o seu tipo de rosto e estilo.
          </p>
          <div className="mx-auto mt-6 h-px w-16 bg-gold" />
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="group rounded-2xl border border-border bg-background p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-lg"
            >
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-sage-light text-primary transition-colors group-hover:bg-gold/15 group-hover:text-gold">
                <s.icon size={22} strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-2xl text-foreground">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {s.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="bg-sage-light py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[5fr_6fr] lg:gap-20 lg:px-10">
        <div className="relative">
          <div className="overflow-hidden rounded-[2rem] shadow-xl">
            <img
              src={aryannePortrait}
              alt="Aryanne Medeiros"
              width={900}
              height={1100}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <span className="absolute -bottom-8 -right-4 font-script text-7xl text-gold sm:-right-6 sm:text-8xl">
            Am
          </span>
        </div>

        <div>
          <span className="text-xs font-medium uppercase tracking-[0.28em] text-primary-dark">
            Sobre a profissional
          </span>
          <div className="mt-3 h-px w-20 bg-gold" />
          <h2 className="mt-6 font-display text-4xl text-foreground sm:text-5xl">
            Beleza é{" "}
            <em className="italic text-primary-dark">autoestima.</em>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-foreground/80">
            Aryanne Medeiros é designer de sobrancelhas especializada em
            técnicas de embelezamento natural. Com anos de experiência e
            centenas de clientes transformadas, seu trabalho é marcado pela
            precisão, cuidado com cada detalhe e respeito pela beleza única
            de cada pessoa.
          </p>
          <p className="mt-4 text-base leading-relaxed text-foreground/80">
            Cada atendimento é pensado de forma individual — porque não
            existe uma única forma de ser bonita.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary-dark"
          >
            Conheça o studio
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  const items = [
    { img: portfolio1, tag: "Nature Brows" },
    { img: portfolio2, tag: "Lash Lifting" },
    { img: portfolio3, tag: "Brow Lamination" },
  ];
  return (
    <section id="portfolio" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.28em] text-primary">
            Portfólio
          </span>
          <h2 className="mt-4 font-display text-4xl text-foreground sm:text-5xl">
            Transformações <em className="italic text-primary-dark">Reais</em>
          </h2>
          <p className="mt-5 text-base text-muted-foreground">
            Resultados que falam por si.
          </p>
          <div className="mx-auto mt-6 h-px w-16 bg-gold" />
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <figure
              key={i}
              className="group overflow-hidden rounded-2xl border border-border bg-background"
            >
              <div className="grid grid-cols-2">
                <div className="relative aspect-square overflow-hidden bg-border">
                  <img
                    src={it.img}
                    alt={`Antes - ${it.tag}`}
                    width={800}
                    height={800}
                    loading="lazy"
                    className="h-full w-full object-cover grayscale transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-background/90 px-3 py-1 text-[10px] uppercase tracking-wider text-foreground">
                    antes
                  </span>
                </div>
                <div className="relative aspect-square overflow-hidden bg-border">
                  <img
                    src={it.img}
                    alt={`Depois - ${it.tag}`}
                    width={800}
                    height={800}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute right-3 top-3 rounded-full bg-primary px-3 py-1 text-[10px] uppercase tracking-wider text-primary-foreground">
                    depois
                  </span>
                </div>
              </div>
              <figcaption className="flex items-center justify-between px-5 py-4">
                <span className="font-display text-lg text-foreground">{it.tag}</span>
                <span className="text-xs uppercase tracking-wider text-gold">
                  Resultado
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    {
      text: "Finalmente encontrei alguém que entendeu o meu rosto. A Aryanne transformou minhas sobrancelhas completamente!",
      name: "Mariana S.",
    },
    {
      text: "Fiz o lash lifting e não largo mais. Acordo pronta, sem precisar de nada. Melhor investimento!",
      name: "Camila R.",
    },
    {
      text: "Atendimento incrível, ambiente lindo e resultado impecável. Me sinto outra pessoa!",
      name: "Fernanda L.",
    },
  ];
  return (
    <section className="bg-primary py-24 text-primary-foreground lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.28em] text-gold">
            Depoimentos
          </span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl">
            O que dizem nossas{" "}
            <em className="italic">clientes</em>
          </h2>
          <div className="mx-auto mt-6 h-px w-16 bg-gold" />
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {items.map((t) => (
            <blockquote
              key={t.name}
              className="rounded-2xl border border-white/15 bg-white/[0.08] p-8 backdrop-blur-sm"
            >
              <div className="flex gap-1 text-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="mt-5 font-display text-xl italic leading-relaxed">
                "{t.text}"
              </p>
              <footer className="mt-6 text-sm font-semibold tracking-wide">
                — {t.name}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="contato" className="bg-sage-light py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
        <h2 className="font-display text-4xl text-foreground sm:text-5xl lg:text-6xl">
          Pronta para se{" "}
          <em className="italic text-primary-dark">transformar?</em>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground">
          Agende sua visita e descubra o que podemos fazer pela sua beleza.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-primary px-9 py-4 text-base font-medium text-primary-foreground shadow-md transition-all hover:bg-primary-dark hover:shadow-lg"
        >
          <MessageCircle size={18} />
          Agendar pelo WhatsApp
        </a>
        <p className="mt-6 text-xs tracking-wide text-muted-foreground">
          Atendimento em Recife • Horários flexíveis • Resposta rápida
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#2C2A28] py-14 text-white/70">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-3 lg:px-10">
        <div>
          <div className="flex items-baseline gap-2">
            <span className="font-display text-2xl text-gold">Aryanne Medeiros</span>
            <span className="text-xs uppercase tracking-[0.2em] text-gold/80">
              Beauty
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
            Studio de design de sobrancelhas e estética facial em Recife.
          </p>
        </div>

        <div>
          <h4 className="font-display text-lg text-white">Navegação</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#servicos" className="hover:text-gold">Serviços</a></li>
            <li><a href="#sobre" className="hover:text-gold">Sobre</a></li>
            <li><a href="#portfolio" className="hover:text-gold">Portfólio</a></li>
            <li><a href="#contato" className="hover:text-gold">Contato</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg text-white">Siga o Studio</h4>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors hover:border-gold hover:text-gold"
            aria-label="Instagram"
          >
            <Instagram size={18} />
          </a>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 px-6 pt-6 text-xs text-white/40 lg:px-10">
        © 2025 Studio Aryanne Medeiros Beauty. Todos os direitos reservados.
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Credibility />
      <Services />
      <About />
      <Portfolio />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </main>
  );
}
