import { MapPin, Phone, Clock, Wine, Instagram, Facebook } from 'lucide-react';

const hours = [
  { day: 'Monday', time: 'Closed' },
  { day: 'Tuesday', time: '5:00 PM – 12:00 AM' },
  { day: 'Wednesday', time: '5:00 PM – 12:00 AM' },
  { day: 'Thursday', time: '5:00 PM – 1:00 AM' },
  { day: 'Friday', time: '4:00 PM – 2:00 AM' },
  { day: 'Saturday', time: '4:00 PM – 2:00 AM' },
  { day: 'Sunday', time: '4:00 PM – 11:00 PM' },
];

export default function Visit() {
  return (
    <section id="visit" className="section-padding relative overflow-hidden">
      <div className="container-narrow relative z-10">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-light uppercase tracking-[0.3em] text-gold-400/80">
            Visit Us
          </p>
          <h2 className="font-display text-4xl font-light leading-tight text-cream-100 md:text-5xl lg:text-6xl">
            Find your <span className="text-gradient-gold italic">way</span>
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="rounded-2xl border border-noir-700/40 bg-noir-800/40 p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold-500/10">
                  <MapPin className="h-5 w-5 text-gold-400" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-display text-xl font-medium text-cream-100">Location</h3>
                  <p className="mt-1 text-sm font-light text-cream-200/60">
                    128 Vintner Street<br />
                    Old Town District<br />
                    Portland, OR 97204
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-noir-700/40 bg-noir-800/40 p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold-500/10">
                  <Phone className="h-5 w-5 text-gold-400" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-display text-xl font-medium text-cream-100">Contact</h3>
                  <p className="mt-1 text-sm font-light text-cream-200/60">
                    Phone: (503) 555-0142<br />
                    Email: hello@maisonnoir.com
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-noir-700/40 bg-noir-800/40 p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold-500/10">
                  <Clock className="h-5 w-5 text-gold-400" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <h3 className="mb-3 font-display text-xl font-medium text-cream-100">Hours</h3>
                  <div className="space-y-2">
                    {hours.map((h) => (
                      <div
                        key={h.day}
                        className="flex items-center justify-between border-b border-noir-700/20 pb-1.5 text-sm last:border-0"
                      >
                        <span className="font-light text-cream-200/50">{h.day}</span>
                        <span className={`font-light ${h.time === 'Closed' ? 'text-wine-400/70' : 'text-cream-200/80'}`}>
                          {h.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-noir-700/40 min-h-[400px] lg:min-h-full">
            <iframe
              title="Maison Noir location on Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.842342342342!2d-122.6742!3d45.5231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDMxJzIzLjIiTiAxMjLCsDQwJzI3LjEiVw!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-noir-700/40 bg-noir-950 px-6 py-12 md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex items-center gap-2.5">
            <Wine className="h-6 w-6 text-gold-400" strokeWidth={1.5} />
            <span className="font-display text-xl font-semibold tracking-wide text-cream-100">
              Maison Noir
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-cream-200/40 transition-colors hover:text-gold-300"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" strokeWidth={1.5} />
            </a>
            <a
              href="#"
              className="text-cream-200/40 transition-colors hover:text-gold-300"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" strokeWidth={1.5} />
            </a>
            <a
              href="tel:5035550142"
              className="text-cream-200/40 transition-colors hover:text-gold-300"
              aria-label="Phone"
            >
              <Phone className="h-5 w-5" strokeWidth={1.5} />
            </a>
          </div>

          <p className="text-xs font-light text-cream-200/30">
            © {new Date().getFullYear()} Maison Noir. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
