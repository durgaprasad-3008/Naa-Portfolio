import { motion } from "framer-motion";
import { Mail, Phone, Send, Download } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import resumePDF from "../about/Resume/DurgaPrasad.pdf";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 .5C5.73.5.68 5.55.68 11.82c0 4.96 3.22 9.16 7.69 10.65.56.1.77-.24.77-.54v-1.9c-3.13.68-3.79-1.51-3.79-1.51-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 1.72 2.63 1.22 3.27.93.1-.73.39-1.22.71-1.5-2.5-.28-5.13-1.25-5.13-5.56 0-1.23.44-2.23 1.16-3.02-.12-.28-.5-1.43.11-2.97 0 0 .95-.3 3.11 1.15a10.86 10.86 0 0 1 5.66 0c2.16-1.45 3.11-1.15 3.11-1.15.61 1.54.23 2.69.11 2.97.72.79 1.16 1.79 1.16 3.02 0 4.32-2.63 5.27-5.14 5.55.4.34.76 1.02.76 2.06v3.05c0 .3.2.65.78.54 4.46-1.49 7.68-5.69 7.68-10.65C23.32 5.55 18.27.5 12 .5z" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
  </svg>
);

const socials = [
  {
    icon: Mail,
    label: "durgaprasadmudhiraj1267@gmail.com",
    href: "mailto:durgaprasadmudhiraj1267@gmail.com",
  },
  {
    icon: Phone,
    label: "+91 7731878344",
    href: "tel:+917731878344",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    href: "#",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    href: "#",
  },
];

function Contact() {

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setErrorMsg("Please fill in all fields.");
      setStatus("error");
      return;
    }

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setErrorMsg("Email service is not configured. Add EmailJS keys to .env and restart the dev server.");
      setStatus("error");
      return;
    }

    setStatus("sending");
    setErrorMsg("");

    try {

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_name: "Durga Prasad",
        },
        { publicKey: EMAILJS_PUBLIC_KEY },
      );

      setStatus("success");
      setForm({ name: "", email: "", message: "" });

      setTimeout(() => setStatus("idle"), 5000);

    } catch (err) {

      setErrorMsg(err?.text || "Something went wrong. Please try again.");
      setStatus("error");

    }

  };

  return (

    <section
      id="contact"
      className="scroll-mt-16 relative py-14 px-6 md:px-12 lg:px-20 overflow-hidden"
    >

      {/* BACKGROUND GLOW 1 */}

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
          className="mb-8"
        >

          <p className="uppercase tracking-[5px] text-red-500 text-[11px] mb-4">

            Contact Me

          </p>

          <h2 className="text-3xl md:text-4xl font-black leading-tight flex flex-wrap items-center gap-3">

            Let's Build Something{" "}
            <span className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent">
              Together
            </span>

            <span className="text-3xl md:text-4xl">🚀</span>

          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl text-sm md:text-base leading-7">

           Open to contributing to free launch projects and innovative ideas.
          Looking forward to collaborating and building meaningful solutions together..

          </p>

        </motion.div>

        {/* GRID */}

        <div className="grid md:grid-cols-2 gap-14 md:pl-6 max-w-4xl mx-auto">

          {/* LEFT: FORM */}

          <motion.div
            initial={{
              opacity: 0,
              x: -60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl border border-red-500/10 bg-white/[0.02] backdrop-blur-xl p-4"
          >

            {/* GLOW */}
            <div className="absolute top-[-60px] right-[-60px] w-[180px] h-[180px] bg-red-600/10 blur-[90px] rounded-full"></div>

            <form onSubmit={handleSubmit} className="relative z-10 space-y-3">

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                disabled={status === "sending"}
                className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder:text-gray-500 outline-none focus:border-red-500 transition disabled:opacity-60"
              />

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                disabled={status === "sending"}
                className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder:text-gray-500 outline-none focus:border-red-500 transition disabled:opacity-60"
              />

              <textarea
                rows="4"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message"
                disabled={status === "sending"}
                className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder:text-gray-500 outline-none resize-none focus:border-red-500 transition disabled:opacity-60"
              />

              <button
                type="submit"
                disabled={status === "sending"}
                className="flex items-center justify-center gap-2 w-full bg-red-600 hover:bg-red-700 transition duration-300 text-white text-xs font-semibold py-2.5 rounded-lg shadow-[0_0_15px_rgba(255,0,0,0.3)] disabled:opacity-60 disabled:cursor-not-allowed"
              >

                <Send size={14} className={status === "sending" ? "animate-pulse" : ""} />

                {status === "sending" ? "Sending..." : "Send Message"}

              </button>

              {status === "success" && (
                <p className="text-green-400 text-xs text-center pt-1">
                  Message sent! I'll get back to you soon.
                </p>
              )}

              {status === "error" && (
                <p className="text-red-400 text-xs text-center pt-1">
                  {errorMsg}
                </p>
              )}

            </form>

          </motion.div>

          {/* RIGHT: CONTACT INFO + RESUME */}

          <motion.div
            initial={{
              opacity: 0,
              x: 60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            viewport={{ once: true }}
            className="flex flex-col justify-between gap-4"
          >

            <div className="grid gap-2">

              {socials.map((item, index) => {

                const Icon = item.icon;

                return (

                  <motion.a
                    key={index}
                    href={item.href}
                    target={item.href === "#" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    whileHover={{
                      x: 6,
                    }}
                    className="flex items-center gap-3 border border-red-500/10 rounded-lg px-3 py-2 bg-black/40 hover:bg-red-500/5 hover:border-red-500/40 transition duration-300"
                  >

                    <div className="w-7 h-7 rounded-md bg-red-600/15 border border-red-500/20 flex items-center justify-center shrink-0">

                      <Icon className="text-white" width={14} height={14} size={14} />

                    </div>

                    <p className="text-gray-300 text-xs break-all">

                      {item.label}

                    </p>

                  </motion.a>

                );

              })}

            </div>

            <motion.a
              href={resumePDF}
              download="Puttala_Durga_Prasad_Resume.pdf"
              whileHover={{
                scale: 1.02,
              }}
              className="flex items-center justify-center gap-2 border border-red-600 hover:bg-red-600/10 transition duration-300 text-white text-xs font-semibold py-2.5 rounded-lg"
            >

              <Download size={14} />

              Download Resume

            </motion.a>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default Contact;
