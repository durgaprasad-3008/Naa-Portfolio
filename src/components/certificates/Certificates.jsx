import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const certificates = [
  "/certificates/c1.jpg",
  "/certificates/c2.jpg",
  "/certificates/c3.jpg",
  "/certificates/c4.jpg",
  "/certificates/c5.jpg",
  "/certificates/c6.jpg",
  "/certificates/c7.jpg",
  "/certificates/c8.jpg",
];

function FallingLeaves() {

  const leaves = [
    "https://www.pngmart.com/files/1/Fall-Autumn-Leaves-Transparent-PNG.png",
    "https://www.pngmart.com/files/1/Autumn-Fall-Leaves-Pictures-Collage-PNG.png",
    "https://www.pngmart.com/files/1/Autumn-Fall-Leaves-Clip-Art-PNG.png",
    "https://www.pngmart.com/files/1/Green-Leaves-PNG-File.png",
    "https://www.pngmart.com/files/1/Transparent-Autumn-Leaves-Falling-PNG.png",
    "https://www.pngmart.com/files/1/Realistic-Autumn-Fall-Leaves-PNG.png",
  ];

  return (

    <>

      <style>

        {`

          .leaf-animation {

            position: absolute;
            top: -10%;
            animation-name: fall;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
            pointer-events: none;

          }

          @keyframes fall {

            0% {
              transform: translateY(-10vh) translateX(0px) rotate(0deg);
              opacity: 0;
            }

            10% {
              opacity: 1;
            }

            25% {
              transform: translateY(25vh) translateX(20px) rotate(90deg);
            }

            50% {
              transform: translateY(50vh) translateX(-20px) rotate(180deg);
            }

            75% {
              transform: translateY(75vh) translateX(20px) rotate(270deg);
            }

            100% {
              transform: translateY(120vh) translateX(-20px) rotate(360deg);
              opacity: 0;
            }

          }

        `}

      </style>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {[...Array(18)].map((_, index) => (

          <img
            key={index}
            src={leaves[index % leaves.length]}
            alt=""
            className="leaf-animation"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${35 + Math.random() * 25}px`,
              height: `${35 + Math.random() * 25}px`,
              animationDuration: `${10 + Math.random() * 10}s`,
              animationDelay: `${Math.random() * 8}s`,
              opacity: 0.7,
            }}
          />

        ))}

      </div>

    </>

  );

}

function Certificates() {

  const [current, setCurrent] = useState(0);

  const [paused, setPaused] = useState(false);

  const nextSlide = () => {

    setCurrent((prev) =>
      prev + 2 >= certificates.length ? 0 : prev + 2
    );

  };

  const prevSlide = () => {

    setCurrent((prev) =>
      prev - 2 < 0 ? certificates.length - 2 : prev - 2
    );

  };

  const handleManualNext = () => {

    setPaused(true);

    nextSlide();

    setTimeout(() => {

      setPaused(false);

    }, 15000);

  };

  const handleManualPrev = () => {

    setPaused(true);

    prevSlide();

    setTimeout(() => {

      setPaused(false);

    }, 15000);

  };

  useEffect(() => {

    if (paused) return;

    const interval = setInterval(() => {

      nextSlide();

    }, 4000);

    return () => clearInterval(interval);

  }, [paused]);

  return (

    <section className="relative py-20 bg-black overflow-hidden">

      {/* FALLING LEAVES */}
      <FallingLeaves />

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

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">

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
          className="mb-12"
        >

          <p className="uppercase tracking-[5px] text-red-500 text-[11px] mb-4">

            Certifications

          </p>

          <h2 className="text-2xl md:text-4xl font-black leading-none">

            Professional <span className="text-red-600">Credentials</span>

          </h2>

        </motion.div>

        {/* SLIDER */}
        <div className="relative">

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
            className="grid md:grid-cols-2 gap-6"
          >

            {certificates
              .slice(current, current + 2)
              .map((item, index) => (

                <motion.div
                  key={index}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                    boxShadow:
                      "0px 0px 35px rgba(59,130,246,0.35), 0px 0px 70px rgba(59,130,246,0.15)",
                  }}
                  className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-3 transition duration-500"
                >

                  <img
                    src={item}
                    alt=""
                    className="w-full h-[260px] object-cover rounded-xl"
                  />

                </motion.div>

              ))}

          </motion.div>

        </div>

      </div>

    </section>

  );

}

export default Certificates;