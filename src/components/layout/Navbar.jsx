import { GitBranch, Link, Mail } from "lucide-react";

function Navbar() {
  return (
    <nav className="fixed w-full top-0 z-50 backdrop-blur-xl bg-black/40 border-b border-red-500/10">

      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 md:px-16 lg:px-24 xl:px-32 py-4">

        {/* LOGO */}
        <h1 className="text-2xl md:text-2xl font-black text-red-600 tracking-wide">

          DURGA PRASAD

        </h1>

        {/* MENU */}
        <ul className="hidden md:flex gap-8 lg:gap-10 text-white text-sm lg:text-base font-medium">

          <li className="hover:text-red-500 cursor-pointer transition duration-300">
            Home
          </li>

          <li className="hover:text-red-500 cursor-pointer transition duration-300">
            About
          </li>

          <li className="hover:text-red-500 cursor-pointer transition duration-300">
            Skills
          </li>

          <li className="hover:text-red-500 cursor-pointer transition duration-300">
            Projects
          </li>

          <li className="hover:text-red-500 cursor-pointer transition duration-300">
            Contact
          </li>

        </ul>

        {/* ICONS */}
        <div className="flex gap-4 text-red-500">

          <GitBranch
            size={20}
            className="cursor-pointer hover:scale-125 hover:text-white transition duration-300"
          />

          <Link
            size={20}
            className="cursor-pointer hover:scale-125 hover:text-white transition duration-300"
          />

          <Mail
            size={20}
            className="cursor-pointer hover:scale-125 hover:text-white transition duration-300"
          />

        </div>

      </div>

    </nav>
  );
}

export default Navbar;