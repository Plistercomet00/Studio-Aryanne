import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, useCallback } from "react";
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
  MapPin,
  Smile,
  Images,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import heroBrows from "@/assets/hero-brows.jpg";
import aryannePortrait from "@/assets/aryanne-portrait.jpg";
import portfolio1 from "@/assets/portfolio-before-after-1.png";
import portfolio2 from "@/assets/portfolio-before-after-2.png";
import portfolio3 from "@/assets/portfolio-before-after-3.png";
import portfolio4 from "@/assets/portfolio-before-after-4.png";
import portfolio5 from "@/assets/portfolio-before-after-5.jpeg";
import portfolio6 from "@/assets/portfolio-before-after-6.jpeg";

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

const WHATSAPP_URL = "https://wa.me/5581985605529";
const INSTAGRAM_URL = "https://www.instagram.com/studio.aryanne/";
const GOOGLE_REVIEW_URL = "https://maps.app.goo.gl/S9JECEXJKzLUUDuS9";

// ---------------------------------------------------------------------------
// Hook: scroll reveal com stagger opcional
// ---------------------------------------------------------------------------
function useReveal<T extends HTMLElement>(
  stagger = false
): [React.RefObject<T>, boolean] {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [stagger]);

  return [ref, visible];
}

// Hook para contador animado
function useCounter(target: number, visible: boolean, duration = 1200) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!visible) return;
    const prefersReduced =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setCount(target);
      return;
    }
    let start: number | null = null;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3); // ease-out-cubic
      setCount(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [visible, target, duration]);
  return count;
}

// ---------------------------------------------------------------------------
// Estilos de transição reutilizáveis
// ---------------------------------------------------------------------------
const fadeUp =
  "transition-all duration-700 ease-out";
const hidden = "opacity-0 translate-y-8";
const shown = "opacity-100 translate-y-0";

// ---------------------------------------------------------------------------
// Navbar
// ---------------------------------------------------------------------------
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
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
          <span className="font-display text-2xl tracking-wide font-semibold" style={{ color: "#A87C3E" }}>
            Aryanne Medeiros
          </span>
          <span className="text-xs tracking-[0.2em] uppercase font-semibold" style={{ color: "#A87C3E" }}>Beauty</span>
        </a>

        <ul className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative text-sm tracking-wide text-foreground/80 transition-colors hover:text-primary
                  after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gold
                  after:transition-all after:duration-300 hover:after:w-full"
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
          className="hidden rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground
            transition-all duration-300 hover:bg-primary-dark hover:scale-[1.03] md:inline-block"
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
                  className="block py-3 text-foreground/80 hover:text-primary transition-colors"
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

// ---------------------------------------------------------------------------
// Hero — parallax suave na imagem ao rolar
// ---------------------------------------------------------------------------
function Hero() {
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const onScroll = () => {
      if (!imgRef.current) return;
      const y = window.scrollY;
      imgRef.current.style.transform = `translateY(${y * 0.08}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative overflow-hidden bg-sage-light pt-32 pb-20 lg:pt-44 lg:pb-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        {/* Texto */}
        <div className="reveal">
          <div className="flex items-center gap-4">
            <span className="text-xs font-medium uppercase tracking-[0.28em] text-primary-dark">
              Studio Aryanne Medeiros
            </span>
          </div>
          {/* Linha dourada animada */}
          <div
            className="mt-3 h-px bg-gold origin-left transition-all duration-700 delay-300"
            style={{ width: "6rem" }}
          />

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
              className="rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground
                shadow-sm transition-all duration-300 hover:bg-primary-dark hover:shadow-md hover:scale-[1.03]"
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
                className="transition-transform duration-300 group-hover:translate-x-1.5"
              />
            </a>
          </div>
        </div>

        {/* Imagem com parallax */}
        <div className="reveal relative" style={{ animationDelay: "120ms" }}>
          <div className="relative overflow-hidden rounded-[2.5rem] shadow-xl">
            <div ref={imgRef} className="will-change-transform">
              <img
                src={heroBrows}
                alt="Design de sobrancelhas natural"
                width={1024}
                height={1280}
                className="h-full w-full object-cover scale-[1.06]"
              />
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 hidden h-32 w-32 rounded-full border border-gold/40 sm:block animate-[spin_18s_linear_infinite]" />
          <div className="absolute -top-4 -right-4 hidden h-20 w-20 rounded-full bg-gold/20 sm:block" />
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Credibilidade — contadores animados
// ---------------------------------------------------------------------------
function StatItem({
  icon: Icon,
  target,
  suffix,
  label,
  parentVisible,
  delay,
}: {
  icon: React.ElementType;
  target: number;
  suffix: string;
  label: string;
  parentVisible: boolean;
  delay: number;
}) {
  const [localVisible, setLocalVisible] = useState(false);

  useEffect(() => {
    if (!parentVisible) return;
    const t = setTimeout(() => setLocalVisible(true), delay);
    return () => clearTimeout(t);
  }, [parentVisible, delay]);

  const count = useCounter(target, localVisible);

  return (
    <div
      className={`flex items-center justify-center gap-4 ${fadeUp} ${
        localVisible ? shown : hidden
      }`}
    >
      <Icon size={24} className="text-primary" strokeWidth={1.5} />
      <div className="text-left">
        <div className="font-display text-2xl text-foreground">
          {count}
          {suffix}
        </div>
        <div className="text-xs tracking-wide text-muted-foreground">{label}</div>
      </div>
    </div>
  );
}

function Credibility() {
  const [ref, visible] = useReveal<HTMLElement>();

  return (
    <section ref={ref} className="border-y border-border bg-background py-12">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-6 sm:grid-cols-3 lg:px-10">
        <StatItem
          icon={Leaf}
          target={500}
          suffix="+"
          label="clientes atendidas"
          parentVisible={visible}
          delay={0}
        />
        <StatItem
          icon={Sparkles}
          target={5}
          suffix=" anos"
          label="de experiência"
          parentVisible={visible}
          delay={150}
        />
        <StatItem
          icon={Star}
          target={5}
          suffix=" estrelas"
          label="de avaliação"
          parentVisible={visible}
          delay={300}
        />
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Modal de Galeria
// ---------------------------------------------------------------------------
function GalleryModal({
  title,
  images,
  onClose,
}: {
  title: string;
  images: string[];
  onClose: () => void;
}) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setCurrent((c) => (c + 1) % images.length);
      if (e.key === "ArrowLeft") setCurrent((c) => (c - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [images.length, onClose]);

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative flex max-h-[90vh] w-full max-w-sm flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="mb-4 flex w-full items-center justify-between px-2">
          <span className="font-display text-xl text-white">{title}</span>
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        {/* Imagem */}
        <div className="relative w-full overflow-hidden rounded-2xl" style={{ aspectRatio: "9/16" }}>
          {images.length > 0 ? (
            <img
              src={images[current]}
              alt={`${title} - foto ${current + 1}`}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-sage-light">
              <div className="text-center">
                <Images size={40} className="mx-auto text-primary/40" strokeWidth={1.5} />
                <p className="mt-3 text-sm text-muted-foreground">Fotos em breve</p>
              </div>
            </div>
          )}

          {/* Navegação */}
          {images.length > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-2 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center
                  rounded-full bg-black/40 text-white backdrop-blur-sm hover:bg-black/60 transition-colors"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                className="absolute right-2 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center
                  rounded-full bg-black/40 text-white backdrop-blur-sm hover:bg-black/60 transition-colors"
              >
                <ChevronRight size={18} />
              </button>
            </>
          )}
        </div>

        {/* Indicadores */}
        {images.length > 1 && (
          <div className="mt-4 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === current ? "w-6 bg-gold" : "w-1.5 bg-white/40"
                }`}
              />
            ))}
          </div>
        )}

        {/* Contador */}
        {images.length > 1 && (
          <p className="mt-2 text-xs text-white/50">
            {current + 1} / {images.length}
          </p>
        )}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Serviços — cards com stagger e micro-interação no ícone
// ---------------------------------------------------------------------------
function Services() {
  const [ref, visible] = useReveal<HTMLElement>();
  const [activeService, setActiveService] = useState<string | null>(null);

  // Fotos por serviço — serão preenchidas quando as imagens forem adicionadas
  const serviceImages: Record<string, string[]> = {
    "Nature Brows": [],
    "Brow Lamination": [],
    "Lash Lifting": [],
    "Design & Henna": [],
    "Limpeza de Pele": [],
    "Nature Lips": [],
  };

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
    {
      icon: Smile,
      title: "Nature Lips",
      desc: "Revitalização labial que hidrata profundamente, realça a cor natural e devolve o viço dos lábios. Resultado saudável, uniforme e naturalmente atraente — sem exageros, apenas sua melhor versão.",
    },
  ];

  return (
    <>
      {activeService && (
        <GalleryModal
          title={activeService}
          images={serviceImages[activeService] ?? []}
          onClose={() => setActiveService(null)}
        />
      )}

      <section id="servicos" ref={ref} className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          {/* Cabeçalho */}
          <div className={`mx-auto max-w-2xl text-center ${fadeUp} ${visible ? shown : hidden}`}>
            <span className="text-xs font-medium uppercase tracking-[0.28em] text-primary">O que oferecemos</span>
            <h2 className="mt-4 font-display text-4xl text-foreground sm:text-5xl">
              Nossos <em className="italic text-primary-dark">Serviços</em>
            </h2>
            <p className="mt-5 text-base text-muted-foreground">
              Técnicas exclusivas pensadas para o seu tipo de rosto e estilo.
            </p>
            <div className={`mx-auto mt-6 h-px bg-gold transition-all duration-700 delay-300 ${visible ? "w-16" : "w-0"}`} />
          </div>

          {/* Grid com stagger */}
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <article
                key={s.title}
                className={`group relative rounded-2xl border border-border bg-background p-8
                  transition-all duration-500 hover:-translate-y-1.5 hover:border-gold hover:shadow-lg
                  ${fadeUp} ${visible ? shown : hidden}`}
                style={{ transitionDelay: visible ? `${i * 80}ms` : "0ms" }}
              >
                {/* Ícone de galeria — canto superior direito */}
                <button
                  onClick={() => setActiveService(s.title)}
                  className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full
                    bg-sage-light text-primary/40 transition-all duration-300
                    hover:bg-gold/15 hover:text-gold hover:scale-110"
                  title={`Ver fotos de ${s.title}`}
                >
                  <Images size={15} strokeWidth={1.5} />
                </button>

                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full
                  bg-sage-light text-primary transition-all duration-300
                  group-hover:bg-gold/15 group-hover:text-gold group-hover:-translate-y-1"
                >
                  <s.icon size={22} strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-2xl text-foreground">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <div className="mt-6 h-px w-0 bg-gold transition-all duration-500 group-hover:w-12" />
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

// ---------------------------------------------------------------------------
// Sobre
// ---------------------------------------------------------------------------
function About() {
  const [ref, visible] = useReveal<HTMLElement>();

  return (
    <section id="sobre" ref={ref} className="bg-sage-light py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[5fr_6fr] lg:gap-20 lg:px-10">
        {/* Imagem */}
        <div
          className={`relative ${fadeUp} ${visible ? shown : hidden}`}
          style={{ transitionDelay: "100ms" }}
        >
          <div className="overflow-hidden rounded-[2rem] shadow-xl">
            <img
              src={aryannePortrait}
              alt="Aryanne Medeiros"
              width={900}
              height={1100}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
            />
          </div>
          <span
            className={`absolute -bottom-10 -right-4 font-script sm:-right-8 transition-all duration-700 delay-500
              ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}`}
            style={{ fontSize: "7rem", color: "#A87C3E", textShadow: "0 2px 16px rgba(168,124,62,0.3)" }}
          >
            Am
          </span>
        </div>

        {/* Texto */}
        <div
          className={`${fadeUp} ${visible ? shown : hidden}`}
          style={{ transitionDelay: "250ms" }}
        >
          <span className="text-xs font-medium uppercase tracking-[0.28em] text-primary-dark">
            Sobre a profissional
          </span>
          <div
            className={`mt-3 h-px bg-gold transition-all duration-700 delay-500 ${
              visible ? "w-20" : "w-0"
            }`}
          />
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
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3
              text-sm font-medium text-primary-foreground transition-all duration-300
              hover:bg-primary-dark hover:scale-[1.03]"
          >
            Conheça o studio
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Portfólio
// ---------------------------------------------------------------------------
function Portfolio() {
  const [ref, visible] = useReveal<HTMLElement>();

  const verticals = [
    { img: portfolio1, tag: "Nature Brows" },
    { img: portfolio4, tag: "Nature Brows" },
    { img: portfolio6, tag: "Naturalidade" },
  ];

  const horizontals = [
    { img: portfolio2, tag: "Design & Henna" },
    { img: portfolio3, tag: "Nature Brows" },
    { img: portfolio5, tag: "Nature Brows" },
  ];

  const PortfolioCard = ({
    img,
    tag,
    height,
    index,
  }: {
    img: string;
    tag: string;
    height: number;
    index: number;
  }) => (
    <figure
      className={`group overflow-hidden rounded-2xl border border-border bg-background
        ${fadeUp} ${visible ? shown : hidden}`}
      style={{ transitionDelay: visible ? `${index * 100}ms` : "0ms" }}
    >
      <div className="relative overflow-hidden" style={{ height: `${height}px` }}>
        <img
          src={img}
          alt={`Antes e depois - ${tag}`}
          loading="lazy"
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
        />
        <span className="absolute left-3 top-3 rounded-full bg-background/85 backdrop-blur-sm px-3 py-1 text-[10px] uppercase tracking-wider text-foreground">
          antes
        </span>
        <span className="absolute bottom-3 right-3 rounded-full bg-primary/90 backdrop-blur-sm px-3 py-1 text-[10px] uppercase tracking-wider text-primary-foreground">
          depois
        </span>
      </div>

    </figure>
  );

  return (
    <section id="portfolio" ref={ref} className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Cabeçalho */}
        <div className={`mx-auto max-w-2xl text-center ${fadeUp} ${visible ? shown : hidden}`}>
          <span className="text-xs font-medium uppercase tracking-[0.28em] text-primary">Portfólio</span>
          <h2 className="mt-4 font-display text-4xl text-foreground sm:text-5xl">
            Transformações <em className="italic text-primary-dark">Reais</em>
          </h2>
          <p className="mt-5 text-base text-muted-foreground">Resultados que falam por si.</p>
          <div className={`mx-auto mt-6 h-px bg-gold transition-all duration-700 delay-300 ${visible ? "w-16" : "w-0"}`} />
        </div>

        {/* Bloco 1 — Verticais */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {verticals.map((it, i) => (
            <PortfolioCard key={i} img={it.img} tag={it.tag} height={480} index={i} />
          ))}
        </div>

        {/* Bloco 2 — Horizontais */}
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {horizontals.map((it, i) => (
            <PortfolioCard key={i} img={it.img} tag={it.tag} height={280} index={i + 3} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Depoimentos
// ---------------------------------------------------------------------------
function Testimonials() {
  const [ref, visible] = useReveal<HTMLElement>();

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
    <section ref={ref} className="bg-primary py-24 text-primary-foreground lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div
          className={`mx-auto max-w-2xl text-center ${fadeUp} ${
            visible ? shown : hidden
          }`}
        >
          <span className="text-xs font-medium uppercase tracking-[0.28em] text-gold">
            Depoimentos
          </span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl">
            O que dizem nossas{" "}
            <em className="italic">clientes</em>
          </h2>
          <div
            className={`mx-auto mt-6 h-px bg-gold transition-all duration-700 delay-300 ${
              visible ? "w-16" : "w-0"
            }`}
          />
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {items.map((t, i) => (
            <blockquote
              key={t.name}
              className={`rounded-2xl border border-white/15 bg-white/[0.08] p-8
                backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.13] hover:-translate-y-1
                ${fadeUp} ${visible ? shown : hidden}`}
              style={{ transitionDelay: visible ? `${i * 120}ms` : "0ms" }}
            >
              <div className="flex gap-1 text-gold">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={14} fill="currentColor" strokeWidth={0} />
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

// ---------------------------------------------------------------------------
// CTA Final
// ---------------------------------------------------------------------------
function FinalCTA() {
  const [ref, visible] = useReveal<HTMLElement>();

  return (
    <section id="contato" ref={ref} className="bg-sage-light py-24 lg:py-32">
      <div
        className={`mx-auto max-w-3xl px-6 text-center lg:px-10 ${fadeUp} ${
          visible ? shown : hidden
        }`}
      >
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
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-primary px-9 py-4
            text-base font-medium text-primary-foreground shadow-md
            transition-all duration-300 hover:bg-primary-dark hover:shadow-lg hover:scale-[1.04]"
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

// ---------------------------------------------------------------------------
// Footer
// ---------------------------------------------------------------------------
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
            {["#servicos", "#sobre", "#portfolio", "#contato"].map((href, i) => (
              <li key={href}>
                <a
                  href={href}
                  className="transition-colors hover:text-gold"
                >
                  {["Serviços", "Sobre", "Portfólio", "Contato"][i]}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg text-white">Siga o Studio</h4>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex h-10 w-10 items-center justify-center rounded-full
              border border-white/20 text-white/80 transition-all duration-300
              hover:border-gold hover:text-gold hover:scale-110"
            aria-label="Instagram"
          >
            <Instagram size={18} />
          </a>
          <div className="mt-6">
            <h4 className="font-display text-lg text-white">Avalie no Google</h4>
            <a
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/20
                px-4 py-2 text-sm text-white/80 transition-all duration-300
                hover:border-gold hover:text-gold"
            >
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} fill="currentColor" className="text-gold" strokeWidth={0} />
                ))}
              </div>
              Deixar avaliação
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 px-6 pt-6 text-xs text-white/40 lg:px-10">
        © 2025 Studio Aryanne Medeiros Beauty. Todos os direitos reservados.
      </div>
    </footer>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------
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
