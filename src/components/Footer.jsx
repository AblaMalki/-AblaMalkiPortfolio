import React from 'react';

const Footer = () => (
  <footer className="max-w-6xl mx-auto px-8 md:px-16">
    <div className="flex justify-center items-center space-x-1">
      <span className="block mt-10 mb-8 font-abla text-center text-sm text-textColor">
        &#169;
      </span>
      <a
        href="https://github.com/AblaMalki/AblaMalkiPortfolio"
        target="_blank"
        rel="noreferrer"
      >
        <span className="block mt-10 mb-8 font-abla text-center text-sm text-textColor transition duration-300 hover:text-primary hover:underline">
          Abla Malki
        </span>
      </a>
    </div>
  </footer>
);

export default Footer;
