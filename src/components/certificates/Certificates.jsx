import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import cert1 from "./Crtfcte_Ptos/1.png";
import cert2 from "./Crtfcte_Ptos/2.png";
import cert3 from "./Crtfcte_Ptos/3.png";
import cert4 from "./Crtfcte_Ptos/4.png";
import cert5 from "./Crtfcte_Ptos/5.png";
import cert6 from "./Crtfcte_Ptos/6.png";
import cert7 from "./Crtfcte_Ptos/7.png";
import cert8 from "./Crtfcte_Ptos/8.png";
import cert9 from "./Crtfcte_Ptos/9.png";
import cert10 from "./Crtfcte_Ptos/10.png";
import cert11 from "./Crtfcte_Ptos/11.png";

const certificates = [
  cert1,
  cert2,
  cert3,
  cert4,
  cert5,
  cert6,
  cert7,
  cert8,
  cert9,
  cert10,
  cert11,
];

function Certificates() {

  const [current, setCurrent] = useState(0);

  const [paused, setPaused] = useState(false);

  const [zoomedIndex, setZoomedIndex] = useState(null);

  const resumeTimerRef = useRef(null);

  const scheduleResume = () => {

    if (resumeTimerRef.current) {
      clearTimeout(resumeTimerRef.current);
    }

    resumeTimerRef.current = setTimeout(() => {

      setZoomedIndex(null);

      setPaused(false);

    }, 15000);

  };

  const closeZoom = () => {

    if (resumeTimerRef.current) {
      clearTimeout(resumeTimerRef.current);
      resumeTimerRef.current = null;
    }

    setZoomedIndex(null);

    setPaused(false);

  };

  const handleImageClick = (index) => {

    setZoomedIndex(index);

    setPaused(true);

    scheduleResume();

  };

  const nextSlide = () => {

    setCurrent((prev) =>
      prev + 2 >= certificates.length ? 0 : prev + 2
    );

  };

  const prevSlide = () => {

    setCurrent((prev) => {
      if (prev === 0) {
        const lastPair = certificates.length % 2 === 0
          ? certificates.length - 2
          : certificates.length - 1;
        return lastPair;
      }
      return prev - 2;
    });

  };

  const handleManualNext = () => {

    setPaused(true);

    if (zoomedIndex !== null) {

      setZoomedIndex((prev) =>
        prev + 1 >= certificates.length ? 0 : prev + 1
      );

      scheduleResume();

      return;

    }

    nextSlide();

    scheduleResume();

  };

  const handleManualPrev = () => {

    setPaused(true);

    if (zoomedIndex !== null) {

      setZoomedIndex((prev) =>
        prev - 1 < 0 ? certificates.length - 1 : prev - 1
      );

      scheduleResume();

      return;

    }

    prevSlide();

    scheduleResume();

  };

  useEffect(() => {

    if (paused) return;

    const interval = setInterval(() => {

      nextSlide();

    }, 4000);

    return () => clearInterval(interval);

  }, [paused]);

  return (

    <section id="certifications" className="scroll-mt-16 relative py-14 px-6 md:px-12 lg:px-20 overflow-hidden"
>

      {/* BACKGROUND GLOW 1 */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
        }}
        className="absolute top-[-150px] left-[-100px] w-[350px] h-[350px] bg-red-600/20 blur-[180px] rounded-full"
      />

      {/* BACKGROUND GLOW 2 */}
      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
        }}
        className="absolute bottom-[-150px] right-[-100px] w-[320px] h-[320px] bg-blue-600/20 blur-[180px] rounded-full"
      />

      {/* MOVING GRID */}
      <motion.div
        animate={{
          backgroundPosition: ["0px 0px", "120px 120px"],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "90px 90px",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* TITLE */}
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{ once: true }}
          className={zoomedIndex !== null ? "hidden" : "mb-8"}
        >

          <p className="uppercase tracking-[5px] text-red-500 text-[11px] mb-4">

            Certifications

          </p>

          <h2 className="text-2xl md:text-4xl font-black leading-none">

            Professional <span className="text-red-600">Credentials</span>

          </h2>

        </motion.div>

        {/* SLIDER */}
        <div className={`relative md:pl-6 flex flex-col justify-start ${zoomedIndex !== null ? "min-h-[460px]" : ""}`}>

          {/* LEFT BUTTON */}
          <button
            onClick={handleManualPrev}
            className="absolute left-[-15px] top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/60 border border-red-500/20 flex items-center justify-center hover:bg-red-600 transition"
          >

            <ChevronLeft size={18} />

          </button>

          {/* RIGHT BUTTON */}
          <button
            onClick={handleManualNext}
            className="absolute right-[-15px] top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/60 border border-red-500/20 flex items-center justify-center hover:bg-red-600 transition"
          >

            <ChevronRight size={18} />

          </button>

          {/* CERTIFICATE CARDS */}
          {zoomedIndex !== null ? (

            <motion.div
              key={`zoom-${zoomedIndex}`}
              initial={{
                opacity: 0,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.5,
              }}
              className="flex justify-center"
            >

              <div
                onClick={closeZoom}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-3 w-full max-w-3xl cursor-zoom-out"
              >

                <img
                  src={certificates[zoomedIndex]}
                  alt={`Certificate ${zoomedIndex + 1}`}
                  className="w-full h-[420px] object-contain rounded-xl"
                />

              </div>

            </motion.div>

          ) : (

            <motion.div
              key={current}
              initial={{
                opacity: 0,
                x: 100,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              className="grid md:grid-cols-2 gap-6 px-10 md:px-16"
            >

              {certificates
                .slice(current, current + 2)
                .map((item, index) => (

                  <motion.div
                    key={index}
                    onClick={() => handleImageClick(current + index)}
                    whileHover={{
                      y: -8,
                      scale: 1.02,
                      boxShadow:
                        "0px 0px 35px rgba(59,130,246,0.35), 0px 0px 70px rgba(59,130,246,0.15)",
                    }}
                    className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-2.5 transition duration-500 cursor-zoom-in"
                  >

                    <img
                      src={item}
                      alt={`Certificate ${current + index + 1}`}
                      className="w-full h-[270px] object-contain rounded-xl"
                    />

                  </motion.div>

                ))}

            </motion.div>

          )}

        </div>

      </div>

    </section>

  );

}

export default Certificates;