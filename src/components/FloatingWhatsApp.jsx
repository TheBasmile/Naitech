import { storeConfig, whatsappLink } from '../config/store';
import { GENERAL_INQUIRY_MESSAGE } from '../utils/whatsapp';
import { WhatsAppIcon } from './Icons';

export default function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink(GENERAL_INQUIRY_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`تواصل مع ${storeConfig.storeName} عبر واتساب`}
      className="fixed bottom-5 left-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lift transition hover:bg-whatsapp-dark active:scale-95"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
