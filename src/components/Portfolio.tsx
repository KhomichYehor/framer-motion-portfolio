'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import project1 from '../assets/proj1.png';
import project2 from '../assets/proj2.png';
import project3 from '../assets/proj3.png';
import project4 from '../assets/proj4.png';

const projects = [
  {
    title: 'Brainwave',
    desc: '    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est blanditiis at sunt hic. Fugit mollitia, nihil quam et nisi ipsum quisquam doloribus labore sit ullam dicta, libero tenetur, ratione excepturi?',
    devstack: 'Tailwind CSS, React',
    link: 'https://khomichyehor.github.io/brainwave/',
    git: 'https://github.com/KhomichYehor/brainwave',
    src: project1,
  },
  {
    title: 'Phone catalog',
    desc: '    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est blanditiis at sunt hic. Fugit mollitia, nihil quam et nisi ipsum quisquam doloribus labore sit ullam dicta, libero tenetur, ratione excepturi?',
    devstack: 'React, Redux, SCSS',
    link: 'https://khomichyehor.github.io/phone_catalog/',
    git: 'https://github.com/KhomichYehor/phone_catalog',
    src: project2,
  },
  {
    title: 'Kate VR',
    desc: '    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est blanditiis at sunt hic. Fugit mollitia, nihil quam et nisi ipsum quisquam doloribus labore sit ullam dicta, libero tenetur, ratione excepturi?',
    devstack: 'HTML, SCSS, JS',
    link: 'https://github.com/KhomichYehor/KateVR-landing',
    git: 'https://github.com/KhomichYehor/KateVR-landing',
    src: project3,
  },
  {
    title: 'Kickstarter',
    desc: '    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est blanditiis at sunt hic. Fugit mollitia, nihil quam et nisi ipsum quisquam doloribus labore sit ullam dicta, libero tenetur, ratione excepturi?',
    devstack: 'HTML, SCSS, JS',
    link: 'https://khomichyehor.github.io/kickstarter-landing/',
    git: 'https://github.com/KhomichYehor/kickstarter-landing',
    src: project4,
  },
];

const Portfolio = () => {
  return (
    <div
      className="text-white bg-gradient-to-b from-black to-[#381a5f] py-18 mt-20"
      id="portfolio"
    >
      <h1 className="text-[#98B4CE] text-6xl max-w-[550px] mx-auto font-semibold p-4 mb-4 ">
        Selected <span className="text-[#e48a57]">Projects</span>
      </h1>
      <div className="px-6 md:px-0 max-w-[1000px] mx-auto space-y-24 mt-20">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className={`mt-12 flex flex-col ${
              index % 2 === 1 ? 'md:flex-row-reverse gap-12' : 'md:flex-row'
            }`}
          >
            <div className="space-y-2 max-w-[550px]">
              <h2 className="text-7xl my-4 text-white/70">{`0${index + 1}`}</h2>
              <h2 className="text-4xl">{project.title}</h2>
              <p className="text-lg text-white/70 break-words p-4">
                {project.desc}
              </p>
              <p className="text-xl text-[#e48a57] font-semibold">
                {project.devstack}
              </p>
              <div className="w-64 h-[1px] bg-gray-400 my-4">
                <a
                  href={project.link}
                  className="mr-6 hover:text-[#e48a57] transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo Link
                </a>
                <a
                  href={project.git}
                  className="hover:text-[#e48a57] transition duration-300"
                >
                  GitHub Link
                </a>
              </div>
            </div>
            <div className="flex justify-center items-center gradient-pulse">
              <Image
                src={project.src}
                alt={project.title}
                className="h-[350px] w-[500px] object-cover border rounded border-gray-700 "
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
