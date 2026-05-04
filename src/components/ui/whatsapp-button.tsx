import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/site";

const WhatsAppButton = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 active:scale-95"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="h-8 w-8 fill-current" />
    </a>
  );
};

export default WhatsAppButton;