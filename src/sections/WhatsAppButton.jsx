import { WHATSAPP_URL } from '../data/homeContent';

// `raised` lifts it above the homepage's mobile sticky buy bar.
export default function WhatsAppButton({ raised = false }) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="হোয়াটসঅ্যাপে সরাসরি কথা বলুন"
      className={`fixed right-4 z-50 flex ${raised ? 'bottom-24' : 'bottom-5'} items-center gap-2 rounded-full bg-[#25D366] p-3.5 text-sm font-bold text-white shadow-2xl transition hover:scale-105 motion-reduce:transition-none sm:right-6 md:bottom-6`}
    >
      <svg className="size-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.592 2.654-.698c.969.58 1.961.905 2.806.905 3.18 0 5.766-2.587 5.767-5.767 0-3.18-2.587-5.767-5.767-5.767zm7.986 5.766c-.002 4.412-3.59 7.999-8.002 7.999-1.282 0-2.544-.316-3.673-.918l-4.342 1.139 1.159-4.229c-.663-1.152-1.014-2.463-1.014-3.991 0-4.412 3.59-7.999 8.002-7.999 4.413 0 8.002 3.587 8.002 7.999z" />
      </svg>
      <span className="hidden sm:inline">সরাসরি কথা বলুন</span>
    </a>
  );
}
