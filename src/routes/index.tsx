import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-samalayuca.jpg";
import logoJb from "@/assets/logo-jb.png";
import terreno1 from "@/assets/samalayuca-lote-1.jpg";
import terreno2 from "@/assets/samalayuca-lote-2.jpg";
import terreno3 from "@/assets/samalayuca-lote-3.jpg";

// WhatsApp: número 6563217378 (México) en formato internacional +52
const WHATSAPP_NUMBER = "526563217378";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hola, me interesa conocer más sobre los terrenos en venta."
)}`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        title: "JB Soluciones Inmobiliarias | Terrenos en Samalayuca",
      },
      {
        name: "description",
        content:
          "Terrenos residenciales y comerciales en Samalayuca, Chihuahua. Conoce opciones de inversión y recibe atención directa por WhatsApp.",
      },
      { property: "og:title", content: "JB Soluciones Inmobiliarias | Terrenos en Samalayuca" },
      {
        property: "og:description",
        content:
          "Opciones de terrenos residenciales y comerciales en Samalayuca, Chihuahua. Atención personalizada por WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const terrenos = [
  {
    img: terreno1,
    nombre: "Lotes Médanos de Samalayuca",
    ubicacion: "Samalayuca, Chih.",
    area: "300 m²",
    precio: "$450,000 MXN",
    etiqueta: "Residencial",
   destacado: "Servicios incluidos",
  },
  {
    img: terreno2,
    nombre: "Terrenos Sierra de Samalayuca",
    ubicacion: "Samalayuca, Chih.",
    area: "500 m²",
    precio: "$780,000 MXN",
    etiqueta: "Vista panorámica",
    destacado: "Acabados de lujo",
  },
  {
    img: terreno3,
    nombre: "Lote Corredor Samalayuca",
    ubicacion: "Samalayuca, Chih.",
    area: "450 m²",
    precio: "$950,000 MXN",
    etiqueta: "Comercial",
    destacado: "Esquina panorámica",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="#inicio" className="flex items-center gap-3" aria-label="JB Soluciones Inmobiliarias, inicio">
            <img src={logoJb} alt="" width={1024} height={1024} className="h-11 w-11 object-contain" />
            <span className="max-w-48 text-sm font-bold leading-tight sm:text-base">
              JB <span className="text-primary">Soluciones Inmobiliarias</span>
            </span>
          </a>
          <ul className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
            <li><a href="#inicio" className="transition-colors hover:text-foreground">Inicio</a></li>
            <li><a href="#terrenos" className="transition-colors hover:text-foreground">Terrenos</a></li>
            <li><a href="#beneficios" className="transition-colors hover:text-foreground">Beneficios</a></li>
            <li><a href="#contacto" className="transition-colors hover:text-foreground">Contacto</a></li>
          </ul>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
          >
            WhatsApp
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section id="inicio" className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Vista aérea de terrenos junto a los Médanos de Samalayuca, Chihuahua"
            width={1920}
            height={1080}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/65 to-primary/30" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-28 sm:px-6 md:py-40">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
               Terrenos en venta · Samalayuca, Chihuahua
            </span>
            <h1 className="mt-6 text-balance text-4xl font-black leading-tight tracking-tight sm:text-6xl">
              Tu terreno ideal,
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                con escrituras libres
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
               Conoce opciones residenciales y comerciales en el entorno único de
               Samalayuca. Recibe atención personalizada para encontrar tu próxima inversión.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#terrenos"
                className="rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
              >
                Ver terrenos disponibles
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border bg-card/60 px-7 py-3.5 text-sm font-semibold backdrop-blur-sm transition-colors hover:border-primary hover:text-primary"
              >
                Hablar con un asesor
              </a>
            </div>
            <dl className="mt-14 grid max-w-md grid-cols-3 gap-6">
              <div>
                <dt className="text-3xl font-black text-primary">12+</dt>
                <dd className="text-xs text-muted-foreground">Años de experiencia</dd>
              </div>
              <div>
                <dt className="text-3xl font-black text-primary">300+</dt>
                <dd className="text-xs text-muted-foreground">Terrenos vendidos</dd>
              </div>
              <div>
                <dt className="text-3xl font-black text-primary">100%</dt>
                <dd className="text-xs text-muted-foreground">Escrituras libres</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section id="beneficios" className="border-t border-border/60 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
               ¿Por qué comprar con <span className="text-primary">JB Soluciones Inmobiliarias</span>?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Te acompañamos en cada paso para que tu inversión sea segura y rentable.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: (
                  <svg viewBox="0 0 24 24" className="h-6 w-6 stroke-primary fill-none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><path d="M9 13h6M9 17h4"/></svg>
                ),
                title: "Escrituras libres",
                desc: "Todos nuestros terrenos cuentan con escrituras y documentos en regla.",
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" className="h-6 w-6 stroke-primary fill-none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z"/></svg>
                ),
                title: "Servicios incluidos",
                desc: "Luz, agua y drenaje listos para que construyas cuanto antes.",
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" className="h-6 w-6 stroke-primary fill-none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="2.5"/><path d="M6 12h.01M18 12h.01"/></svg>
                ),
                title: "Facilidades de pago",
                desc: "Enganches accesibles y mensualidades sin intereses.",
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" className="h-6 w-6 stroke-primary fill-none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M16 11a4 4 0 1 0-8 0"/><path d="M3 20a9 9 0 0 1 18 0"/><circle cx="12" cy="7" r="1.5"/></svg>
                ),
                title: "Asesoría personalizada",
                desc: "Te ayudamos a elegir el terreno que mejor se adapte a ti.",
              },
            ].map((b) => (
              <div
                key={b.title}
                className="glow-purple rounded-2xl border border-border/60 bg-card p-7 transition-transform hover:-translate-y-1"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/15">
                  {b.icon}
                </div>
                <h3 className="mt-5 text-lg font-semibold">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TERRENOS */}
      <section id="terrenos" className="border-t border-border/60 bg-card/30 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div className="max-w-xl">
              <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
                Terrenos disponibles
              </h2>
              <p className="mt-3 text-muted-foreground">
                Una selección de nuestros lotes más solicitados. Todos con escrituras libres.
              </p>
            </div>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-primary hover:underline"
            >
              ¿No ves lo que buscas? Pregúntanos →
            </a>
          </div>

          <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {terrenos.map((t) => (
              <article
                key={t.nombre}
                className="group overflow-hidden rounded-2xl border border-border/60 bg-card transition-transform hover:-translate-y-1"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={t.img}
                    alt={t.nombre}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                    {t.etiqueta}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{t.nombre}</h3>
                  <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                    <svg viewBox="0 0 24 24" className="h-4 w-4 stroke-current fill-none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s-7-5.6-7-11a7 7 0 0 1 14 0c0 5.4-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>
                    {t.ubicacion} · {t.area}
                  </p>
                  <p className="mt-1 text-sm font-medium text-gold">{t.destacado}</p>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-2xl font-black text-foreground">{t.precio}</span>
                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
                    >
                      Me interesa
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA WHATSAPP */}
      <section id="contacto" className="relative overflow-hidden border-t border-border/60 py-24">
        <div className="absolute inset-0 gradient-purple opacity-20" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-5xl">
            ¿Listo para ser dueño de tu terreno?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            Escríbenos por WhatsApp y un asesor te atenderá de inmediato. Resolvemos tus
            dudas y te mostramos las mejores opciones.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-[#25D366] px-8 py-4 text-base font-bold text-white shadow-lg shadow-[#25D366]/30 transition-transform hover:scale-105"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden="true">
                <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              Escríbenos al 656 321 7378
            </a>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Atención inmediata · Sin costo · Lunes a Sábado
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border/60 bg-background py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:px-6 md:flex-row">
          <div className="flex items-center gap-2">
             <img src={logoJb} alt="" loading="lazy" width={1024} height={1024} className="h-11 w-11 object-contain" />
             <span className="text-base font-bold">
               JB <span className="text-primary">Soluciones Inmobiliarias</span>
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
             © {new Date().getFullYear()} JB Soluciones Inmobiliarias · Samalayuca, Chihuahua
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-primary hover:underline"
          >
            WhatsApp: 656 321 7378
          </a>
        </div>
      </footer>

      {/* BOTÓN FLOTANTE WHATSAPP */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center justify-center rounded-full bg-[#25D366] p-4 text-white shadow-xl shadow-[#25D366]/40 transition-transform hover:scale-110"
      >
        <svg viewBox="0 0 24 24" className="h-8 w-8 fill-current" aria-hidden="true">
          <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      </a>
    </div>
  );
}
