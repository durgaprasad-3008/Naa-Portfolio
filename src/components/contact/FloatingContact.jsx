import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { useRef } from "react";

const WhatsAppIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l.349.553-1.001 3.654 3.731-.978zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
  </svg>
);

function DraggableActionButton({
  onClick,
  label,
  children,
  className = "",
  initialDelay = 1,
}) {

  const dragStart = useRef({ x: 0, y: 0 });

  const handlePointerDown = (e) => {
    dragStart.current = { x: e.clientX, y: e.clientY };
  };

  const handleClick = (e) => {

    const dx = Math.abs(e.clientX - dragStart.current.x);
    const dy = Math.abs(e.clientY - dragStart.current.y);

    if (dx > 5 || dy > 5) {
      return;
    }

    onClick();

  };

  return (

    <motion.button
      drag
      dragMomentum={false}
      dragElastic={0.15}
      onPointerDown={handlePointerDown}
      onClick={handleClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        opacity: { duration: 0.6, delay: initialDelay },
        y: { duration: 0.6, delay: initialDelay },
      }}
      aria-label={label}
      className={`
        w-12
        h-12
        md:w-14
        md:h-14
        rounded-full
        text-white
        flex
        items-center
        justify-center
        cursor-grab
        active:cursor-grabbing
        backdrop-blur
        ${className}
      `}
    >

      {children}

    </motion.button>

  );

}

function FloatingContact() {

  const scrollToContact = () => {

    const section = document.getElementById("contact");

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }

  };

  const openWhatsApp = () => {

    const signature = "This message is from Your Portfolio Dude";
    const prefilled = `${signature}\n\n`;
    const url = `https://wa.me/917731878344?text=${encodeURIComponent(prefilled)}`;

    window.open(url, "_blank", "noopener,noreferrer");

  };

  return (

    <motion.div
      className="fixed bottom-6 right-6 z-[60] flex flex-col items-center gap-3"
      animate={{
        boxShadow: "none",
      }}
    >

      <DraggableActionButton
        onClick={openWhatsApp}
        label="Open WhatsApp chat"
        initialDelay={1.1}
        className="bg-[#25D366] border border-[#1ebe57]/60 shadow-[0_0_18px_rgba(37,211,102,0.55)] hover:shadow-[0_0_28px_rgba(37,211,102,0.85)]"
      >

        <WhatsAppIcon width={22} height={22} />

      </DraggableActionButton>

      <DraggableActionButton
        onClick={scrollToContact}
        label="Jump to contact section"
        initialDelay={1}
        className="bg-red-600 border border-red-400/40 shadow-[0_0_18px_rgba(239,68,68,0.55)] hover:shadow-[0_0_28px_rgba(239,68,68,0.85)]"
      >

        <Mail size={20} />

      </DraggableActionButton>

    </motion.div>

  );

}

export default FloatingContact;
