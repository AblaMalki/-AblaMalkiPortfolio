import React from 'react';
import { HiBadgeCheck } from 'react-icons/hi';

const Skills = () => (
  <div className="grid gap-y-8 pt-4 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
    {/* Web Design Skills */}
    <div className="bg-textColrAlt p-6 rounded-2xl">
      <h3 className="font-abla font-medium text-lg text-primary text-center mb-6">
        Web Design
      </h3>
      <div className="flex justify-center">
        <div className="grid justify-start gap-y-4">
          <div className="flex items items-center gap-x-2">
            <HiBadgeCheck className="text-primary text-base" />
            <h3 className="font-abla font-medium text-base text-titleColor">
              Responsive design
            </h3>
          </div>
          <div className="flex items-center gap-x-2">
            <HiBadgeCheck className="text-primary text-base" />
            <h3 className="font-abla font-medium text-base text-titleColor">
              User Experience
            </h3>
          </div>
          <div className="flex items-center gap-x-2">
            <HiBadgeCheck className="text-primary text-base" />
            <h3 className="font-abla font-medium text-base text-titleColor">
              Design principles
            </h3>
          </div>
          <div className="flex items-center gap-x-2">
            <HiBadgeCheck className="text-primary text-base" />
            <h3 className="font-abla font-medium text-base text-titleColor">
              Atomic Design
            </h3>
          </div>
          <div className="flex items-center gap-x-2">
            <HiBadgeCheck className="text-primary text-base" />
            <h3 className="font-abla font-medium text-base text-titleColor">
              Planning
            </h3>
          </div>
          <div className="flex items-center gap-x-2">
            <HiBadgeCheck className="text-primary text-base" />
            <h3 className="font-abla font-medium text-base text-titleColor">
              Wireframing
            </h3>
          </div>
        </div>
      </div>
    </div>
    {/* Web Development Skills */}
    <div className="bg-textColrAlt p-6 rounded-2xl">
      <h3 className="font-abla font-medium text-lg text-primary text-center mb-6">
        Web Development
      </h3>
      <div className="flex justify-center ">
        <div className="grid justify-start gap-y-4">
          <div className="flex items items-center gap-x-2">
            <HiBadgeCheck className="text-primary text-base" />
            <h3 className="font-abla font-medium text-base text-titleColor">
              HTML/CSS
            </h3>
          </div>
          <div className="flex items-center gap-x-2">
            <HiBadgeCheck className="text-primary text-base" />
            <h3 className="font-abla font-medium text-base text-titleColor">
              JavaScript
            </h3>
          </div>
          <div className="flex items-center gap-x-2">
            <HiBadgeCheck className="text-primary text-base" />
            <h3 className="font-abla font-medium text-base text-titleColor">
              React
            </h3>
          </div>
          <div className="flex items-center gap-x-2">
            <HiBadgeCheck className="text-primary text-base" />
            <h3 className="font-abla font-medium text-base text-titleColor">
              TailwindCSS
            </h3>
          </div>
          <div className="flex items-center gap-x-2">
            <HiBadgeCheck className="text-primary text-base" />
            <h3 className="font-abla font-medium text-base text-titleColor">
              Material UI
            </h3>
          </div>
          <div className="flex items-center gap-x-2">
            <HiBadgeCheck className="text-primary text-base" />
            <h3 className="font-abla font-medium text-base text-titleColor">
              Redux
            </h3>
          </div>
        </div>
      </div>
    </div>
    {/* Tools*/}
    <div className="bg-textColrAlt p-6 rounded-2xl">
      <h3 className="font-abla font-medium text-lg text-primary text-center mb-6">
        Tools
      </h3>
      <div className="flex justify-center">
        <div className="grid justify-start gap-y-4">
          <div className="flex items items-center gap-x-2">
            <HiBadgeCheck className="text-primary text-base" />
            <h3 className="font-abla font-medium text-base text-titleColor">
              Visual Studio Code
            </h3>
          </div>
          <div className="flex items-center gap-x-2">
            <HiBadgeCheck className="text-primary text-base" />
            <h3 className="font-abla font-medium text-base text-titleColor">
              Figma
            </h3>
          </div>
          <div className="flex items-center gap-x-2">
            <HiBadgeCheck className="text-primary text-base" />
            <h3 className="font-abla font-medium text-base text-titleColor">
              Git & Github
            </h3>
          </div>
          <div className="flex items-center gap-x-2">
            <HiBadgeCheck className="text-primary text-base" />
            <h3 className="font-abla font-medium text-base text-titleColor">
              Node Package Manager (NPM)
            </h3>
          </div>
          <div className="flex items-center gap-x-2">
            <HiBadgeCheck className="text-primary text-base" />
            <h3 className="font-abla font-medium text-base text-titleColor">
              Illustrator
            </h3>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Skills;
