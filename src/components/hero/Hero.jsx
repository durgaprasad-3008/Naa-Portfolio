import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import ParticlesBackground from "./ParticlesBackground";

function Hero() {
  return (
    <section  id="home" className="scroll-mt-16 relative min-h-screen  overflow-hidden px-4 md:px-10 lg:px-16 xl:px-20">

      {/* PARTICLES */}
      <ParticlesBackground />

      {/* BACKGROUND GLOW */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className="absolute top-[-150px] right-[-100px] w-[420px] h-[420px] bg-red-600 opacity-20 blur-[180px] rounded-full"
      />

      {/* SECOND GLOW */}
      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
        }}
        className="absolute bottom-[-180px] left-[-100px] w-[350px] h-[350px] bg-pink-600 opacity-15 blur-[180px] rounded-full"
      />

      {/* MOVING GRID */}
      <motion.div
        animate={{
          backgroundPosition: ["0px 0px", "100px 100px"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(to right, red 1px, transparent 1px),
            linear-gradient(to bottom, red 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* ROTATING CIRCLE */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute right-[14%] top-[24%] w-[240px] h-[240px] border border-red-500/10 rounded-full"
      />

      {/* SECOND ROTATING CIRCLE */}
      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute right-[17%] top-[27%] w-[190px] h-[190px] border border-red-500/10 rounded-full"
      />

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto min-h-screen grid md:grid-cols-2 items-center gap-10 relative z-10 pt-20">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{
            opacity: 0,
            x: -120,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1.1,
          }}
        >

          {/* SMALL TEXT */}
          <p className="uppercase tracking-[6px] text-red-500 text-[11px] mb-5">

            Welcome To My Portfolio

          </p>

          {/* MAIN TITLE */}
          <style>
            {`
              @keyframes nameShine {
                0% { background-position: 200% center; }
                100% { background-position: -200% center; }
              }

              .name-shine {
                background: linear-gradient(
                  90deg,
                  #ffffff 0%,
                  #ffffff 38%,
                  #ff4d4d 50%,
                  #ffffff 62%,
                  #ffffff 100%
                );
                background-size: 200% auto;
                -webkit-background-clip: text;
                background-clip: text;
                -webkit-text-fill-color: transparent;
                animation: nameShine 3.5s linear infinite;
              }

              .name-shine-red {
                background: linear-gradient(
                  90deg,
                  #dc2626 0%,
                  #dc2626 38%,
                  #ffffff 50%,
                  #dc2626 62%,
                  #dc2626 100%
                );
                background-size: 200% auto;
                -webkit-background-clip: text;
                background-clip: text;
                -webkit-text-fill-color: transparent;
                animation: nameShine 3.5s linear infinite;
              }

              @keyframes glassFlow {
                0%, 100% { background-position: 0% center; }
                50% { background-position: 100% center; }
              }

              .glass-text {
                background: linear-gradient(
                  90deg,
                  #67e8f9 0%,
                  #a5f3fc 25%,
                  #ffffff 50%,
                  #c4b5fd 75%,
                  #67e8f9 100%
                );
                background-size: 200% auto;
                -webkit-background-clip: text;
                background-clip: text;
                -webkit-text-fill-color: transparent;
                animation: glassFlow 5s ease-in-out infinite;
                filter: drop-shadow(0 0 12px rgba(103, 232, 249, 0.45))
                        drop-shadow(0 0 24px rgba(196, 181, 253, 0.25));
              }
            `}
          </style>

          <h1 className="text-4xl md:text-6xl font-black leading-none md:pl-6">

            <span className="name-shine">DURGA</span>

            <br />

            <span className="name-shine-red">
              PRASAD
            </span>

          </h1>

          {/* TYPING TEXT */}
          <div className="mt-5 text-lg md:text-2xl font-bold h-[40px] md:pl-6 glass-text">

            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "ARCHIBUS Developer",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />

          </div>

          {/* DESCRIPTION */}
          <p className="mt-6 text-gray-400 leading-8 text-sm md:text-base max-w-xl md:pl-6">

            Java Full Stack Developer and Archibus Developer passionate about creating scalable, 
            user-friendly web applications and workplace management solutions with modern technologies.

          </p>

          {/* BUTTONS */}
          <div className="flex gap-4 mt-8 flex-wrap md:pl-6">

            <a
              href="#projects"
              className="inline-block bg-red-600 px-6 py-3 rounded-xl text-sm font-medium hover:scale-105 transition duration-300 shadow-[0_0_25px_rgba(255,0,0,0.4)]"
            >

              Explore Projects

            </a>

            <a
              href="#contact"
              className="inline-block border border-red-600 px-6 py-3 rounded-xl text-sm hover:bg-red-600 transition duration-300"
            >

              Contact Me

            </a>

          </div>

        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{
            opacity: 0,
            x: 120,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1.1,
          }}
          className="relative flex justify-center md:justify-end md:mr-12 lg:mr-20 mt-14 md:mt-0"
        >

          {/* IMAGE GLOW */}
          <motion.div
            animate={{
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="absolute w-[320px] h-[320px] bg-red-600 opacity-20 blur-[120px] rounded-full"
          />

          {/* FLOATING IMAGE */}
          <motion.img
            animate={{
              y: [0, -18, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            src={`${import.meta.env.BASE_URL}images/dd.png`}
            alt="Durga Prasad"
            style={{ borderRadius: "10% 10% 10% 10% / 21% 10% 27% 10%" }}
            className="relative w-[300px] md:w-[400px] object-cover border-2 border-purple-500/80 shadow-[0_0_45px_rgba(168,85,247,0.45)] drop-shadow-[0_0_35px_rgba(255,0,0,0.35)]"
          />

        </motion.div>

      </div>

      {/* SCROLL INDICATOR */}
      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >


      </motion.div>

    </section>
  );
}

export default Hero;