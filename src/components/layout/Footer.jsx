import { Mail } from "lucide-react";

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

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Tech Stack", href: "#techstack" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

function Footer() {

  const year = new Date().getFullYear();

  return (

    <footer className="relative overflow-hidden border-t border-white/5">

      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-600/60 to-transparent"></div>

      <style>
        {`
          @keyframes footerNameShine {
            0% { background-position: 200% center; }
            100% { background-position: -200% center; }
          }

          .footer-name-shine {
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
            animation: footerNameShine 3.5s linear infinite;
          }

          .footer-name-shine-red {
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
            animation: footerNameShine 3.5s linear infinite;
          }
        `}
      </style>

      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-10 relative z-10 flex flex-col items-center gap-6">

        {/* NAME */}

        <h2 className="text-2xl md:text-3xl font-black flex items-baseline gap-2">

          <span className="footer-name-shine">Puttala Durga</span>

          <span className="footer-name-shine-red">Prasad</span>

        </h2>

        {/* NAV */}

        <nav className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-gray-300 text-sm">

          {navLinks.map((link) => (

            <a
              key={link.href}
              href={link.href}
              className="hover:text-red-500 transition duration-300"
            >

              {link.label}

            </a>

          ))}

        </nav>

        {/* SOCIALS */}

        <div className="flex items-center gap-5">

          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-400 hover:text-white transition duration-300"
          >

            <GithubIcon width={22} height={22} />

          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-400 hover:text-white transition duration-300"
          >

            <LinkedinIcon width={22} height={22} />

          </a>

          <a
            href="mailto:durgaprasadmudhiraj1267@gmail.com"
            aria-label="Email"
            className="text-gray-400 hover:text-white transition duration-300"
          >

            <Mail size={22} />

          </a>

        </div>

        {/* COPYRIGHT */}

        <p className="text-gray-500 text-xs md:text-sm text-center">

          © {year} Puttala Durga Prasad. All rights reserved.

        </p>

      </div>

    </footer>
  );
}

export default Footer;
