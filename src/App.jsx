import React from 'react';
import { Tab } from '@headlessui/react';
import classNames from 'classnames';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="">
      <Header />
      <main className="max-w-6xl mx-auto px-8 pb-8 md:px-16 md:pb-16 ">
        <Tab.Group>
          <Tab.List className="flex justify-between gap-2 rounded-xl bg-textColrAlt p-[0.375rem] mt-8 mx-0 mb-10 md:w-[360px] md:my-12 md:mx-auto">
            <Tab
              className={({ selected }) =>
                classNames(
                  'w-full p-4 font-abla font-medium text-base rounded-xl transition duration-300 outline-none',
                  selected ? 'bg-white' : 'text-titleColor hover:bg-white '
                )
              }
            >
              Projects
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  'w-full p-4 font-abla font-medium text-base rounded-xl transition duration-300 outline-none',
                  selected ? 'bg-white' : 'text-titleColor hover:bg-white '
                )
              }
            >
              Skills
            </Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <Portfolio />
            </Tab.Panel>
            <Tab.Panel>
              <Skills />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </main>
      <Footer />
    </div>
  );
};

export default App;
