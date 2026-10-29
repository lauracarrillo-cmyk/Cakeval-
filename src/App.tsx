
import { useState } from 'react';
import logo from './assets/logo.png';

const NAV_LINKS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Quiénes somos', href: '#nosotros' },
  { label: 'Misión', href: '#mision' },
  { label: 'Visión', href: '#vision' },
  { label: 'Objetivos', href: '#objetivos' },
  { label: 'Presentación', href: '#presentacion' },
  { label: 'Contacto', href: '#contacto' },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-[#29213F]">
      <header className="sticky top-0 z-50 border-b border-[#EEEAFF] bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#inicio" aria-label="Cakeval, inicio">
            <img
              src={logo}
              alt="Logo de Cakeval"
              className="h-12 w-auto object-contain"
            />
          </a>

          <button
            type="button"
            className="rounded-lg border border-[#DDD6FF] px-4 py-2 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label="Abrir o cerrar el menú"
          >
            {menuOpen ? 'Cerrar' : 'Menú'}
          </button>

          <nav className="hidden items-center gap-5 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors hover:text-[#6B5CE7]"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {menuOpen && (
          <nav className="flex flex-col gap-1 border-t border-[#EEEAFF] bg-white px-5 py-4 md:hidden">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 hover:bg-[#F5F3FF]"
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      <section
        id="inicio"
        className="overflow-hidden bg-gradient-to-br from-[#F5F3FF] via-white to-[#EAF7FF] px-5 py-24 md:py-32"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <div>
            <span className="mb-5 inline-block rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#6B5CE7] shadow-sm">
              Bienvenidos a Cakeval
            </span>

            <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
              Creamos experiencias
              <span className="block text-[#6B5CE7]">
                que inspiran.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[#625B75]">
              Conoce nuestra empresa, nuestros propósitos y la manera en que
              trabajamos para desarrollar ideas y ofrecer soluciones.
            </p>

            <a
              href="#nosotros"
              className="mt-8 inline-block rounded-full bg-[#6B5CE7] px-7 py-3.5 font-semibold text-white shadow-lg transition hover:bg-[#5546D5]"
            >
              Conócenos
            </a>
          </div>

          <div className="flex justify-center">
            <div className="rounded-[2rem] border border-white bg-white p-6 shadow-xl md:p-10">
              <img
                src={logo}
                alt="Identidad visual de Cakeval"
                className="mx-auto max-h-72 w-full max-w-sm object-contain"
              />
              <p className="mt-5 text-center text-sm tracking-wide text-[#807895]">
                Creatividad · Compromiso · Calidad
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="nosotros" className="px-5 py-20 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-bold uppercase tracking-[0.2em] text-[#6B5CE7]">
            Conócenos
          </p>
          <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
            ¿Quiénes somos?
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#625B75]">
            Cakeval es una empresa que busca desarrollar e implementar
            estrategias integrales, trabajando con creatividad, organización
            y compromiso para alcanzar sus objetivos y brindar una experiencia
            de calidad.
          </p>
        </div>
      </section>

      <section className="bg-[#F8F7FF] px-5 py-20 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-7 md:grid-cols-2">
          <article
            id="mision"
            className="scroll-mt-28 rounded-3xl border border-[#E8E3FF] bg-white p-8 shadow-sm md:p-10"
          >
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EEEAFE] text-2xl">
              ✦
            </div>
            <h2 className="text-2xl font-extrabold">Misión</h2>
            <p className="mt-4 leading-8 text-[#625B75]">
              Desarrollar e implementar estrategias integrales que respondan
              a las necesidades de nuestros clientes, aportando creatividad,
              compromiso y soluciones de calidad.
            </p>
          </article>

          <article
            id="vision"
            className="scroll-mt-28 rounded-3xl border border-[#DCEFFF] bg-white p-8 shadow-sm md:p-10"
          >
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E8F5FF] text-2xl">
              ◎
            </div>
            <h2 className="text-2xl font-extrabold">Visión</h2>
            <p className="mt-4 leading-8 text-[#625B75]">
              Consolidarnos como una empresa reconocida por la calidad de
              nuestro trabajo, la innovación de nuestras propuestas y la
              confianza que construimos con nuestros clientes.
            </p>
          </article>
        </div>
      </section>

      <section id="objetivos" className="scroll-mt-24 px-5 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="font-bold uppercase tracking-[0.2em] text-[#6B5CE7]">
              Nuestro propósito
            </p>
            <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
              Objetivos
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-8 text-[#625B75]">
              Trabajamos para construir una propuesta sólida, organizada y
              orientada a las necesidades de nuestros clientes.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                number: '01',
                title: 'Innovación',
                description:
                  'Desarrollar ideas y estrategias creativas que aporten valor.',
              },
              {
                number: '02',
                title: 'Calidad',
                description:
                  'Cuidar cada detalle para ofrecer resultados bien elaborados.',
              },
              {
                number: '03',
                title: 'Compromiso',
                description:
                  'Promover el trabajo en equipo y el cumplimiento de nuestras metas.',
              },
            ].map((item) => (
              <article
                key={item.number}
                className="rounded-3xl border border-[#EEEAFF] p-7 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="text-4xl font-extrabold text-[#B6ACFF]">
                  {item.number}
                </span>
                <h3 className="mt-5 text-xl font-bold">{item.title}</h3>
                <p className="mt-3 leading-7 text-[#625B75]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="presentacion"
        className="scroll-mt-24 bg-[#F8F7FF] px-5 py-20 md:py-24"
      >
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <p className="font-bold uppercase tracking-[0.2em] text-[#6B5CE7]">
              Conoce nuestro proyecto
            </p>
            <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
              Presentación de Cakeval
            </h2>
            <p className="mt-4 text-[#625B75]">
              Mira nuestro video de presentación.
            </p>
          </div>

          <div className="rounded-3xl border border-[#EEEAFF] bg-white p-3 shadow-xl md:p-5">
            <div className="video-container">
              <iframe
                src="https://www.youtube.com/embed/E8zlLaIqHCM"
                title="Presentación de Cakeval"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      <section id="contacto" className="scroll-mt-24 px-5 py-20 md:py-24">
        <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-br from-[#6B5CE7] to-[#8B7CF6] px-7 py-12 text-center text-white md:px-14 md:py-16">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Contacto
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/90">
            Gracias por visitar Cakeval. Nos alegra que quieras conocer más
            sobre nuestro proyecto.
          </p>
          <a
            href="mailto:contacto@cakeval.com"
            className="mt-7 inline-block rounded-full bg-white px-7 py-3 font-semibold text-[#6B5CE7] transition hover:bg-[#F1EEFF]"
          >
            Escríbenos
          </a>
        </div>
      </section>

      <footer className="border-t border-[#EEEAFF] px-5 py-7 text-center text-sm text-[#807895]">
        © {new Date().getFullYear()} Cakeval. Todos los derechos reservados.
      </footer>
    </main>
  );
}
