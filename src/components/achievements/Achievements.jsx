import { motion } from "framer-motion";

const achievements = [
  {
    title: "First Live Demo Website",
    company: "Digit Institute",
    description:
      "Developed my first demo website during my training period and successfully made it live for real-world usage. This achievement gave me practical exposure to frontend development, deployment workflows, and project delivery.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1400&auto=format&fit=crop",
  },

  {
    title: "Saudi Arabia Onsite Opportunity",
    company: "Shras IT Solutions",
    description:
      "Received an onsite opportunity to Saudi Arabia through Shras IT Solutions and worked directly with international clients in enterprise-level environments.",
    image:
      "https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?q=80&w=1400&auto=format&fit=crop",
  },

  {
    title: "KFUPM Dammam Project",
    company: "King Fahd University",
    description:
      "Worked on enterprise solutions and support activities for KFUPM Dammam, one of the most prestigious universities in Saudi Arabia.",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1400&auto=format&fit=crop",
  },

  {
    title: "ISDB Jeddah Project",
    company: "Islamic Development Bank",
    description:
      "Currently contributing to enterprise project implementations and support activities for ISDB Jeddah through Shras IT Solutions.",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1400&auto=format&fit=crop",
  },
];

function Achievements() {
  return (
    <section
      id="achievements"
      className="scroll-mt-16 relative py-14 px-6 md:px-12 lg:px-20 overflow-hidden"
    >

      {/* BACKGROUND GLOW */}

      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, 60, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
        }}
        className="absolute top-[-150px] left-[-100px] w-[350px] h-[350px] bg-red-600/20 blur-[180px] rounded-full"
      />

      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
        }}
        className="absolute bottom-[-120px] right-[-80px] w-[320px] h-[320px] bg-blue-600/20 blur-[180px] rounded-full"
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
          className="mb-8"
        >

          <p className="uppercase tracking-[5px] text-red-500 text-[11px] mb-4">

            Achievements

          </p>

          <h2 className="text-3xl md:text-4xl font-black leading-tight text-white">

            Career <span className="text-red-600">Highlights</span>

          </h2>

        </motion.div>

        {/* CARDS */}

        <div className="grid md:grid-cols-2 gap-8 md:pl-6">

          {achievements.map((item, index) => (

            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.02,
                boxShadow:
                  "0px 0px 35px rgba(239,68,68,0.25)",
              }}
              className="
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
              "
            >

              {/* IMAGE */}

              <div className="overflow-hidden">

                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    w-full
                    h-[260px]
                    object-cover
                    hover:scale-110
                    transition
                    duration-700
                  "
                />

              </div>

              {/* CONTENT */}

              <div className="p-7">

                <p className="text-red-500 text-sm mb-2 tracking-wide uppercase">

                  {item.company}

                </p>

                <h3 className="text-2xl font-bold text-white mb-4 leading-snug">

                  {item.title}

                </h3>

                <p className="text-gray-400 leading-8 text-[15px]">

                  {item.description}

                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Achievements;