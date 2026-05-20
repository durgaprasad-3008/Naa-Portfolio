import { motion } from "framer-motion";

const projects = [
  {
    title: "Shras Middleware Platform",
    company: "Shras IT Solutions",
    period: "2025 - Present",
    description:
      "Enterprise middleware platform integrating ARCHIBUS and IBM Maximo for technician dispatch and workflow automation.",
    tech: [
      "Java",
      "Spring Boot",
      "React",
      "Node.js",
      "PostgreSQL",
    ],
  },

  {
    title: "TMS Support System",
    company: "Shras IT Solutions",
    period: "2025",
    description:
      "Ticket management and support tracking platform with role-based dashboards and secure JWT authentication.",
    tech: [
      "React",
      "Node.js",
      "JWT",
      "REST APIs",
      "Docker",
    ],
  },

  {
    title: "Labor Job Finder App",
    company: "Personal Project",
    period: "2024",
    description:
      "Modern web application helping daily wage workers find nearby jobs with real-time location and role management.",
    tech: [
      "React",
      "Spring Boot",
      "MySQL",
      "Tailwind",
    ],
  },
];

function Projects() {

  return (

    <section className="relative overflow-hidden py-20 px-6 md:px-12 lg:px-20">

      {/* BACKGROUND GLOW */}

      <motion.div
        animate={{
          x: [0, 120, 0],
          y: [0, 60, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
        }}
        className="absolute top-[-150px] right-[-100px] w-[350px] h-[350px] bg-red-600/20 blur-[180px] rounded-full"
      />

      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
        }}
        className="absolute bottom-[-120px] left-[-100px] w-[320px] h-[320px] bg-pink-600/20 blur-[180px] rounded-full"
      />

      {/* MOVING GRID */}

      <motion.div
        animate={{
          backgroundPosition: [
            "0px 0px",
            "120px 120px",
          ],
        }}
        transition={{
          duration: 22,
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

      {/* CONTENT */}

      <div className="max-w-6xl mx-auto relative z-10">

        {/* TITLE */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{ once: true }}
          className="mb-16"
        >

          <p className="uppercase tracking-[5px] text-red-500 text-[11px] mb-4">

            Projects

          </p>

          <h2 className="text-3xl md:text-4xl font-black leading-tight">

            Featured <span className="text-red-600">Projects</span>

          </h2>

        </motion.div>

        {/* TIMELINE */}

        <div className="relative">

          {/* CENTER LINE */}

          <div className="absolute left-[14px] top-0 w-[2px] h-full bg-gradient-to-b from-red-600/80 via-red-500/40 to-transparent"></div>

          {/* PROJECTS */}

          <div className="flex flex-col gap-12">

            {projects.map((project, index) => (

              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: -80,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                }}
                viewport={{ once: true }}
                className="relative pl-14"
              >

                {/* TIMELINE DOT */}

                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    boxShadow: [
                      "0px 0px 0px rgb(255, 0, 0)",
                      "0px 0px 20px rgba(60, 0, 255, 0.8)",
                      "0px 0px 0px rgba(255,0,0,0.3)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                  className="
                    absolute
                    left-0
                    top-5
                    w-7
                    h-7
                    rounded-full
                    bg-red-600
                    border-4
                    border-black
                    z-20
                  "
                />

                {/* PROJECT CARD */}

                <motion.div
                  whileHover={{
                    y: -6,
                    scale: 1.01,
                  }}
                  className="
                    relative
                    overflow-hidden
                    border
                    border-red-500/10
                    bg-white/[0.03]
                    backdrop-blur-2xl
                    rounded-2xl
                    p-6
                    transition-all
                    duration-500
                    group
                  "
                >

                  {/* CARD GLOW */}

                  <div className="absolute top-[-60px] right-[-60px] w-[180px] h-[180px] bg-red-600/10 blur-[90px] rounded-full opacity-0 group-hover:opacity-100 transition duration-500"></div>

                  {/* SHINE EFFECT */}

                  <div
                    className="
                      absolute
                      top-0
                      left-[-120%]
                      w-[120%]
                      h-full
                      bg-gradient-to-r
                      from-transparent
                      via-white/10
                      to-transparent
                      rotate-12
                      group-hover:left-[120%]
                      transition-all
                      duration-1000
                    "
                  />

                  {/* PERIOD */}

                  <p className="text-red-500 text-xs tracking-[3px] uppercase mb-3 relative z-10">

                    {project.period}

                  </p>

                  {/* TITLE */}

                  <h3 className="text-xl md:text-2xl font-bold mb-2 relative z-10">

                    {project.title}

                  </h3>

                  {/* COMPANY */}

                  <p className="text-gray-400 text-sm mb-5 relative z-10">

                    {project.company}

                  </p>

                  {/* DESCRIPTION */}

                  <p className="text-gray-400 leading-7 text-sm md:text-base relative z-10">

                    {project.description}

                  </p>

                  {/* TECH TAGS */}

                  <div className="flex flex-wrap gap-3 mt-6 relative z-10">

                    {project.tech.map((item, i) => (

                      <div
                        key={i}
                        className="
                          px-3
                          py-1.5
                          rounded-full
                          border
                          border-red-700
                          bg-red-black
                          text-white
                          text-xs
                        "
                      >

                        {item}

                      </div>

                    ))}

                  </div>

                </motion.div>

              </motion.div>

            ))}

          </div>

        </div>

      </div>

    </section>

  );
}

export default Projects;