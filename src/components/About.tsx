
export default function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-wine-900/20 blur-3xl" />
      <div className="absolute left-0 bottom-1/4 h-96 w-96 rounded-full bg-gold-900/10 blur-3xl" />

      <div className="container-narrow relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="mb-4 text-sm font-light uppercase tracking-[0.3em] text-gold-400/80">
              Our Story
            </p>
            <h2 className="font-display text-4xl font-light leading-tight text-cream-100 md:text-5xl lg:text-6xl">
              A cellar built on
              <span className="text-gradient-gold italic"> passion</span>
            </h2>
            <div className="mt-6 space-y-4 text-base font-light leading-relaxed text-cream-200/70">
              <p>
                Maison Noir was born from a simple belief: that wine is more than a
                drink — it is a conversation, a memory, a moment shared. Our cellar
                holds over 200 labels, each chosen for its story and its soul.
              </p>
              <p>
                Our kitchen works in harmony with the seasons, crafting small plates
                designed to complement and elevate every pour. Whether you join us
                for a quick glass at the bar or an evening that stretches into
                midnight, you are part of our table.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="group text-center">
                  <stat.icon
                    className="mx-auto mb-2 h-6 w-6 text-gold-400/70 transition-colors group-hover:text-gold-300"
                    strokeWidth={1.5}
                  />
                  <p className="font-display text-3xl font-medium text-cream-100">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs font-light uppercase tracking-wider text-cream-200/50">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="https://images.pexels.com/photos/5865302/pexels-photo-5865302.jpeg?auto=compress&cs=tinysrgb&h=900&w=700"
                alt="Stylish bar interior with pendant lamps and wooden furnishings"
                className="h-[500px] w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-noir-950/60 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden overflow-hidden rounded-2xl border border-gold-500/20 md:block">
              <img
                src="https://images.pexels.com/photos/30935966/pexels-photo-30935966.jpeg?auto=compress&cs=tinysrgb&h=400&w=300"
                alt="Wine flight on a wooden board"
                className="h-48 w-36 object-cover"
              />
            </div>
            <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full border border-gold-400/20" />
          </div>
        </div>
      </div>
    </section>
  );
}
