import { motion } from "framer-motion";

function Experience() {
  return (
    <section id="experience" className="scroll-mt-16 relative  overflow-hidden px-6 md:px-12 lg:px-20 py-14">

      {/* BACKGROUND GLOW */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
        }}
        className="absolute top-[-120px] right-[-100px] w-[320px] h-[320px] bg-red-600/20 blur-[180px] rounded-full"
      />

      {/* GRID */}
      <motion.div
        animate={{
          backgroundPosition: ["0px 0px", "120px 120px"],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(to right, red 1px, transparent 1px),
            linear-gradient(to bottom, red 1px, transparent 1px)
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
        >

          <p className="uppercase tracking-[5px] text-red-500 text-[11px] mb-4">

            Experience

          </p>

          <h2 className="text-3xl md:text-4xl font-black leading-tight">

            Work <span className="text-red-600">Experience</span>

          </h2>

        </motion.div>

        {/* EXPERIENCE CARDS */}
        <div className="mt-6 grid gap-4 md:pl-6">

          {/* SHRAS */}
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
            whileHover={{
              y: -5,
              boxShadow: "0px 0px 25px rgb(255, 0, 225)",
            }}
            className="relative border border-red-500/10 bg-white/[0.02] backdrop-blur-xl rounded-2xl p-4 md:p-5 overflow-hidden max-w-5xl"
          >

            {/* GLOW */}
            <div className="absolute top-[-60px] right-[-60px] w-[180px] h-[180px] bg-red-600/10 blur-[90px] rounded-full"></div>

            <div className="relative z-10">

              {/* COMPANY */}
              <h3 className="text-lg md:text-xl font-black text-white">

                Shras <span className="text-red-600">IT</span>

              </h3>

              {/* ROLE */}
              <p className="text-red-500 mt-1.5 text-xs md:text-sm font-medium">

                Full Stack Developer – Shras IT Solutions

              </p>

              {/* DATE */}
              <p className="text-gray-500 text-[11px] mt-1.5">

                May 2024 – Present

              </p>

              {/* DESCRIPTION */}
              <p className="text-gray-400 leading-6 mt-3 text-xs md:text-sm max-w-3xl">

                Joined as a fresher and actively contributing to
                full-stack enterprise applications using modern
                backend and frontend technologies.

              </p>

              {/* TECH STACK */}
              <div className="flex flex-wrap gap-2 mt-4">

                {[
                  "Spring Boot",
                  "Node.js",
                  "React",
                  "PostgreSQL",
                  "Docker",
                  "JWT",
                  "REST APIs",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{
                      scale: 1.05,
                    }}
                    className="px-2.5 py-1 border border-red-600 rounded-full text-white bg-black text-[10px] md:text-[11px]"
                  >

                    {item}

                  </motion.div>
                ))}

              </div>

              {/* POINTS */}
              <div className="mt-4 grid gap-2">

                {[
                  "Designed and optimized database schemas for efficient data isolation and client management.",
                  "Developed secure REST APIs with JWT authentication.",
                  "Dockerized backend and database services for deployment.",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-3 items-start"
                  >

                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-1.5 shadow-[0_0_10px_red]"></div>

                    <p className="text-gray-300 text-[11px] md:text-xs leading-5">

                      {item}

                    </p>

                  </div>
                ))}

              </div>

            </div>

          </motion.div>

          {/* DIGIT */}
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
            whileHover={{
              y: -5,
              boxShadow: "0px 0px 25px rgb(38, 0, 255)",
            }}
            className="relative border border-red-500/10 bg-white/[0.02] backdrop-blur-xl rounded-2xl p-4 md:p-5 overflow-hidden max-w-5xl"
          >

            {/* GLOW */}
            <div className="absolute bottom-[-60px] left-[-60px] w-[180px] h-[180px] bg-pink-600/10 blur-[90px] rounded-full"></div>

            <div className="relative z-10">

              {/* COMPANY */}
              <h3 className="text-lg md:text-xl font-black text-white">

                Digit <span className="text-red-600">Institute</span>

              </h3>

              {/* ROLE */}
              <p className="text-red-500 mt-1.5 text-xs md:text-sm font-medium">

                Web Development Intern – Digit Institute

              </p>

              {/* DATE */}
              <p className="text-gray-500 text-[11px] mt-1.5">

                November 2023 – March 2024

              </p>

              {/* DESCRIPTION */}
              <p className="text-gray-400 leading-6 mt-3 text-xs md:text-sm max-w-3xl">

                Built dynamic and responsive web pages while
                strengthening frontend fundamentals and UI design
                principles.

              </p>

              {/* TECH STACK */}
              <div className="flex flex-wrap gap-2 mt-4">

                {[
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "Responsive Design",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{
                      scale: 1.05,
                    }}
                    className="px-2.5 py-1 border border-red-600 rounded-full text-white bg-black text-[10px] md:text-[11px]"
                  >

                    {item}

                  </motion.div>
                ))}

              </div>

              {/* POINTS */}
              <div className="mt-4 grid gap-2">

                {[
                  "Developed dynamic web pages with interactive UI components.",
                  "Improved mobile responsiveness and user experience.",
                  "Gained hands-on experience in real-world project workflow.",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-3 items-start"
                  >

                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-1.5 shadow-[0_0_10px_red]"></div>

                    <p className="text-gray-300 text-[11px] md:text-xs leading-5">

                      {item}

                    </p>

                  </div>
                ))}

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default Experience;