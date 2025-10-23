import './Rohitdev.css';
import { Menu, MoveUpRight } from "lucide-react";
import { useAssets } from "../../hooks/useAssets";
import SectionTitle from "./components/SectionTitle";
import WorkCard from "./components/WorkCard";
import { useState } from "react";

const SectionSpacing = () => `px-4 sm:px-6 lg:px-8 md:py-20 py-34`;

const Tobbar = () => {
  return (
    <div className="bg-gray-900 p-2">
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          {/* <img src={icons.devops} alt="devops" className="w-20" /> */}
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const { icons } = useAssets();
  const navItems = [
    { title: "About.", uri: "/about" },
    { title: "Work.", uri: "/work" },
    { title: "Projects.", uri: "/projects" },
    { title: "Skills.", uri: "/skills" },
    { title: "Contact.", uri: "/contact" },
  ];

  return (
    <div className="py-2 md:py-2 sticky top-0 z-50">
      <div className="w-full max-w-[1230px] mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center border border-gray-200 rounded-xl px-4 py-3 bg-gray-50/90 backdrop-blur-md">
          <div className="text-shadow-initial">
            <h2 className="font-bold font-natosans text-xl md:text-2xl">
              <span>Rohit</span>.
              <span className="font-raleway text-pink-800 font-normal">
                tamra
              </span>
            </h2>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <ul className="font-natosans font-semibold flex list-none gap-12">
              {navItems.map((item) => (
                <li
                  key={item.uri}
                  className="text-[16px] link relative wavy-link"
                >
                  <a href={item.uri} className="hover:text-pink-800 link">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Icons */}
          <div className="flex gap-2">
            <div className="cursor-pointer hidden md:block">
              <img src={icons.github} alt="GitHub" className="w-6" />
            </div>
            <div className="cursor-pointer block md:hidden">
              <Menu strokeWidth={1.75} />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

const Hero = () => {
  const { images, icons } = useAssets();
  return (
    <section className="hero py-20 md:py-40 min-h-[80dvh] relative">
      <div className="w-full max-w-[1200px] mx-auto px-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Text Block */}
          <div>
            <h1>
              <span className="md:text-2xl text-xl">Hey,</span> <br />
              <span className="md:text-8xl text-6xl ml-[-6px]">
                Rohit Tamra.
              </span>{" "}
              <span className="text-[20px] md:text-3xl">👋</span>
            </h1>

            <div className="py-2 flex items-center">
              <h2 className="md:text-[30px] text-[28px] text-pink-900 pr-2">
                Sr. Devops Engineer
              </h2>
              <img src={icons.dev} alt="Dev icon" className="w-6 mt-[0.4rem]" />
            </div>

            <div className="py-8 mb-2">
              <button className="md:p-4 md:py-3 py-3 md:text-[18px] font-natosans bg-gray-900 rounded-full md:px-8 px-6 flex items-center hover:bg-pink-700 text-gray-50">
                Download CV
                <MoveUpRight strokeWidth={1.5} size={16} className="ml-2" />
              </button>
            </div>

            {/* Socials (Desktop) */}
            <div className="hidden md:block">
              <div className="flex flex-col gap-2 fixed md:top-100 md:left-10 bg-gray-100 p-1 rounded-full">
                {[icons.linkdin, icons.fb, icons.twitter, icons.discord].map(
                  (icon, idx) => (
                    <img
                      key={idx}
                      src={icon}
                      alt="social-icon"
                      className="md:w-6 w-6 cursor-pointer"
                    />
                  )
                )}
              </div>
            </div>

            {/* Socials (Mobile) */}
            <div className="md:hidden block">
              <div className="flex gap-2 fixed right-5 bottom-10 bg-gray-100 p-1 rounded-full z-10">
                {[icons.linkdin, icons.fb, icons.twitter, icons.discord].map(
                  (icon, idx) => (
                    <img
                      key={idx}
                      src={icon}
                      alt="social-icon"
                      className="w-6 cursor-pointer"
                    />
                  )
                )}
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex justify-end absolute md:static bottom-[5rem] right-10">
            <img
              src={images.heroimg}
              alt="Hero"
              className="md:w-60 w-36 md:mt-[-4rem]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutMe = () => {
  const { backgrounds } = useAssets();
  return (
    <div className="overflow-hidden">
      <div
        className={`w-full max-w-[1200px] mx-auto ${SectionSpacing()} relative`}
      >
        <div className="absolute md:bottom-0 bottom-22 md:right-[-12rem] right-0 z-10">
          <img
            src={backgrounds.zurich}
            alt="Zurich"
            className="md:w-140 w-160"
          />
        </div>

        <SectionTitle title="About" subtitle="Me" />

        <div className="md:px-20 px-8 md:mb-26 mb-32 rounded-2xl">
          <h2 className="md:text-3xl text-2xl md:leading-[1.8] leading-[1.8]">
            I'm a Zurich based{" "}
            <span className="text-pink-900 border-1 p-1 rounded-full">
              Devops Engineer/Site Reliability Engineer
            </span>
            . 4.5+ years of background in system analysis and deployments, team
            leadership, as well as personal administration and professional
            development. Possess exemplary skills in communication and time
            management. Highly motivated to constantly develop skills and grow
            professionally.
          </h2>
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  const { icons } = useAssets();

  const devicons = [
    { name: "Python", icon: icons.python },
    { name: "Jenkins", icon: icons.jenkins },
    { name: "Bash", icon: icons.bash },
    { name: "Docker", icon: icons.docker },
    { name: "Flask", icon: icons.flask },
    { name: "GitHub", icon: icons.github },
    { name: "Ansible", icon: icons.ansible },
    { name: "Linux", icon: icons.linux },
    { name: "MongoDB", icon: icons.mongodb },
    { name: "PostgreSQL", icon: icons.postgresql },
    { name: "JavaScript", icon: icons.js },
  ];

  return (
    <div
      className={`w-full max-w-[1200px] mx-auto ${SectionSpacing()} relative`}
    >
      <SectionTitle title="Skills &" subtitle="Tools" />

      <div className="md:px-20 px-8 rounded-2xl mb-5">
        <div className="grid grid-cols-1 md:grid-cols-2 mb-10">
          <div className="md:pr-8 pr-4 mb-8">
            <h3 className="text-2xl font-medium text-gray-800 font-natosans mb-6 underline">
              Professional Playground
            </h3>
            <h2 className="text-[18px] text-gray-700 leading-[1.8]">
              My experience has given me a wide range of skills and expertise.
              Here are a few examples of tools and technologies I use
              <span className="inline-block pl-1">
                <MoveUpRight strokeWidth={1.5} size={16} />
              </span>
            </h2>
          </div>

          {/* Dev Icons */}
          <div>
            <div className="flex flex-wrap gap-2">
              {devicons.map((item) => (
                <div
                  key={item.name}
                  className="flex flex-col items-center text-center border border-gray-300 rounded-md p-2 md:w-28 w-24 hover:shadow-md transition"
                >
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="object-contain"
                  />
                  <span className="text-sm mt-2 text-gray-600">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Work = () => {
  const { icons } = useAssets();
  const [activeTab, setActiveTab] = useState<
    "frontend" | "backend" | "devops" | "repo"
  >("devops");

  const works: Record<string, any[]> = {
    frontend: [
      {
        title: "React Developer",
        company: "Freelance",
        duration: "2021 - Present",
        description: "Building responsive UIs using React, Tailwind, and GSAP.",
        github: "https://github.com/yourusername/react-projects",
        imgUrl:
          "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800",
      },
    ],
    backend: [
      {
        title: "Node.js Developer",
        company: "Company ABC",
        duration: "2019 - 2021",
        description: "Developed REST APIs with Express and MongoDB.",
        github: "https://github.com/yourusername/node-projects",
        imgUrl:
          "https://images.unsplash.com/photo-1559526324-593bc073d938?w=800",
      },
    ],
    devops: [
      {
        title: "DevOps Engineer",
        company: "AWS Projects",
        duration: "2022 - Present",
        description:
          "Automated deployments using Terraform, Docker, and Nginx.",
        github: "https://github.com/yourusername/devops-projects",
        imgUrl:
          "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
      },
    ],
    repo: [
      {
        title: "Open Source Contributor",
        company: "GitHub",
        duration: "2020 - Present",
        description: "Maintained and contributed to open-source repositories.",
        github: "https://github.com/yourusername",
        imgUrl:
          "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800",
      },
    ],
  };

  return (
    <div
      className={`w-full max-w-[1200px] mx-auto ${SectionSpacing()} relative md:mt-[-6%] mt-[-32%]`}
    >
      <SectionTitle title="Work &" subtitle="Experiences" />

      {/* Tabs */}
      <div className="mb-12">
        <div className="flex justify-center gap-4 mb-4">
          {[
            { id: "frontend", icon: icons.frontend },
            { id: "backend", icon: icons.backend },
            { id: "devops", icon: icons.devops3 },
            { id: "repo", icon: icons.repo },
          ].map((tab) => (
            <div
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`border border-gray-200 rounded-full p-2 cursor-pointer transition ${
                activeTab === tab.id ? "bg-pink-900/10" : "bg-white"
              }`}
            >
              <img src={tab.icon} alt={tab.id} className="w-8" />
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-pink-700 capitalize">{activeTab}</p>
        </div>
      </div>

      {/* Work Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {works[activeTab]?.map((work, index) => (
          <WorkCard key={index} {...work} />
        ))}
      </div>
    </div>
  );
};

const Education = () => {
  const education = [
    {
      institute: "IIT Madras",
      course: "Advance Certification in Software Engineering",
      duration: "2021 - Present",
    },
    {
      institute: "SKIT Jaipur (RTU, Kota)",
      course: "B.Tech. in Computer Science",
      duration: "2014 - 2018",
    },
  ];

  return (
    <div
      className={`w-full max-w-[1200px] mx-auto ${SectionSpacing()} relative md:mt-0 mt-[-32%]`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        <div>
          <h2>
            <span className="md:text-6xl text-5xl text-gray-800 font-extralight font-natosans">
              Education & <br />
            </span>
            <span className="text-pink-800">Curriculum</span>
          </h2>
        </div>

        <div>
          {education.map((item, idx) => (
            <div key={idx} className="py-4 px-4">
              <h2 className="text-[20px] underline pb-2.5">{item.institute}</h2>
              <p className="text-[16px] text-gray-700 leading-[1.6] mb-2">
                {item.course}
              </p>
              <p className="text-[14px] font-natosans text-pink-800">
                <i>{item.duration}</i>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="bg-gray-900 py-1">
      <p className="text-center text-gray-50 font-satoshi text-[14px]">
        @eng.rohittamra@gmail.com
      </p>
    </div>
  );
};

export const Rohitdev = () => {
  return (
    <main className="bg-gray-50 h-full relative">
      <Tobbar />
      <Navbar />
      <Hero />
      <AboutMe />
      <Skills />
      <Work />
      <Education />
      <Footer />
    </main>
  );
};
