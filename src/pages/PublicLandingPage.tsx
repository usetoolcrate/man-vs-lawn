import { Leaf, Phone, Scissors, Sprout, TreeDeciduous } from "lucide-react";

const PHONE_DISPLAY = "417-241-4025";
const PHONE_TEL = "+14172414025";

const services = [
  { name: "Mowing & lawn care", icon: Leaf },
  { name: "Shrub trimming", icon: Scissors },
  { name: "Tree pruning", icon: TreeDeciduous },
  { name: "Brush & leaf clean up", icon: Leaf },
  { name: "Weed control", icon: Sprout },
  { name: "Small landscaping jobs", icon: Sprout },
];

function StripeDivider({ flip = false }: { flip?: boolean }) {
  return (
    <div
      aria-hidden
      className={`h-6 w-full ${flip ? "rotate-180" : ""}`}
      style={{
        backgroundImage:
          "repeating-linear-gradient(100deg, #3f7d34 0px, #3f7d34 14px, #4f9640 14px, #4f9640 28px)",
        maskImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='24' viewBox='0 0 120 24'%3E%3Cpath d='M0 12 Q 15 0 30 12 T 60 12 T 90 12 T 120 12 V24 H0 Z' fill='black'/%3E%3C/svg%3E\")",
        maskSize: "120px 24px",
        maskRepeat: "repeat-x",
      }}
    />
  );
}

export function PublicLandingPage() {
  return (
    <div className="flex-1 flex flex-col overflow-x-hidden bg-[#faf8f2] text-[#1f2a1a]">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(100deg, #3f7d34 0px, #3f7d34 26px, #2f5f27 26px, #2f5f27 52px)",
          }}
        />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-14 pb-16 md:pt-20 md:pb-24 grid md:grid-cols-[1.2fr_1fr] gap-10 items-center">
          <div>
            <p
              className="text-[#3f7d34] text-sm sm:text-base mb-2"
              style={{ fontFamily: "'Kalam', cursive" }}
            >
              Rogersville, Missouri &middot; one guy, one mower, no shortcuts
            </p>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl leading-[0.95] tracking-tight mb-5"
              style={{ fontFamily: "'Anton', sans-serif" }}
            >
              THE LAWN
              <br />
              NEVER WINS.
            </h1>
            <p className="text-base sm:text-lg text-[#1f2a1a]/80 max-w-lg mb-6 leading-relaxed">
              Man vs. Lawn is a one-man lawn care and landscaping operation run by
              Ethen Carlberg, born and raised right here in Rogersville. Mowing,
              trimming, pruning, cleanup, weed control &mdash; done right, every time.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center gap-2 rounded-full bg-[#3f7d34] text-white px-6 py-3.5 font-semibold hover:bg-[#356a2c] transition-colors"
              >
                <Phone className="size-4" />
                Call or text {PHONE_DISPLAY}
              </a>
              <span className="text-sm text-[#1f2a1a]/60">
                Anytime, for any reason.
              </span>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden border-4 border-white shadow-xl rotate-1">
              <img
                src="/images/signature-stripes.webp"
                alt="A freshly mowed lawn with Ethen's signature curved striping pattern"
                className="w-full h-[420px] sm:h-[480px] object-cover"
              />
            </div>
            <div
              className="absolute -bottom-4 -left-4 sm:-left-8 bg-white rounded-xl px-4 py-2.5 shadow-lg border border-[#1f2a1a]/10 -rotate-2"
              style={{ fontFamily: "'Kalam', cursive" }}
            >
              <span className="text-sm">his actual stripe pattern &uarr;</span>
            </div>
          </div>
        </div>
      </section>

      <StripeDivider />

      {/* Services */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14 md:py-20">
        <h2
          className="text-3xl sm:text-4xl mb-2 tracking-tight"
          style={{ fontFamily: "'Anton', sans-serif" }}
        >
          What Ethen handles
        </h2>
        <p className="text-[#1f2a1a]/70 mb-8 max-w-xl">
          One guy, a truck full of the right equipment, and no crew to slow things
          down or drive up the price.
        </p>
        <div className="grid sm:grid-cols-2 gap-3 max-w-3xl">
          {services.map(({ name, icon: Icon }) => (
            <div
              key={name}
              className="flex items-center gap-3 bg-white border border-[#1f2a1a]/10 rounded-xl px-4 py-3.5"
            >
              <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-[#3f7d34]/10 text-[#3f7d34]">
                <Icon className="size-4.5" />
              </span>
              <span className="font-medium">{name}</span>
            </div>
          ))}
        </div>
        <p className="text-sm text-[#1f2a1a]/60 mt-5 max-w-xl">
          Got something else in mind? Small landscaping jobs of most kinds are fair
          game &mdash; just call or text and ask.
        </p>
      </section>

      {/* Photo strip */}
      <section className="bg-white border-y border-[#1f2a1a]/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 md:py-20 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p
              className="text-[#3f7d34] text-sm uppercase tracking-widest font-semibold mb-2"
            >
              Fresh cut
            </p>
            <h2
              className="text-2xl sm:text-3xl mb-3 tracking-tight"
              style={{ fontFamily: "'Anton', sans-serif" }}
            >
              Lines you could set a level to.
            </h2>
            <p className="text-[#1f2a1a]/75 leading-relaxed">
              Straight edges, clean stripes, no missed patches along the fence line.
              This is a real yard Ethen mowed &mdash; not a stock photo.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-md">
            <img
              src="/images/house-lawn.webp"
              alt="A residential front lawn with crisp mowing stripes, mowed by Man vs. Lawn"
              className="w-full h-72 sm:h-80 object-cover"
            />
          </div>
        </div>
      </section>

      {/* About Ethen */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14 md:py-20 grid md:grid-cols-[1fr_1.3fr] gap-10 items-start">
        <div className="rounded-xl overflow-hidden shadow-md">
          <img
            src="/images/ethen-equipment.webp"
            alt="Ethen Carlberg with lawn equipment on a job site"
            className="w-full h-72 sm:h-96 object-cover"
          />
        </div>
        <div>
          <h2
            className="text-3xl sm:text-4xl mb-4 tracking-tight"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            Hometown, not a franchise.
          </h2>
          <p className="text-[#1f2a1a]/80 leading-relaxed mb-4">
            Ethen was born and raised in Rogersville and graduated from
            Logan-Rogersville High in 2015. He started Man vs. Lawn in 2020 and has
            run it himself ever since &mdash; every mow, trim, and cleanup is his own
            work, not a subcontractor's.
          </p>
          <p className="text-[#1f2a1a]/80 leading-relaxed mb-6">
            He also coaches wrestling at his old high school. If a job needs more
            hands than his own, he'll say so up front and help line up someone who
            can do it right.
          </p>
          <blockquote className="border-l-4 border-[#3f7d34] pl-4 py-1 text-[#1f2a1a]/80 italic">
            "Text or call anytime, for any reason. I can either do it, or find
            someone that can. It's going to take all of us to make the world a
            better place again, and I'm tired of being sad about it.{" "}
            <span className="not-italic font-semibold">Be the change.</span>"
            <footer
              className="mt-2 not-italic text-sm text-[#1f2a1a]/60"
              style={{ fontFamily: "'Kalam', cursive" }}
            >
              &mdash; Ethen, from a video offering free yard work to neighbors
            </footer>
          </blockquote>
        </div>
      </section>

      <StripeDivider flip />

      {/* Contact */}
      <section className="bg-[#1f2a1a] text-[#faf8f2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-20 text-center">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl mb-4 tracking-tight"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            CALL OR TEXT. ANYTIME.
          </h2>
          <p className="text-[#faf8f2]/70 max-w-xl mx-auto mb-8">
            Rogersville and the surrounding area. Tell Ethen what the yard needs and
            he'll tell you straight whether he can get to it and when.
          </p>
          <a
            href={`tel:${PHONE_TEL}`}
            className="inline-flex items-center gap-3 rounded-full bg-[#3f7d34] text-white px-8 py-4 text-lg font-semibold hover:bg-[#4f9640] transition-colors"
          >
            <Phone className="size-5" />
            {PHONE_DISPLAY}
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#faf8f2] py-6 text-center text-sm text-[#1f2a1a]/50">
        Man vs. Lawn &middot; Ethen Carlberg &middot; Rogersville, MO &middot; est. 2020
      </footer>
    </div>
  );
}
