import { motion } from "framer-motion";
import { Download } from "lucide-react";

function About() {
  return (
<section className="relative  overflow-hidden px-4 md:px-10 lg:px-16 xl:px-20 py-10">
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
        className="absolute bottom-[-150px] right-[-100px] w-[320px] h-[320px] bg-pink-600/20 blur-[180px] rounded-full"
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
            linear-gradient(to right, red 1px, transparent 1px),
            linear-gradient(to bottom, red 1px, transparent 1px)
          `,
          backgroundSize: "90px 90px",
        }}
      />

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto relative z-10 grid md:grid-cols-2 gap-14 items-start">

        {/* LEFT SIDE */}
        <motion.div
          initial={{
            opacity: 0,
            x: -100,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
          }}
          viewport={{ once: true }}
        >

          {/* TITLE */}
          <p className="uppercase tracking-[5px] text-red-500 text-[11px] mb-4">

            About Me

          </p>

          {/* HEADING */}
          <h2 className="text-3xl md:text-4xl font-black leading-tight mb-6">

            Who I <span className="text-red-600">Am</span>

          </h2>

          {/* DESCRIPTION */}
          <p className="text-gray-400 leading-8 text-sm md:text-base max-w-xl">

            Full Stack Engineer with expertise in Java enterprise
            applications, MERN stack development, and enterprise
            integration platforms. Passionate about building
            high-performance systems that seamlessly connect
            business workflows with cutting-edge technology.
            Specialized in Archibus IWMS solutions, middleware
            platforms, and scalable microservices architecture.

          </p>

          {/* SKILLS */}
          <div className="flex flex-wrap gap-3 mt-8">

            {[
              "Java Full Stack Developer",
              "Archibus Developer",
              "MERN Stack Developer",
              "Integration Engineer",
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.04,
                  boxShadow: "0px 0px 15px rgba(10, 199, 224, 0.3)",
                }}
                className="px-4 py-2 border border-red-600 rounded-full text-red bg-cyan-500/5 backdrop-blur-lg text-xs md:text-sm"
              >

                {item}

              </motion.div>
            ))}

          </div>

          {/* BUTTON */}
          <motion.button
            whileHover={{
              scale: 1.03,
            }}
            className="mt-10 border border-red-600 bg-red-600 hover:bg-red-700 transition px-7 py-3 rounded-xl font-medium flex items-center gap-3 shadow-[0_0_20px_rgba(255,0,0,0.4)] text-sm"
          >

            OPEN DARK RESUME

            <Download size={16} />

          </motion.button>

        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{
            opacity: 0,
            x: 100,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
          }}
          viewport={{ once: true }}
          className="relative pt-10 md:pt-12"
        >

          {/* GLASS CARD */}
          <motion.div
            whileHover={{
              y: -5,
              boxShadow: "0px 0px 25px rgba(255,0,0,0.1)",
            }}
            className="border border-red-500/10 bg-white/[0.02] backdrop-blur-xl rounded-2xl p-5 relative overflow-hidden"
          >

            {/* INNER GLOW */}
            <div className="absolute top-[-80px] right-[-80px] w-[160px] h-[160px] bg-red-600/10 blur-[90px] rounded-full"></div>

            {/* TITLE */}
            <h3 className="text-lg md:text-xl font-black mb-5 relative z-10">

              CORE <span className="text-red-600">STRENGTHS</span>

            </h3>

            {/* STRENGTH LIST */}
            <div className="grid grid-cols-1 gap-3 relative z-10">

              {[
                "Client-focused delivery",
                "Passionate problem solver",
                "Continuous learner",
                "Modern UI/UX development",
                "Performance optimization",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    x: 5,
                  }}
                  className="flex items-center gap-3 border border-red-500/10 rounded-xl px-4 py-2.5 bg-black/40 hover:bg-red-500/5 transition duration-300"
                >

                  {/* DOT */}
                  <div className="w-2 h-2 bg-red-500 rounded-full shadow-[0_0_10px_red]"></div>

                  {/* TEXT */}
                  <p className="text-gray-300 text-xs md:text-sm">

                    {item}

                  </p>

                </motion.div>
              ))}

            </div>

          </motion.div>

        </motion.div>

      </div>

    </section>
  );
}

export default About;