import Logo from '../components/ui/Logo';
import { FOOTER_LINKS } from '../data/homeContent';

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-[#070a10] py-10 text-xs text-slate-400 sm:py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 text-center sm:px-6 md:flex-row md:text-left">
        <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
          <Logo withMark={false} />
          <span className="hidden sm:inline" aria-hidden="true">|</span>
          <span>সর্বস্বত্ব সংরক্ষিত © ২০২৬</span>
        </div>
        <nav aria-label="পলিসি">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {FOOTER_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="transition hover:text-emerald-400">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
