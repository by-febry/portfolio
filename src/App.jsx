import { useRef, useState, useEffect } from "react";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import ShinyText from "./components/ShinyText/ShinyText";
import BlurText from "./components/BlurText/BlurText";
import ScrambledText from "./components/ScrambledText/ScrambledText";
import SplitText from "./components/SplitText/SplitText";
import Lanyard from "./components/Lanyard/Lanyard";
import GlassIcons from "./components/GlassIcons/GlassIcons";
import { listTools, listProject } from "./data";
import ChromaGrid from "./components/ChromaGrid/ChromaGrid";
import ProjectModal from "./components/ProjectModal/ProjectModal"; // <-- IMPORT MODAL
import Aurora from "./components/Aurora/Aurora";
import ScrollStack, { ScrollStackItem } from "./components/Lenis/Lenis";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

// Import Certificates
import ReactCert from "/assets/Certificates/React.png";
import SoftwareEngCert from "/assets/Certificates/softwareeng.png";
import HtmlCssCert from "/assets/Certificates/htmlcss.png";
import JavascriptCert from "/assets/Certificates/Javascript.png";
import DevOpsCert from "/assets/Certificates/DevOps.png";
import GithubCert from "/assets/Certificates/Github.png";
import NodeCert from "/assets/Certificates/Node.png";
// ..
AOS.init();

function App() {
  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const [selectedProject, setSelectedProject] = useState(null); // null = modal tertutup

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };
  // -------------------------

  useEffect(() => {
    const isReload =
      performance.getEntriesByType("navigation")[0]?.type === "reload";

    if (isReload) {
      // Redirect to base URL
      const baseUrl = window.location.origin + "/";
      window.location.replace(baseUrl);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full -z-10 ">
        <Aurora
          colorStops={["#577870", "#1F97A6", "#127B99"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
          <div className="animate__animated animate__fadeInUp animate__delay-3s">
            <div className="flex items-center gap-3 mb-6 bg bg-zinc-800 w-fit p-4 rounded-2xl">
              <img src="./assets/char1.png" className="w-10 rounded-md" />
              <q>Do it scared.</q>
            </div>
            <h1 className="text-5xl font-bold mb-6">
              <ShinyText text="Hi I'm Christian Mark Panopio" disabled={false} speed={3} className='custom-class' />
            </h1>
            <BlurText
              text="A passionate Software developer dedicated to crafting modern, high-performance digital experiences through innovative and user-friendly solutions."
              delay={150}
              animateBy="words"
              direction="top"
              className=" mb-6"
            />
            <div className="flex items-center sm:gap-4 gap-2">
              <a 
                href="./assets/CV.pdf" 
                download="Christian_Mark_Panopio_CV.pdf" 
                className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full border border-gray-700 hover:bg-[#222] transition-colors"
              >
                <ShinyText text="Download CV" disabled={false} speed={3} className="custom-class" />
              </a>

              <a href="#project" className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full border border-gray-700 hover:bg-[#222] transition-colors">
                <ShinyText text="Explore My Projects" disabled={false} speed={3} className="custom-class" />
              </a>
            </div>

          </div>
          <div className="md:ml-auto animate__animated animate__fadeInUp animate__delay-4s">
            <ProfileCard
              name="Christian Mark P"
              title="Software Developer"
              handle="char"
              status="Online"
              contactText="Contact Me"
              avatarUrl="./assets/char.png"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => console.log('Contact clicked')}
            />
          </div>
        </div>
        {/* About */}
        <div className="mt-15 mx-auto w-full max-w-[1600px] rounded-3xl border-[5px] border-violet-500/40 shadow-[0_0_30px_rgba(168,85,247,0.4)] bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#1a1a1a] p-6" id="about">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 pt-0 px-8" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
            <div className="basis-full md:basis-7/12 pr-0 md:pr-8 border-b md:border-b-0 md:border-r border-violet-500/30">
              {/* Left Column */}
              <div className="flex-1 text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
                  About Me
                </h2>

                <BlurText
                  text="I'm Christian Mark Panopio, a 4th-year IT student and aspiring full-stack developer who enjoys building modern, functional, and user-friendly applications. I leverage AI tools to boost my productivity, learn faster, and create smarter solutions. I may still be early in my journey, with one completed project so far, but I’m always eager to learn new technologies, improve my skills, and take on projects that help me grow as a developer. My goal is to build practical, clean, and scalable digital products that make an impact."
                  delay={150}
                  animateBy="words"
                  direction="top"
                  className="text-base md:text-lg leading-relaxed mb-10 text-gray-300"
                />

                <div className="flex flex-col sm:flex-row items-center sm:justify-between text-center sm:text-left gap-y-8 sm:gap-y-0 mb-4 w-full">
                  <div>
                    <h1 className="text-3xl md:text-4xl mb-1">
                      1<span className="text-violet-500"></span>
                    </h1>
                    <p>Project Finished</p>
                  </div>
                  <div>
                    <h1 className="text-3xl md:text-4xl mb-1">
                      0<span className="text-violet-500"></span>
                    </h1>
                    <p>Years of Experience</p>
                  </div>
                  <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600" data-aos-once="true">
                    <h1 className="text-3xl md:text-4xl mb-1">
                      4th<span className="text-violet-500"> Year</span>
                    </h1>
                    <p>Undergraduate</p>
                  </div>
                </div>


                <ShinyText
                  text="Working with heart, creating with mind."
                  disabled={false}
                  speed={3}
                  className="text-sm md:text-base text-violet-400"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="basis-full md:basis-5/12 pl-0 md:pl-8 overflow-hidden max-w-full flex justify-center ">
              <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
            </div>
          </div>

        </div>
        <div className="tools mt-32">
          <h1 className="text-4xl/snug font-bold mb-4" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" >Tools & Technologies</h1>
          <p className="w-2/5 text-base/loose opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">My Profesional Skills</p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">

            {listTools.map((tool) => (
              <div
                key={tool.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad} data-aos-once="true"
                className="flex items-center gap-4 p-4 border border-zinc-700 rounded-xl bg-zinc-900/60 backdrop-blur-md hover:bg-zinc-800/80 transition-all duration-300 group shadow-lg"
              >
                <img
                  src={tool.gambar}
                  alt="Tools Image"
                  className="w-16 h-16 object-contain bg-zinc-800 p-2 rounded-lg group-hover:bg-zinc-900 transition-all duration-300"
                />
                <div className="flex flex-col overflow-hidden">
                  <div className="truncate">
                    <ShinyText
                      text={tool.nama}
                      disabled={false}
                      speed={3}
                      className="text-lg font-semibold block"
                    />
                  </div>
                  <p className="text-sm text-zinc-400 truncate">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* About */}

        {/* Projects */}
        <div className="project mt-32 py-10" id="project" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true"></div>
        <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Project</h1>
        <p className="text-base/loose text-center opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Showcasing a selection of projects that reflect my skills, creativity, and passion for building meaningful digital experiences.</p>
        <div className="project-box mt-14" >

          <div style={{ height: 'auto', position: 'relative' }} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" data-aos-once="true" >
            <ChromaGrid
              items={listProject}
              onItemClick={handleProjectClick} // Send function to handle click
              radius={500}
              damping={0.45}
              fadeOut={0.6}
              ease="power3.out"
            />
          </div>
        </div>
        {/* Projects */}

        {/* Lenis Scroll Stack - Certificates */}
        <div className="mt-32">
          <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Certificates</h1>
          <p className="text-base/loose text-center opacity-50 mb-10" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">My professional certifications and achievements</p>
          <ScrollStack
            itemDistance={200}
            itemStackDistance={30}
            stackPosition="20%"
            baseScale={0.85}
            itemScale={0.02}
            rotationAmount={0}
            blurAmount={0}
          >
            <ScrollStackItem>
              <div className="h-full grid md:grid-cols-2 gap-6 items-center" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100" data-aos-once="true">
                <div>
                  <h3 className="text-3xl font-bold mb-3">React</h3>
                  <p className="text-sm opacity-70">Certificate of completion for React.</p>
                </div>
                <img src={ReactCert} alt="React Certificate" className="w-full h-full object-contain rounded-lg" />
              </div>
            </ScrollStackItem>
            <ScrollStackItem>
              <div className="h-full grid md:grid-cols-2 gap-6 items-center" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200" data-aos-once="true">
                <div>
                  <h3 className="text-3xl font-bold mb-3">Software Engineering</h3>
                  <p className="text-sm opacity-70">Certificate of completion for Software Engineering.</p>
                </div>
                <img src={SoftwareEngCert} alt="Software Engineering Certificate" className="w-full h-full object-contain rounded-lg" />
              </div>
            </ScrollStackItem>
            <ScrollStackItem>
              <div className="h-full grid md:grid-cols-2 gap-6 items-center" data-aos="fade-up" data-aos-duration="800" data-aos-delay="300" data-aos-once="true">
                <div>
                  <h3 className="text-3xl font-bold mb-3">HTML & CSS</h3>
                  <p className="text-sm opacity-70">Certificate of completion for HTML & CSS.</p>
                </div>
                <img src={HtmlCssCert} alt="HTML & CSS Certificate" className="w-full h-full object-contain rounded-lg" />
              </div>
            </ScrollStackItem>
            <ScrollStackItem>
              <div className="h-full grid md:grid-cols-2 gap-6 items-center" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400" data-aos-once="true">
                <div>
                  <h3 className="text-3xl font-bold mb-3">JavaScript</h3>
                  <p className="text-sm opacity-70">Certificate of completion for JavaScript.</p>
                </div>
                <img src={JavascriptCert} alt="Javascript Certificate" className="w-full h-full object-contain rounded-lg" />
              </div>
            </ScrollStackItem>
            <ScrollStackItem>
              <div className="h-full grid md:grid-cols-2 gap-6 items-center" data-aos="fade-up" data-aos-duration="800" data-aos-delay="500" data-aos-once="true">
                <div>
                  <h3 className="text-3xl font-bold mb-3">DevOps</h3>
                  <p className="text-sm opacity-70">Certificate of completion for DevOps.</p>
                </div>
                <img src={DevOpsCert} alt="DevOps Certificate" className="w-full h-full object-contain rounded-lg" />
              </div>
            </ScrollStackItem>
            <ScrollStackItem>
              <div className="h-full grid md:grid-cols-2 gap-6 items-center" data-aos="fade-up" data-aos-duration="800" data-aos-delay="600" data-aos-once="true">
                <div>
                  <h3 className="text-3xl font-bold mb-3">GitHub</h3>
                  <p className="text-sm opacity-70">Certificate of completion for GitHub.</p>
                </div>
                <img src={GithubCert} alt="Github Certificate" className="w-full h-full object-contain rounded-lg" />
              </div>
            </ScrollStackItem>
            <ScrollStackItem>
              <div className="h-full grid md:grid-cols-2 gap-6 items-center" data-aos="fade-up" data-aos-duration="800" data-aos-delay="700" data-aos-once="true">
                <div>
                  <h3 className="text-3xl font-bold mb-3">Node.js</h3>
                  <p className="text-sm opacity-70">Certificate of completion for Node.js.</p>
                </div>
                <img src={NodeCert} alt="Node.js Certificate" className="w-full h-full object-contain rounded-lg" />
              </div>
            </ScrollStackItem>
          </ScrollStack>
        </div>

        {/* Contacts */}
        <div className="kontak mt-32 sm:p-10 p-0" id="contact">
          <h1
            className="text-4xl mb-2 font-bold text-center"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Contact
          </h1>
          <p
            className="text-base/loose text-center mb-10 opacity-50"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-once="true"
          >
            Get in touch with me
          </p>

          {/* Contact Form */}
          <div className="flex justify-center">
            <div className="w-full max-w-2xl">
              <form
                action="https://formsubmit.co/cmepanopio@gmail.com"
                method="POST"
                className="bg-zinc-800 p-10 w-full rounded-md"
                autoComplete="off"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="500"
                data-aos-once="true"
              >
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="font-semibold">Full Name</label>
                    <input
                      type="text"
                      name="Name"
                      placeholder="Input Name..."
                      className="border border-zinc-500 p-2 rounded-md"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-semibold">Email</label>
                    <input
                      type="email"
                      name="Email"
                      placeholder="Input Email..."
                      className="border border-zinc-500 p-2 rounded-md"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="font-semibold">Message</label>
                    <textarea
                      name="message"
                      id="message"
                      cols="45"
                      rows="7"
                      placeholder="Message..."
                      className="border border-zinc-500 p-2 rounded-md"
                      required
                    ></textarea>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full w-full cursor-pointer border border-gray-700 hover:bg-[#222] transition-colors"
                    >
                      <ShinyText text="Send" disabled={false} speed={3} className="custom-class" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* Kontak */}
      </main>

      <ProjectModal
        isOpen={!!selectedProject}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </>
  )
}

export default App
