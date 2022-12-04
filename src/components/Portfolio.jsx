import React from 'react';

import { RiCodeSSlashLine, RiLinkM } from 'react-icons/ri';
import FilmpireApp from '../assets/FilmpireApp.png';
import LyriksApp from '../assets/LyriksApp.png';
import CodeTubeApp from '../assets/CodeTubeApp.png';
import ShoppyApp from '../assets/ShoppyApp.png';

const Portfolio = () => (
  <div className=" grid lg:grid-cols-2 gap-8 ">
    <article className="relative items-center justify-center overflow-hidden cursor-pointer group ">
      {/* The Project Image */}
      <div className="">
        <img
          src={FilmpireApp}
          alt="Project one"
          className="w-full h-full object-cover"
        />
      </div>
      {/* The Project Title and Links */}
      <div
        className="absolute w-full h-full flex flex-col justify-end py-6 px-5 left-0 -bottom-full
      bg-gradient-to-b from-transparent to-dark group-hover:bottom-0 transition duration-300"
      >
        <h3 className="font-abla font-medium text-base text-textColor">
          FILMPIRE
        </h3>
        <h2 className="font-abla font-medium text-xl text-white">
          AI Powered Movies App With IMDB Features
        </h2>
        <div className="flex items-center pt-2 gap-x-2">
          <a
            href="https://filmpirem.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="inline items-center
        rounded-lg p-2 transition duration-300 bg-primary hover:bg-primaryAlt
         text-white"
          >
            <RiLinkM className="text-xl font-semibold " />
          </a>
          <a
            href="https://github.com/AblaMalki/Filmpire"
            target="_blank"
            rel="noreferrer"
            className="inline items-center
          rounded-lg p-2 transition duration-300 bg-primary hover:bg-primaryAlt
           text-white"
          >
            <RiCodeSSlashLine className="text-xl font-bold" />
          </a>
        </div>
      </div>
    </article>
    <article className="relative items-center justify-center overflow-hidden cursor-pointer group ">
      {/* The Project Image */}
      <div className="">
        <img
          src={LyriksApp}
          alt="Project one"
          className="w-full h-full object-cover"
        />
      </div>
      {/* The Project Title and Links */}
      <div
        className="absolute w-full h-full flex flex-col justify-end py-6 px-5 left-0 -bottom-full
      bg-gradient-to-b from-transparent to-dark group-hover:bottom-0 transition duration-300"
      >
        <h3 className="font-abla font-medium text-base text-textColor">
          LYRIKS
        </h3>
        <h2 className="font-abla font-medium text-xl text-white">
          Modern and Improved Cloned Version of Spotify
        </h2>
        <div className="flex items-center pt-2 gap-x-2">
          <a
            href="https://lyriks-am.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="inline items-center
        rounded-lg p-2 transition duration-300 bg-primary hover:bg-primaryAlt
         text-white"
          >
            <RiLinkM className="text-xl font-semibold " />
          </a>
          <a
            href="https://github.com/AblaMalki/Lyriks"
            target="_blank"
            rel="noreferrer"
            className="inline items-center
          rounded-lg p-2 transition duration-300 bg-primary hover:bg-primaryAlt
           text-white"
          >
            <RiCodeSSlashLine className="text-xl font-bold" />
          </a>
        </div>
      </div>
    </article>
    <article className="relative items-center justify-center overflow-hidden cursor-pointer group ">
      {/* The Project Image */}
      <div className="">
        <img
          src={CodeTubeApp}
          alt="Project one"
          className="w-full h-full object-cover"
        />
      </div>
      {/* The Project Title and Links */}
      <div
        className="absolute w-full h-full flex flex-col justify-end py-6 px-5 left-0 -bottom-full
      bg-gradient-to-b from-transparent to-dark group-hover:bottom-0 transition duration-300"
      >
        <h3 className="font-abla font-medium text-base text-textColor">
          CodeTube
        </h3>
        <h2 className="font-abla font-medium text-xl text-white">
          Personal YouTube Clone Application, that includes links to my favorite
          YouTube coding and dev channels
        </h2>
        <div className="flex items-center pt-2 gap-x-2">
          <a
            href="https://code-tube-am.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="inline items-center
        rounded-lg p-2 transition duration-300 bg-primary hover:bg-primaryAlt
         text-white"
          >
            <RiLinkM className="text-xl font-semibold " />
          </a>
          <a
            href="https://github.com/AblaMalki/CodeTube"
            target="_blank"
            rel="noreferrer"
            className="inline items-center
          rounded-lg p-2 transition duration-300 bg-primary hover:bg-primaryAlt
           text-white"
          >
            <RiCodeSSlashLine className="text-xl font-bold" />
          </a>
        </div>
      </div>
    </article>
    <article className="relative items-center justify-center overflow-hidden cursor-pointer group ">
      {/* The Project Image */}
      <div className="">
        <img
          src={ShoppyApp}
          alt="Project Four"
          className="w-full h-full object-cover"
        />
      </div>
      {/* The Project Title and Links */}
      <div
        className="absolute w-full h-full flex flex-col justify-end py-6 px-5 left-0 -bottom-full
      bg-gradient-to-b from-transparent to-dark group-hover:bottom-0 transition duration-300"
      >
        <h3 className="font-abla font-medium text-base text-textColor">
          Shoppy
        </h3>
        <h2 className="font-abla font-medium text-xl text-white">
          Modern React Admin Dashboard Application with Theming, Tables, Charts,
          Calendar, Kanban, and More.
        </h2>
        <div className="flex items-center pt-2 gap-x-2">
          <a
            href="https://shoppy-admin.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="inline items-center
        rounded-lg p-2 transition duration-300 bg-primary hover:bg-primaryAlt
         text-white"
          >
            <RiLinkM className="text-xl font-semibold " />
          </a>
          <a
            href="https://github.com/AblaMalki/shoppy"
            target="_blank"
            rel="noreferrer"
            className="inline items-center
          rounded-lg p-2 transition duration-300 bg-primary hover:bg-primaryAlt
           text-white"
          >
            <RiCodeSSlashLine className="text-xl font-bold" />
          </a>
        </div>
      </div>
    </article>
  </div>
);

export default Portfolio;
