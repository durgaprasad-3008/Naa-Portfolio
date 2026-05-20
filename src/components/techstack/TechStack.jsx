import { motion } from "framer-motion";
import LeavesBackground from "../effects/LeavesBackground";

const techs = [
  "Java",
  "Spring Boot",
  "React",
  "Node.js",
  "PostgreSQL",
  "MySQL",
  "Docker",
  "Git",
  "JavaScript",
  "HTML",
  "CSS",
  "JWT",
  "REST APIs",
  "AWS",
  "CI/CD",
  "Tailwind CSS",
];

function TechStack() {
  return (
    <>
      {/* INTERNAL CSS */}

      <style>
        {`
          .tech-section {
            background: #000000;
            min-height: 100vh;
          }

          .night {
            position: absolute;
            inset: 0;
            transform: rotateZ(45deg);
            z-index: 0;
            pointer-events: none;
          }

          .shooting_star {
            position: absolute;
            height: 2px;
            width: 0;
            background: linear-gradient(
              -45deg,
              rgba(95, 145, 255, 1),
              rgba(0, 0, 255, 0)
            );
            border-radius: 999px;
            filter: drop-shadow(0 0 6px rgba(105, 155, 255, 1));

            animation:
              tail 3s ease-in-out infinite,
              shooting 3s ease-in-out infinite;
          }

          .shooting_star::before,
          .shooting_star::after {
            content: "";
            position: absolute;
            top: calc(50% - 1px);
            right: 0;
            height: 2px;
            width: 0;
            border-radius: 100%;
            background: linear-gradient(
              -45deg,
              rgba(0, 0, 255, 0),
              rgba(95, 145, 255, 1),
              rgba(0, 0, 255, 0)
            );

            animation: shining 3s ease-in-out infinite;
          }

          .shooting_star::before {
            transform: translateX(50%) rotateZ(45deg);
          }

          .shooting_star::after {
            transform: translateX(50%) rotateZ(-45deg);
          }

          @keyframes tail {
            0% {
              width: 0;
            }

            30% {
              width: 100px;
            }

            100% {
              width: 0;
            }
          }

          @keyframes shining {
            0% {
              width: 0;
            }

            50% {
              width: 30px;
            }

            100% {
              width: 0;
            }
          }

          @keyframes shooting {
            0% {
              transform: translateX(0);
            }

            100% {
              transform: translateX(300px);
            }
          }
        `}
      </style>

      <section className="tech-section relative overflow-hidden py-20 px-6 md:px-14 lg:px-24">

        {/* FALLING LEAVES */}
        <LeavesBackground />

        {/* SHOOTING STARS */}

        <div className="night">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="shooting_star"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        {/* BACKGROUND GLOW 1 */}

        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 60, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
          }}
          className="absolute top-[-150px] left-[-100px] w-[350px] h-[350px] bg-red-600/20 blur-[180px] rounded-full"
        />

        {/* BACKGROUND GLOW 2 */}

        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
          }}
          className="absolute bottom-[-120px] right-[-80px] w-[300px] h-[300px] bg-pink-600/20 blur-[180px] rounded-full"
        />

        {/* MOVING GRID */}

        <motion.div
          animate={{
            backgroundPosition: ["0px 0px", "120px 120px"],
          }}
          transition={{
            duration: 20,
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

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/60 z-[1]" />

        {/* MAIN CONTENT */}

        <div className="max-w-[1200px] mx-auto relative z-10">

          {/* TOP TITLE */}

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
            className="mb-14"
          >
            <p className="uppercase tracking-[5px] text-red-500 text-[11px] mb-4">
              Tech Stack
            </p>

            <h2 className="text-3xl md:text-4xl font-black leading-tight text-white">
              Technologies I <span className="text-red-600">Use</span>
            </h2>
          </motion.div>

          {/* TECH GRID */}

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 max-w-5xl mx-auto">

            {techs.map((tech, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.05,
                  delay: index * 0.05,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -6,
                  scale: 1.03,
                  boxShadow: "0px 0px 25px rgb(247, 0, 255)",
                }}
                className="
                  relative
                  border
                  border-red-600
                  bg-white/[0.03]
                  backdrop-blur-xl
                  rounded-xl
                  p-4
                  overflow-hidden
                  group
                  transition-all
                  duration-300
                "
              >
                {/* CARD GLOW */}

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                  <div className="absolute top-[-40px] right-[-40px] w-[100px] h-[100px] bg-red-600/20 blur-[60px] rounded-full"></div>
                </div>

                {/* TECH NAME */}

                <div className="relative z-10 flex items-center justify-center h-full">
                  <h3 className="text-sm md:text-base font-semibold text-gray-200 group-hover:text-white transition duration-300 text-center">
                    {tech}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default TechStack;