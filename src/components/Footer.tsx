import { INSTAGRAM_HANDLE, INSTAGRAM_URL, SITE_NAME } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="relative z-20 border-t border-white/10 px-5 py-10 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
        <div>
          <p className="font-cinzel tracking-[0.2em]">{SITE_NAME}</p>
          <p className="mt-2 text-sm text-white/55">
            © 2026 RafaeLBR • Artes para Lineage 2
          </p>
        </div>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary transition hover:text-white"
        >
          Instagram: {INSTAGRAM_HANDLE}
        </a>
      </div>
    </footer>
  );
}
