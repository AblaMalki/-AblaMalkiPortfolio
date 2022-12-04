import React from 'react';
import abla from '../assets/abla.png';
import {
  RiGithubLine,
  RiLinkedinBoxLine,
  RiBehanceLine,
  RiDownloadLine,
} from 'react-icons/ri';
import { HiOutlinePhone, HiOutlineAtSymbol } from 'react-icons/hi2';

const Header = () => (
  <header className="relative max-w-5xl mx-auto grid gap-y-8 p-5 pt-14 md:px-32">
    <div className="grid text-center ">
      {/* Profile Picture */}
      <div
        className="grid place-items-center border-4 border-primary justify-self-center
      w-[135px] h-[135px] rounded-full mb-4"
      >
        <div
          className="relative flex items-end justify-center w-[120px] h-[120px]
      bg-gradient-to-b from-primary to-blue-200 rounded-full overflow-hidden "
        >
          <img src={abla} alt="Profile Picture" width={120} height={120} />
        </div>
      </div>
      {/* Profile Data */}
      <h2 className="font-abla font-semibold text-4xl text-titleColor">
        Abla Malki
      </h2>

      <h3 className="font-abla font-medium text-base text-textColor mb-4">
        Web Developer
      </h3>
      {/* Social Media Links */}
      <div
        className="flex justify-center items-center space-x-3 mb-4 text-titleColor
      transition duration-300 "
      >
        <a
          href="https://github.com/AblaMalki"
          target="_blank"
          rel="noreferrer"
          className="hover:text-primary"
        >
          <RiGithubLine className="text-[24px]" />
        </a>
        <a
          href="https://www.linkedin.com/in/abla-malki"
          target="_blank"
          rel="noreferrer"
          className="hover:text-primary text-[24px]"
        >
          <RiLinkedinBoxLine />
        </a>
        <a
          href="https://www.behance.net/malkiabla"
          target="_blank"
          rel="noreferrer"
          className="hover:text-primary text-[24px]"
        >
          <RiBehanceLine />
        </a>
      </div>
      {/* Profile Description */}

      <p className="font-abla font-normal text-base text-titleColor lg:px-20 ">
        Front-end web developer based in Algeria. <br /> I combine User
        Experience and Creative modern design to build websites and web
        applications that are user-focused, responsive, and delightful to use.
      </p>
    </div>
    {/* Profile Buttons */}
    <div className="flex items-center justify-center gap-4 flex-col md:flex-row">
      <a
        download=""
        href="/cv/CV-AblaMalki.pdf"
        className="inline-flex items-center gap-2 bg-primary font-abla font-medium text-base text-white
        px-6 py-[1.15rem] rounded-lg transition duration-300 shadow-shade hover:bg-primaryAlt"
      >
        Download CV <RiDownloadLine className="text-xl" />
      </a>
      <div className="flex items-center justify-center gap-1">
        <a
          href="tel:+213676548061"
          className="inline items-center gap-2
        rounded-lg p-3 transition duration-300 bg-textColrAlt hover:bg-textColor "
        >
          <HiOutlinePhone className="text-xl text-titleColor" />
        </a>
        <a
          href="mailto:hello@ablamalki.com"
          className="inline items-center gap-2
        rounded-lg p-3 transition duration-300 bg-textColrAlt hover:bg-textColor"
        >
          <HiOutlineAtSymbol className="text-xl text-titleColor" />
        </a>
      </div>
    </div>
  </header>
);

export default Header;
