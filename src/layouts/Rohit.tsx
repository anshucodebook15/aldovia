import { Menu, MoveUpRight } from "lucide-react";
import { useAssets } from "../hooks/useAssets";

const Tobbar = () => {
  // const { images, icons, backgrounds, lottie, videos } = useAssets();
  return (
    <>
      <div className="bg-gray-900 p-2">
        <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            {/* <img src={icons.devops} alt="" className="w-20" /> */}
          </div>
        </div>
      </div>
    </>
  );
};

const Navbar = () => {
  const { icons } = useAssets();
  const navItems = [
    { title: "About.", uri: "/About" },
    { title: "Work.", uri: "/work" },
    { title: "Projects.", uri: "/projects" },
    { title: "Skills.", uri: "/skills" },
    { title: "Contact.", uri: "/contact" },
  ];

  return (
    <>
      <div className="py-2 md:py-2 sticky top-0 z-50  ">
        <div className="w-full max-w-[1230px] mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex justify-between items-center border border-gray-200 rounded-xl px-4 py-3 bg-gray-50/90 backdrop-blur-md ">
            <div className="text-shadow-initial">
              <h2 className="font-bold font-natosans text-xl md:text-2xl">
                <span className="">Rohit</span>.
                <span className="font-raleway text-pink-800 font-normal">
                  tamra
                </span>
              </h2>
            </div>

            <div className="hidden md:block">
              <ul className="font-natosans font-semibold flex list-none gap-12">
                {navItems.map((item, index) => (
                  <li
                    key={index}
                    className="text-[16px] link relative wavy-link"
                  >
                    <a href={item.uri} className="hover:text-pink-800 link">
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-2">
              <div className="cursor-pointer hidden md:block">
                <img src={icons.github} alt="" className="w-6" />
              </div>
              <div className="cursor-pointer block md:hidden">
                <Menu strokeWidth={1.75} />
                {/* <img src={icons.github} alt="" className="w-6" /> */}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

const Hero = () => {
  const { images, icons } = useAssets();
  return (
    <>
      <section className="hero py-20 md:py-40  relative">
        <div className="test w-full max-w-[1200px] mx-auto px-6 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 ">
            <div>
              <div className="">
                <h1>
                  <span className="md:text-2xl text-xl">Hey,</span> <br />{" "}
                  <span className="md:text-8xl text-6xl ml-[-6px]">
                    Rohit Tamra.
                  </span>{" "}
                  <span className="text-[20px] md:text-3xl">👋</span>
                </h1>
              </div>

              <div className="py-2 flex items-center">
                <h2 className="md:text-[32px] text-[28px] text-pink-900 pr-2">
                  Sr. Devops Engineer
                </h2>
                <img src={icons.dev} alt="" className="w-6 mt-[0.4rem]" />
              </div>

              <div className="md:py-10 py-8">
                <button className="border-1 md:p-4 py-4 md:text-[18px]  font-natosans bg-gray-900 rounded-full px-4 flex items-center hover:bg-pink-700 text-gray-50 hover:text-gray-50">
                  Download CV
                  <MoveUpRight strokeWidth={1.5} size={16} className="ml-2" />
                </button>
              </div>
              {/* 
              <div>
                <h2 className="text-[20px]">
                  5<span className="text-pink-900">+</span> Years of Experience
                </h2>
              </div> */}
            </div>

            <div className="flex justify-end absolute md:static bottom-[-5rem] right-4 ">
              <img
                src={images.heroimg}
                alt=""
                className="md:w-60 w-36 mt-[-6rem]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
const AboutMe = () => {
  const { backgrounds } = useAssets();
  return (
    <>
      <div className="overflow-hidden">
        <div className="test w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 md:py-26 py-64 relative ">
          <div className="absolute md:bottom-0 bottom-22 md:right-[-12rem]  right-[-0rem] z-10">
            <img src={backgrounds.zurich} alt="" className="md:w-120 w-150" />
          </div>
          <div className="">
            <h2 className="p-0 m-0">
              <span className="md:text-6xl text-5xl text-gray-800 font-extralight font-natosans">
                About
              </span>
              <span className="text-pink-800"> Me .</span>
              <span className="text-pink-800"></span>
            </h2>
          </div>
          <div className="md:p-20 px-8 py-20 rounded-2xl my-[-0.8rem]">
            <h2 className="md:text-3xl text-2xl md:leading-[1.8] leading-[1.8]">
              I'm a Zurich based{" "}
              <span className="text-pink-900 border-1 p-1 rounded-full">
                Devops Engineer/Site Reliability Engineer
              </span>
              . 4.5+ years of background in system analysis and deployments,
              team leadership, as well as personal administration and
              professional development. Possess exemplary skills in verbal,
              written communication and time management. Highly motivated to
              constantly develop skills and grow professionally..
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

const Skills = () => {
  const { icons } = useAssets();

  // 🔥 Dev icons object array
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
    <>
      <div className="test w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-16">
          <h2 className="p-0 m-0">
            <span className="text-6xl text-gray-800 font-extralight font-natosans">
              Skills &
            </span>
            <span className="text-pink-800"> Tools .</span>
            <span className="text-pink-800"></span>
          </h2>

          <h2 className="p-0 m-0">
            <span className="md:text-6xl text-5xl text-gray-800 font-extralight font-natosans">
              Skills
            </span>
            <span className="text-pink-800"> Me .</span>
            <span className="text-pink-800"></span>
          </h2>
        </div>

        <div className="px-20 rounded-2xl my-[-0.8rem] mb-5">
          <div className="grid grid-cols-1 md:grid-cols-2 mb-10">
            <div className="pr-8">
              <h3 className="text-2xl font-medium text-gray-800 font-natosans mb-6 underline">
                Professional Playground
              </h3>
              <h2 className="text-[18px] text-gray-700 leading-[1.8]">
                My experience has given me a wide range of skills and expertise
                in various tools and programming languages. Here are just a few
                examples of tools and technologies that I am comfortable using
                <span className="inline-block pl-1">
                  <MoveUpRight strokeWidth={1.5} size={16} className="" />
                </span>
              </h2>
            </div>

            {/* 🔥 Dev Icons Loop */}
            <div>
              <div className="flex flex-wrap gap-2">
                {devicons.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center border border-gray-300 rounded-md p-2 w-26 hover:shadow-md transition"
                  >
                    <img
                      src={item.icon}
                      alt={item.name}
                      className=" object-contain"
                    />
                    <span className="text-sm mt-2 text-gray-600">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="w-80">{/* Future content */}</div>
          </div>
        </div>
      </div>
    </>
  );
};

const Work = () => {
  const { images, icons } = useAssets();

  // 🔥 Dev icons object array

  return (
    <>
      <div className="test w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-16">
          <h2 className="p-0 m-0">
            <span className="text-6xl text-gray-800 font-extralight font-natosans">
              Work &
            </span>
            <span className="text-pink-800"> Experiences .</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border-1 border-gray-100 min-h-30 overflow-hidden">
            <div className="cliptask overflow-hidden ">
              <img src={images.apptest} alt="" className="w-full" />
            </div>

            <div className="py-4 px-2">
              <h2 className="text-[20px] underline pb-2.5">
                <span className=""> SRE - NGINX Reverse Proxy with SSL</span>
              </h2>

              <p className="text-[16px] text-gray-700 leading-[1.6]">
                The present project provides an automated solution for deploying
                a simple web application with Nginx as a reverse proxy and SSL
                certificates from Lets Encrypt.
              </p>

              <div className="cursor-pointer py-4 flex justify-end">
                <img src={icons.github} alt="" className="w-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const Rohit = () => {
  return (
    <>
      <main className="bg-gray-50 h-[100%] relative">
        <Tobbar />
        <Navbar />
        <Hero />
        <AboutMe />
        <Skills />
        <Work />
      </main>
    </>
  );
};
