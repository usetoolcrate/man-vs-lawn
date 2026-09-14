import { Phone } from "lucide-react";
import { Link } from "react-router";

const PHONE_DISPLAY = "417-241-4025";
const PHONE_TEL = "+14172414025";

export function PublicHeader() {
  return (
    <header className="sticky top-0 z-30 bg-[#faf8f2]/95 backdrop-blur border-b border-[#1f2a1a]/10">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
        <Link to="/" className="flex items-center gap-2.5">
          <img
            src="/images/logo.webp"
            alt="Man vs. Lawn logo"
            className="h-10 w-10 rounded-full object-cover ring-2 ring-[#3f7d34]/30"
          />
          <span
            className="text-lg sm:text-xl tracking-tight text-[#1f2a1a]"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            MAN <span className="text-[#3f7d34]">VS.</span> LAWN
          </span>
        </Link>
        <a
          href={`tel:${PHONE_TEL}`}
          className="inline-flex items-center gap-2 rounded-full bg-[#3f7d34] text-white px-3.5 py-2 text-sm font-semibold hover:bg-[#356a2c] transition-colors"
        >
          <Phone className="size-4" />
          <span className="hidden sm:inline">{PHONE_DISPLAY}</span>
          <span className="sm:hidden">Call</span>
        </a>
      </div>
    </header>
  );
}
