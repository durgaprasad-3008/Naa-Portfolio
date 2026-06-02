import { motion } from "framer-motion";

const projects = [
  {
    title: "Digit Institute — Instructor Portal",
    company: "Internship Project",
    period: "2024",
    logo: "images/Digitlogo.png",
    description:
      "Recruitment landing page for onboarding instructors with modal-based application form, responsive banner sections, and \"Why teach with us\" engagement modules.",
    tech: [
      "HTML5",
      "CSS3",
      "Bootstrap 4.6",
      "jQuery",
      "JavaScript",
    ],
  },

  {
    title: "DpTech Institute — IT Training Platform",
    company: "Personal Project (Own Platform)",
    period: "2025",
    description:
      "Full-stack IT training portal empowering future professionals with course listings, student registration, login authentication, and admin dashboard.",
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "Supabase",
      "React Router",
    ],
  },

  {
    title: "Interior Works & Exterior Design",
    company: "Personal Project",
    period: "2025",
    description:
      "Responsive interior & exterior design showcase website featuring service galleries, work process flow, and client testimonials with WhatsApp integration.",
    tech: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Lucide Icons",
      "Font Awesome",
    ],
  },

  {
    title: "Labor Job Finder App",
    company: "Personal Project (currently in development stage)",
    period: "2025",
    description:
      "Modern web application helping daily wage workers find nearby jobs with real-time location and role management.",
    tech: [
      "React",
      "Spring Boot",
      "MySQL",
      "Tailwind",
    ],
  },

  {
    title: "KFUPM - Facility Management System",
    company: "King Fahd University of Petroleum & Minerals — Dhahran, Saudi Arabia",
    period: "2025-2026 (Present)",
    logo: "images/kfupm.png",
    description:
      "Enterprise IWMS implementation for one of Saudi Arabia's most prestigious universities, managing campus-wide office and housing space, assets, and maintenance operations with CAD-integrated floor plans and SLA-driven workflows.",
    tech: [
      "ARCHIBUS",
      "Java",
      "JSP",
      "Oracle",
      "SQL Server",
      "AutoCAD",
      "BIM",
      "REST APIs",
      "Smart Client",
      "Space Management",
      "Asset Management",
      "Maintenance Management",
      "Move Management",
      "Service Desk",
    ],
  },

  {
    title: "ISDB - Workplace Management Platform",
    company: "Islamic Development Bank — Jeddah, Saudi Arabia",
    period: "2025-2026 (Present)",
    logo: "images/Isdb.png",
    description:
      "End-to-end IWMS deployment for the Islamic Development Bank covering space, asset, maintenance, move management, and service desk operations with workflow automation and SLA enforcement.",
    tech: [
      "ARCHIBUS",
      "Java",
      "JSP",
      "SQL Server",
      "AutoCAD",
      "REST APIs",
      "Workflow Rules",
      "Smart Client",
      "Space Management",
      "Asset Management",
      "Maintenance Management",
      "Move Management",
      "Service Desk",
    ],
  },

  {
    title: "Fieldo — Ticket Management System (locally using and ready for client usage)",
    company: "Full-Stack Enterprise Application",
    period: "2025 - 2026",
    description:
      "End-to-end ticket management platform with role-based access control, technician dispatch, inventory tracking, real-time notifications, and admin analytics dashboard for streamlined service operations.",
    tech: [
      "React 18",
      "TypeScript",
      "Vite",
      "Redux Toolkit",
      "React Hook Form",
      "AG Grid",
      "Recharts",
      "Tailwind CSS",
      "Axios",
      "NestJS",
      "Node.js",
      "PostgreSQL",
      "Sequelize",
      "RabbitMQ",
      "AWS SES",
      "Handlebars",
      "Swagger",
      "JWT",
      "Multi-JWT",
      "Passport.js",
      "bcrypt",
      "RBAC",
    ],
  },
];

function Projects() {

  return (

    <section id="projects" className="scroll-mt-16 relative overflow-hidden py-14 px-6 md:px-12 lg:px-20">

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

                  {/* HEADER */}

                  <div className="flex items-start gap-4 relative z-10 mb-5">

                    {project.logo && (
                      <img
                        src={`${import.meta.env.BASE_URL}${project.logo}`}
                        alt={`${project.title} logo`}
                        className="w-14 h-14 sm:w-16 sm:h-16 object-contain shrink-0"
                      />
                    )}

                    <div className="min-w-0 flex-1">

                      <h3 className="text-xl md:text-2xl font-bold">

                        {project.title}

                      </h3>

                      <p className="text-gray-400 text-sm mt-2">

                        {project.company}

                      </p>

                      <p className="text-red-500 text-xs tracking-[3px] uppercase mt-2">

                        {project.period}

                      </p>

                    </div>

                  </div>

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