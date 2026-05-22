import { Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar() {

  const [mobileMenu, setMobileMenu] = useState(false);

  return (

    <nav className="fixed w-full top-0 z-50 backdrop-blur-xl bg-black/40 border-b border-red-500/10">

      <div className="w-full flex justify-between items-center px-4 md:px-10 lg:px-16 xl:px-24 py-2.5">

        {/* LOGO */}

        <a
          href="#home"
          className="flex items-center gap-3 text-xl md:text-2xl font-black text-red-600 tracking-wide whitespace-nowrap"
        >

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 340 360"
            className="w-12 h-12 md:w-14 md:h-14 shrink-0"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="dpGold" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFF5C8" />
                <stop offset="50%" stopColor="#D4AF37" />
                <stop offset="100%" stopColor="#8B6914" />
              </linearGradient>
            </defs>

            <style>
              {`
                @keyframes logoSpinCW {
                  from { transform: rotate(0deg); }
                  to { transform: rotate(360deg); }
                }
                @keyframes logoSpinCCW {
                  from { transform: rotate(0deg); }
                  to { transform: rotate(-360deg); }
                }
                .logo-ring-outer,
                .logo-ring-inner {
                  transform-box: fill-box;
                  transform-origin: center;
                  animation-iteration-count: infinite;
                  animation-timing-function: linear;
                  animation-fill-mode: forwards;
                  will-change: transform;
                }
                .logo-ring-outer {
                  animation-name: logoSpinCW;
                  animation-duration: 5s;
                }
                .logo-ring-inner {
                  animation-name: logoSpinCCW;
                  animation-duration: 3.5s;
                }
              `}
            </style>

            <g className="logo-ring-outer">
              <circle cx="170" cy="190" r="140" fill="none" stroke="url(#dpGold)" strokeWidth="3" strokeDasharray="2 5" />
            </g>
            <circle cx="170" cy="190" r="130" fill="none" stroke="url(#dpGold)" strokeWidth="1.5" />

            <g stroke="url(#dpGold)" strokeWidth="3">
              <line x1="170" y1="45" x2="170" y2="55" />
              <line x1="170" y1="325" x2="170" y2="335" />
              <line x1="25" y1="190" x2="35" y2="190" />
              <line x1="305" y1="190" x2="315" y2="190" />
              <line x1="73" y1="93" x2="80" y2="100" />
              <line x1="267" y1="93" x2="260" y2="100" />
              <line x1="73" y1="287" x2="80" y2="280" />
              <line x1="267" y1="287" x2="260" y2="280" />
            </g>

            <g fill="url(#dpGold)">
              <circle cx="170" cy="45" r="6" />
              <circle cx="170" cy="335" r="6" />
              <circle cx="25" cy="190" r="6" />
              <circle cx="315" cy="190" r="6" />
            </g>

            <circle cx="170" cy="190" r="100" fill="none" stroke="url(#dpGold)" strokeWidth="4" />
            <g className="logo-ring-inner">
              <circle cx="170" cy="190" r="92" fill="none" stroke="url(#dpGold)" strokeWidth="2" strokeDasharray="4 6" />
            </g>

            <g transform="translate(135, 138)">
              <path d="M 0 30 Q 35 22 70 30 L 70 36 Q 35 28 0 36 Z" fill="url(#dpGold)" />
              <path d="M 5 30 L 10 12 L 15 30 Z" fill="url(#dpGold)" stroke="#8B6914" strokeWidth="0.5" />
              <path d="M 19 30 L 24 4 L 29 30 Z" fill="url(#dpGold)" stroke="#8B6914" strokeWidth="0.5" />
              <path d="M 31 30 L 35 -3 L 39 30 Z" fill="url(#dpGold)" stroke="#8B6914" strokeWidth="0.5" />
              <path d="M 41 30 L 46 4 L 51 30 Z" fill="url(#dpGold)" stroke="#8B6914" strokeWidth="0.5" />
              <path d="M 55 30 L 60 12 L 65 30 Z" fill="url(#dpGold)" stroke="#8B6914" strokeWidth="0.5" />
              <circle cx="10" cy="10" r="3" fill="#a3263a" />
              <circle cx="24" cy="2" r="3" fill="#1e5fa8" />
              <circle cx="35" cy="-5" r="3.5" fill="#a3263a" />
              <circle cx="46" cy="2" r="3" fill="#1e5fa8" />
              <circle cx="60" cy="10" r="3" fill="#a3263a" />
            </g>

            <text x="170" y="232" textAnchor="middle" fontFamily="'Brush Script MT', 'Lucida Handwriting', cursive" fontSize="74" fontWeight="700" fontStyle="italic" fill="url(#dpGold)">DP</text>
          </svg>

          DURGA PRASAD

        </a>

        {/* DESKTOP MENU */}

        <ul className="hidden md:flex items-center gap-7 lg:gap-10 text-white text-sm lg:text-base font-medium">

          <li>

            <a
              href="#home"
              className="hover:text-red-500 transition duration-300"
            >

              Home

            </a>

          </li>

          <li>

            <a
              href="#about"
              className="hover:text-red-500 transition duration-300"
            >

              About

            </a>

          </li>

          <li>

            <a
              href="#experience"
              className="hover:text-red-500 transition duration-300"
            >

              Experience

            </a>

          </li>

          <li>

            <a
              href="#techstack"
              className="hover:text-red-500 transition duration-300"
            >

              Tech Stack

            </a>

          </li>

          <li>

            <a
              href="#projects"
              className="hover:text-red-500 transition duration-300"
            >

              Projects

            </a>

          </li>

          <li>

            <a
              href="#certifications"
              className="hover:text-red-500 transition duration-300"
            >

              Certifications

            </a>

          </li>

          <li>

            <a
              href="#achievements"
              className="hover:text-red-500 transition duration-300"
            >

              Achievements

            </a>

          </li>

        </ul>

        {/* MOBILE MENU BUTTON */}

        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="md:hidden text-white"
        >

          {mobileMenu ? <X size={26} /> : <Menu size={26} />}

        </button>

      </div>

      {/* MOBILE MENU */}

      {mobileMenu && (

        <div className="md:hidden bg-black/95 border-t border-red-500/10 px-6 py-6">

          <ul className="flex flex-col gap-5 text-white font-medium">

            <li>

              <a
                href="#home"
                onClick={() => setMobileMenu(false)}
                className="hover:text-red-500 transition duration-300"
              >

                Home

              </a>

            </li>

            <li>

              <a
                href="#about"
                onClick={() => setMobileMenu(false)}
                className="hover:text-red-500 transition duration-300"
              >

                About

              </a>

            </li>

            <li>

              <a
                href="#experience"
                onClick={() => setMobileMenu(false)}
                className="hover:text-red-500 transition duration-300"
              >

                Experience

              </a>

            </li>

            <li>

              <a
                href="#techstack"
                onClick={() => setMobileMenu(false)}
                className="hover:text-red-500 transition duration-300"
              >

                Tech Stack

              </a>

            </li>

            <li>

              <a
                href="#projects"
                onClick={() => setMobileMenu(false)}
                className="hover:text-red-500 transition duration-300"
              >

                Projects

              </a>

            </li>

            <li>

              <a
                href="#certifications"
                onClick={() => setMobileMenu(false)}
                className="hover:text-red-500 transition duration-300"
              >

                Certifications

              </a>

            </li>

            <li>

              <a
                href="#achievements"
                onClick={() => setMobileMenu(false)}
                className="hover:text-red-500 transition duration-300"
              >

                Achievements

              </a>

            </li>

          </ul>

        </div>

      )}

    </nav>

  );
}

export default Navbar;