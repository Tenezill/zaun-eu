<template>
  <div
    class="
      min-h-screen
      bg-concrete-light text-concrete-dark
      dark:bg-brand-dark dark:text-white
      transition-colors duration-300
    "
  >
    <!-- NAVBAR -->
    <header
      class="
        sticky top-0 z-20 backdrop-blur border-b
        bg-concrete-light/80 border-concrete-mid
        dark:bg-brand-dark/90 dark:border-white/10
        transition-colors duration-300
      "
    >
      <nav class="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <div class="flex items-center gap-3">
          <!-- LOGO ELEMENT -->
          <div class="h-8 w-8 flex items-end gap-[2px]">
            <span class="h-6 w-1 bg-brand-accent rounded"></span>
            <span class="h-8 w-1 bg-brand-primary rounded"></span>
            <span class="h-5 w-1 bg-brand-primary rounded"></span>
          </div>

          <span
            class="
              font-semibold tracking-wide uppercase text-sm
              text-concrete-dark dark:text-white
            "
          >
            Ihr Zaun-Fachbetrieb
          </span>

          <!-- THEME TOGGLE BUTTON -->
          
        </div>

        <div class="hidden md:flex items-center gap-6 text-sm">
          <a
            href="#leistungen"
            class="hover:text-brand-accent transition text-concrete-dark dark:text-white"
          >
            Leistungen
          </a>
          <a
            href="#referenzen"
            class="hover:text-brand-accent transition text-concrete-dark dark:text-white"
          >
            Referenzen
          </a>
          <a
            href="#kontakt"
            class="hover:text-brand-accent transition text-concrete-dark dark:text-white"
          >
            Kontakt
          </a>

          <a
            href="#angebot"
            class="
              rounded-md px-4 py-2 text-sm font-medium 
              bg-brand-accent text-brand-dark hover:bg-white 
              dark:bg-brand-accent dark:text-brand-dark
              transition
            "
          >
            Angebot anfragen
          </a>
          <ThemeToggle />
        </div>
        
      </nav>
    </header>

    <main class="mx-auto max-w-6xl px-4 pb-16 pt-10 space-y-24">
      <!-- HERO -->
      <section class="grid gap-10 md:grid-cols-2 items-center">
        <div>
          <p class="text-xs uppercase tracking-[0.2em] text-brand-accent mb-3">
            Zäune · Tore · Sichtschutz
          </p>

          <h1
            class="
              text-3xl md:text-4xl lg:text-5xl font-semibold font-[Poppins]
              leading-tight text-concrete-dark dark:text-white
            "
          >
            Stabile Zäune.<br />
            Saubere Montage.<br />
            Faire Preise.
          </h1>

          <p class="mt-4 text-sm md:text-base text-concrete-dark/80 dark:text-white/70 max-w-xl">
            Wir planen, liefern und montieren langlebige Zäune für Häuser, Gärten und Gewerbe
            in Ihrer Region – präzise, zuverlässig und termingerecht.
          </p>

          <div class="mt-6 flex flex-wrap gap-3">
            <a
              href="#angebot"
              class="
                rounded-md px-5 py-2.5 text-sm font-medium shadow transition
                bg-brand-accent text-brand-dark hover:bg-white
              "
            >
              Kostenloses Angebot anfragen
            </a>

            <a
              href="#referenzen"
              class="
                rounded-md px-5 py-2.5 text-sm font-medium transition
                border border-concrete-mid text-concrete-dark
                hover:border-brand-accent hover:text-brand-accent
                dark:border-white/30 dark:text-white
              "
            >
              Referenzen ansehen
            </a>
          </div>

          <div class="mt-6 grid grid-cols-3 gap-4 text-xs text-concrete-dark/70 dark:text-white/70">
            <div>
              <p class="text-lg font-semibold text-concrete-dark dark:text-white">10+</p>
              <p>Jahre Erfahrung</p>
            </div>
            <div>
              <p class="text-lg font-semibold text-concrete-dark dark:text-white">100+</p>
              <p>fertige Projekte</p>
            </div>
            <div>
              <p class="text-lg font-semibold text-concrete-dark dark:text-white">5★</p>
              <p>Kundenzufriedenheit</p>
            </div>
          </div>
        </div>

        <!-- HERO IMAGE -->
        <div class="relative">
          <div
            class="
              aspect-[4/3] overflow-hidden rounded-2xl border
              bg-concrete-mid border-concrete-mid
              dark:bg-brand-primary/40 dark:border-white/10
            "
          >
            <div
              class="
                h-full w-full flex items-end justify-center p-6
                bg-gradient-to-t from-concrete-dark/70
                dark:from-black/60
              "
            >
              <div
                class="
                  w-full rounded-xl p-4 text-xs border
                  bg-concrete-light/60 text-concrete-dark border-concrete-mid
                  dark:bg-black/40 dark:text-white/80 dark:border-white/10
                "
              >
                <p class="font-medium text-concrete-dark dark:text-white mb-1">
                  Doppelstabmattenzaun mit Sichtschutz
                </p>
                <p>Projekt: Einfamilienhaus · Fertigstellung: 2024</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- LEISTUNGEN -->
      <section id="leistungen" class="space-y-6">
        <div>
          <h2 class="text-2xl font-semibold font-[Poppins] text-concrete-dark dark:text-white">
            Unsere Leistungen
          </h2>
          <p class="text-sm text-concrete-dark/70 dark:text-white/70 max-w-xl">
            Von der Planung bis zur Montage bekommen Sie alles aus einer Hand – exakt
            zugeschnitten auf Ihr Grundstück und Ihr Budget.
          </p>
        </div>

        <div class="grid gap-6 md:grid-cols-3 text-sm">
          <ServiceCard
            title="Doppelstabmattenzäune"
            text="Robuste Zäune für Gärten, Einfahrten und Gewerbe – langlebig, sicher und pflegeleicht."
          />
          <ServiceCard
            title="Sichtschutzzäune"
            text="Mehr Privatsphäre für Terrasse und Garten mit modernen Sichtschutzlösungen."
          />
          <ServiceCard
            title="Tore & Türen"
            text="Passende Gartentüren, Schiebe- und Flügeltore inklusive Beschläge und Montage."
          />
        </div>
      </section>

      <!-- REFERENZEN -->
      <section id="referenzen" class="space-y-6">
        <div>
          <h2 class="text-2xl font-semibold font-[Poppins] text-concrete-dark dark:text-white">
            Ausgewählte Referenzen
          </h2>
          <p class="text-sm text-concrete-dark/70 dark:text-white/70 max-w-xl">
            Ein kurzer Blick in unsere Arbeit – jedes Projekt ist individuell geplant und umgesetzt.
          </p>
        </div>

        <div class="grid gap-4 md:grid-cols-3 text-xs text-concrete-dark/70 dark:text-white/80">
          <ReferenceCard title="Sichtschutzzaun" location="Linz" year="2024" />
          <ReferenceCard title="Doppelstabzaun" location="Wels" year="2023" />
          <ReferenceCard title="Aluzaun mit Tor" location="Steyr" year="2023" />
        </div>
      </section>

      <!-- ANGEBOT -->
      <section id="angebot" class="space-y-6">
        <div class="grid gap-8 md:grid-cols-[2fr,1.3fr]">
          <!-- FORM CARD -->
          <div
            class="
              rounded-2xl p-6 shadow-lg border
              bg-concrete-light border-concrete-mid
              dark:bg-white/5 dark:border-white/10
            "
          >
            <h2 class="text-2xl font-semibold font-[Poppins] text-concrete-dark dark:text-white mb-2">
              Unverbindliches Angebot anfragen
            </h2>
            <p class="text-sm text-concrete-dark/70 dark:text-white/70 mb-4">
              Senden Sie uns ein paar Eckdaten zu Ihrem Projekt – wir melden uns schnellstmöglich.
            </p>

            <form class="space-y-4 text-sm">
              <div class="grid gap-4 md:grid-cols-2">
                <FormField label="Name" type="text" placeholder="Max Mustermann" />
                <FormField label="E-Mail" type="email" placeholder="max@example.com" />
              </div>
              <div class="grid gap-4 md:grid-cols-2">
                <FormField label="Telefon" type="tel" placeholder="+43..." />
                <FormField label="PLZ / Ort" type="text" placeholder="4020 Linz" />
              </div>

              <div>
                <label class="mb-1 block text-xs font-medium text-concrete-dark/80 dark:text-white/80">
                  Zauntyp
                </label>

                <select
                  class="
                    w-full rounded-md px-3 py-2 text-sm outline-none
                    bg-concrete-light border border-concrete-mid text-concrete-dark
                    focus:border-brand-accent
                    dark:bg-black/30 dark:border-white/20 dark:text-white
                  "
                >
                  <option>Doppelstabmattenzaun</option>
                  <option>Sichtschutzzaun</option>
                  <option>Aluzaun</option>
                  <option>Tore & Türen</option>
                  <option>Sonstiges / Beratung gewünscht</option>
                </select>
              </div>

              <div>
                <label class="mb-1 block text-xs font-medium text-concrete-dark/80 dark:text-white/80">
                  Projektbeschreibung
                </label>

                <textarea
                  rows="4"
                  class="
                    w-full rounded-md px-3 py-2 text-sm outline-none
                    bg-concrete-light border border-concrete-mid text-concrete-dark
                    focus:border-brand-accent
                    dark:bg-black/30 dark:border-white/20 dark:text-white
                  "
                />
              </div>

              <button
                type="submit"
                class="
                  mt-2 inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm
                  bg-brand-accent text-brand-dark hover:bg-white transition
                "
              >
                Anfrage senden
              </button>
            </form>
          </div>

          <!-- CONTACT SIDEBAR -->
          <div class="space-y-4 text-sm">
            <div
              class="
                rounded-2xl p-5 border
                bg-concrete-light border-concrete-mid
                dark:bg-white/5 dark:border-white/10
              "
            >
              <h3 class="text-base font-semibold font-[Poppins] text-concrete-dark dark:text-white mb-2">
                Direkter Kontakt
              </h3>
              <p class="text-concrete-dark/80 dark:text-white/80">
                Telefon: <span class="font-medium">+43 ...</span><br />
                E-Mail: <span class="font-medium">info@ihr-zaun.at</span><br />
                Adresse: <span class="font-medium">Musterstraße 1, 4020 Linz</span>
              </p>
            </div>

            <div
              class="
                rounded-2xl p-5 border
                bg-concrete-light border-concrete-mid
                dark:bg-white/5 dark:border-white/10
              "
            >
              <h3 class="text-base font-semibold font-[Poppins] text-concrete-dark dark:text-white mb-2">
                Häufige Fragen
              </h3>
              <ul class="space-y-2 text-concrete-dark/80 dark:text-white/80">
                <li>• Wie lange dauert die Montage?</li>
                <li>• Können alte Zäune entfernt werden?</li>
                <li>• Bieten Sie auch Beratung vor Ort?</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- FOOTER -->
    <footer
      class="
        border-t py-6 text-xs
        border-concrete-mid text-concrete-dark/70
        dark:border-white/10 dark:text-white/60
        transition-colors duration-300
      "
    >
      <div
        class="
          mx-auto flex max-w-6xl flex-col gap-3 px-4
          md:flex-row md:items-center md:justify-between
        "
      >
        <p>© {{ year }} Ihr Zaun-Fachbetrieb. Alle Rechte vorbehalten.</p>

        <div class="flex gap-4">
          <a href="/impressum" class="hover:text-brand-accent transition">Impressum</a>
          <a href="/datenschutz" class="hover:text-brand-accent transition">Datenschutz</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
</script>
