import Logo from "@/assets/IPhone-Logo.wine.svg";
import { House, User, Phone } from "lucide-react";

export const Aside = () => {
  return (
    <aside className="w-64 flex flex-col items-center h-screen bg-gray-800 text-white p-4 ml-6 mt-6 rounded-xl">
      <Logo
        aria-label="Logo"
        role="img"
        className="mb-4 size-40 text-white"
      />
      <nav className="flex flex-col gap-4">
        <div className="flex justify-center items-center w-50 h-15 gap-2 bg-gray-700  rounded-xl hover:text-[rgb(0,217,255)] hover:bg-[rgb(73,100,139)] border border-transparent hover:border hover:border-[rgb(0,217,255)] transition duration-500 ease-in-out">
          <House size={20} />
          <a href="/">Home</a>
        </div>
        <div>
          <a
            href="/about"
            className="flex justify-center items-center w-50 h-15 gap-2 bg-gray-700  rounded-xl hover:text-[rgb(0,217,255)] hover:bg-[rgb(73,100,139)] border border-transparent hover:border hover:border-[rgb(0,217,255)] transition duration-500 ease-in-out"
          >
            <User size={20} />
            About
          </a>
        </div>
        <div>
          <a
            href="/contact"
            className="flex justify-center items-center w-50 h-15 gap-2 bg-gray-700  rounded-xl hover:text-[rgb(0,217,255)] hover:bg-[rgb(73,100,139)] border border-transparent hover:border hover:border-[rgb(0,217,255)] transition duration-500 ease-in-out"
          >
            <Phone size={20} />
            Contact
          </a>
        </div>
      </nav>
    </aside>
  );
};
