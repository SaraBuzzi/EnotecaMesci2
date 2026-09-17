import { Wine, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/11828428/pexels-photo-11828428.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1920"
          alt="Elegant wine bar interior with backlit shelves"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-noir-950/80 via-noir-950/50 to-noir-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-noir-950/70 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <div className="animate-fade-up mb-6 flex items-center justify-center gap-3">
          <div className="h-px w-12 bg-gold-400/60" />
          <Wine className="h-5 w-5 text-gold-400" strokeWidth={1.5} />
          <div className="h-px w-12 bg-gold-400/60" />
        </div>

        <p className="animate-fade-up delay-100 mb-4 text-sm font-light uppercase tracking-[0.3em] text-gold-300/90">
          Est. 2014 · Downtown
        </p>

        <h1 className="animate-fade-up delay-200 font-display text-6xl font-light leading-tight text-cream-100 md:text-8xl lg:text-9xl">
          Maison Noir
        </h1>

        <p className="animate-fade-up delay-300 mx-auto mt-6 max-w-2xl text-lg font-light leading-relaxed text-cream-200/80 md:text-xl">
          An intimate wine bar and cellar where every glass tells a story.
          Curated vintages, seasonal plates, and an atmosphere that lingers.
        </p>

        <div className="animate-fade-up delay-500 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#menu"
            className="group relative overflow-hidden rounded-full bg-gold-500 px-8 py-3.5 text-sm font-semibold tracking-wide text-noir-950 transition-all duration-300 hover:bg-gold-400 hover:shadow-lg hover:shadow-gold-500/30"
          >
            <span className="relative z-10">Explore the Menu</span>
          </a>
          <a
            href="#visit"
            className="rounded-full border border-cream-200/30 px-8 py-3.5 text-sm font-semibold tracking-wide text-cream-100 transition-all duration-300 hover:border-gold-400/60 hover:text-gold-300"
          >
            Visit Us
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream-200/50 transition-colors hover:text-gold-300"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-6 w-6 animate-bounce" />
      </a>
    </section>
  );
}
