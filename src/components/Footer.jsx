import "remixicon/fonts/remixicon.css";
import Dock from "./Dock/Dock";
import { VscHome, VscArchive, VscAccount } from "react-icons/vsc";

const Footer = () => {
  const items = [
    { icon: <VscHome size={18} />, label: "Home", onClick: () => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" }) },
    { icon: <VscAccount size={18} />, label: "About Me", onClick: () => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }) },
    { icon: <VscArchive size={18} />, label: "Project", onClick: () => document.getElementById("project")?.scrollIntoView({ behavior: "smooth" }) },
  ];

  return (
    <div className="mt-32 pb-8 flex flex-col items-center relative z-10">
      {/* Adaptive flex container */}
      <div className="w-full flex flex-col md:flex-row items-center md:justify-between gap-6">
        
        {/* Title - top on mobile */}
        <h1 className="text-2xl font-bold order-1 md:order-none">
          Portofolio
        </h1>

        {/* Social Icons - middle on mobile */}
        <div className="flex gap-3 order-2 md:order-none">
          <a href="https://github.com/by-febry"><i className="ri-github-fill ri-2x"></i></a>
          <a href="https://www.instagram.com/current.char/"><i className="ri-instagram-fill ri-2x"></i></a>
          <a href="https://www.facebook.com/0xchar/"><i className="ri-facebook-fill ri-2x"></i></a>
          <a href="https://www.linkedin.com/in/christian-mark-panopio-101906334/"><i className="ri-linkedin-fill ri-2x"></i></a>
          <a href="https://discord.com/users/343824360697495564"><i className="ri-discord-fill ri-2x"></i></a>
        </div>

        {/* Dock - bottom on mobile */}
        <div className="order-3 md:order-none mt-15 md:mt-0  md:mb-0">
          <Dock 
            items={items}
            panelHeight={30}
            baseItemSize={60}
            magnification={100}
          />
        </div>

      </div>
    </div>
  );
};

export default Footer;
