import { useState } from 'react';
import { Wine, UtensilsCrossed, Plus } from 'lucide-react';
import { wineMenu, foodMenu, type MenuSection } from '@/data/menu';

type Tab = 'drinks' | 'food';

export default function MenuSectionComponent() {
  const [tab, setTab] = useState<Tab>('drinks');
  const sections = tab === 'drinks' ? wineMenu : foodMenu;

  return (
    <section id="menu" className="section-padding relative overflow-hidden bg-noir-900">
      <div className="absolute top-0 left-1/2 h-px w-40 -translate-x-1/2 bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />

      <div className="container-narrow relative z-10">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-light uppercase tracking-[0.3em] text-gold-400/80">
            The Menu
          </p>
          <h2 className="font-display text-4xl font-light leading-tight text-cream-100 md:text-5xl lg:text-6xl">
            Curated with <span className="text-gradient-gold italic">intention</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base font-light text-cream-200/60">
            Every selection is chosen to complement the next. Ask our staff for
            the perfect pairing.
          </p>
        </div>

        <div className="mx-auto mb-12 flex max-w-md items-center justify-center gap-2 rounded-full border border-noir-700/50 bg-noir-800/50 p-1.5">
          <button
            onClick={() => setTab('drinks')}
            className={`flex flex-1 items-center justify-center gap-2 rounded-full py-2.5 text-sm font-medium tracking-wide transition-all duration-300 ${
              tab === 'drinks'
                ? 'bg-gold-500 text-noir-950'
                : 'text-cream-200/60 hover:text-cream-100'
            }`}
          >
            <Wine className="h-4 w-4" strokeWidth={1.5} />
            Drinks
          </button>
          <button
            onClick={() => setTab('food')}
            className={`flex flex-1 items-center justify-center gap-2 rounded-full py-2.5 text-sm font-medium tracking-wide transition-all duration-300 ${
              tab === 'food'
                ? 'bg-gold-500 text-noir-950'
                : 'text-cream-200/60 hover:text-cream-100'
            }`}
          >
            <UtensilsCrossed className="h-4 w-4" strokeWidth={1.5} />
            Food
          </button>
        </div>

        <div className="grid gap-12 md:grid-cols-2 lg:gap-16">
          {sections.map((section: MenuSection, sIdx) => (
            <div key={section.title} className="animate-fade-up" style={{ animationDelay: `${sIdx * 0.1}s` }}>
              <div className="mb-6 flex items-baseline justify-between border-b border-noir-700/40 pb-3">
                <h3 className="font-display text-2xl font-medium text-cream-100">
                  {section.title}
                </h3>
                <span className="text-xs font-light uppercase tracking-wider text-cream-200/40">
                  {section.subtitle}
                </span>
              </div>

              <div className="space-y-5">
                {section.items.map((item) => (
                  <div
                    key={item.name}
                    className="group flex items-start gap-4 transition-colors duration-300"
                  >
                    <div className="flex-1">
                      <div className="flex items-baseline justify-between gap-3">
                        <h4 className="font-display text-lg font-medium text-cream-100 transition-colors group-hover:text-gold-200">
                          {item.name}
                        </h4>
                        <span className="flex-1 border-b border-dashed border-noir-600/40" />
                        <span className="font-display text-lg font-medium text-gold-300">
                          {item.price}
                        </span>
                      </div>
                      <p className="mt-1 text-sm font-light leading-relaxed text-cream-200/55">
                        {item.description}
                      </p>
                      {item.tags && item.tags.length > 0 && (
                        <div className="mt-2 flex flex-wrap gap-2">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border border-gold-500/20 bg-gold-950/20 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-gold-300/80"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex items-center justify-center gap-2 text-sm font-light text-cream-200/40">
          <Plus className="h-3 w-3" />
          <p>Full bottle list available upon request. Ask about our reserve cellar.</p>
        </div>
      </div>
    </section>
  );
}
