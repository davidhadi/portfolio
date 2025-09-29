import { motion } from "framer-motion";
import { useState } from "react";
import { Github, Linkedin } from "lucide-react";
import Skills from "./Skills";
import Contact from "./Contact";
import image from "../assets/img.png";
import image1 from "../assets/img1.png";

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  const skills = ["Java", "Data Structure", "Spring Boot", "MySQL", "React", "JavaScript","Git", "Github"];

  const projects = [
    {
      title: "AdNetwork",
      description:
        "A portal where client can create his account where they can book advertisement screen and time slot for advertizing anything in different city.S",
      tags: ["React", "Bootstrap", "Spring Boot", "Spring Security", "Node.js", "MySQL"],
      github: "https://github.com/davidhadi/Spring-Boot-Project/tree/main/full-project-Springboot-react-security-jwt-authentication",
    },
    {
      title: "Coffe Corner Web-Application",
      description:
        "Built a coffee-ordering web application with user authentication, profile management, and a shopping cart feature.. Designed the system to support order tracking and admin-side order management for smooth user experience",
      tags: ["React", "Tailwind", "Spring Boot", "Spring Security", "API", "MySQL"],
      github: "https://github.com/davidhadi/Spring-Boot-Project/tree/master",
    },
    {
      title: "R.E.M Committee Web Application",
      description:
        "Created a community-driven web platform where members can join, contribute funds, and support local causes. Enabled transparent donation management to help poor people and address urgent needs in the society",
      tags: ["React", "Tailwind", "Spring Boot", "MySQL"],
      github: "https://github.com/davidhadi",
    },
    {
      title: "College Record Portal",
      description:
        "A portal is an environment where all the process done through the automated computerized method.It includes process like registration of the student’s details, assigning the department, maintenance the record. ",
      tags: ["HTML", "CSS", "Bootstrap", "PHP", "MySQL"],
      github: "https://github.com/davidhadi",
    },
  ];

  return (
    <div className="bg-[#0e141b] text-white min-h-screen font-sans">

     <header className="fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4 border-b border-gray-800 bg-[#0e141b] z-50">
        <h1 className="text-xl font-bold">David</h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6">
          <a href="#home" className="hover:text-orange-400">Home</a>
          <a href="#about" className="hover:text-orange-400">About</a>
          <a href="#skills" className="hover:text-orange-400">Skills</a>
          <a href="#projects" className="hover:text-orange-400">Projects</a>
          <a href="#contact" className="hover:text-orange-400">Contacts</a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </header>

      {/* Spacer to prevent content hiding behind navbar */}
      <div className="h-[72px]"></div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="flex flex-col gap-4 px-6 py-4 md:hidden bg-[#1a2027] border-b border-gray-700">
          <a href="#home" className="hover:text-orange-400">Home</a>
          <a href="#about" className="hover:text-orange-400">About</a>
          <a href="#skills" className="hover:text-orange-400">Skills</a>
          <a href="#projects" className="hover:text-orange-400">Projects</a>
          <a href="#contact" className="hover:text-orange-400">Contacts</a>
        </nav>
      )}

      {/* Hero Section */}
      <section id="home" className="flex flex-col md:flex-row items-center justify-center text-center md:text-left px-6 py-16 gap-20">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl md:text-5xl font-bold">Hello<span className="text-orange-400">.</span></h2>
          <h3 className="text-2xl md:text-3xl font-bold">I'm Shakil Ansari (David)</h3>
          <p className="text-3xl md:text-4xl font-bold text-orange-400">Java Developer | Backend Enthusiast | Problem Solver</p>
          <h5>I'm passionate software engineer who loves building real-world projects, improving daily, and aiming to switch to a better company.</h5>
          <div className="flex gap-8 mt-4">
            <button className="bg-orange-500 px-4 py-2 rounded-md hover:bg-orange-600">Got a project?</button>
            <a href={`${import.meta.env.BASE_URL}resume.pdf`} download>
               <button className="border border-orange-500 px-4 py-2 rounded-md hover:bg-orange-500 hover:text-white">
                My Resume
              </button>
           </a>
          </div>
        </div>
        <img src={image} alt="Profile" className="rounded-full border-4 border-orange-500 w-auto h-auto"/>
      </section>

      {/* Skills Row */}
      <section className="flex flex-wrap justify-center gap-6 bg-gray-900 py-4">
        {skills.map((s, i) => (
          <span key={i} className="text-gray-300 hover:text-orange-400 cursor-pointer">{s}</span>
        ))}
      </section>

      {/* About Me */}
      <section id="about" className="px-6 md:px-20 py-16 grid md:grid-cols-2 gap-5 items-center">
        <img src={image1} alt="Profile" className="rounded-full border-4 border-orange-500 w-auto h-auto"/>
        <div>
          <h3 className="text-3xl font-bold mb-4">About me</h3>
          <p className="text-gray-300 leading-relaxed">
            I am a passionate and dedicated developer with a strong drive for creating innovative and efficient web applications. I enjoy solving challenging problems, learning new technologies, and applying them to build user-friendly, high-performance solutions. With a keen eye for detail and a focus on continuous improvement, I strive to turn ideas into reality while delivering meaningful digital experiences that make a difference.
          </p>
          <div className="flex gap-8 mt-6">
            <div><h4 className="text-2xl font-bold text-orange-400">10+</h4><p>Completed Projects</p></div>
            <div><h4 className="text-2xl font-bold text-orange-400">95%</h4><p>Client satisfaction</p></div>
            <div><h4 className="text-2xl font-bold text-orange-400">3+</h4><p>Years of experience</p></div>
          </div>
          
        </div>
      </section>

      <section id="skills" className="px-6 md:px-20 py-16">
        <h3 className="text-3xl font-bold mb-8">My Skills</h3>
        <Skills />
      </section>

      {/* Projects */}
      <section id="projects" className="px-6 md:px-20 py-16">
        <h3 className="text-3xl font-bold mb-8">Projects</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <motion.div key={i} className="bg-gray-900 p-6 rounded-xl shadow-lg" whileHover={{ scale: 1.03 }}>
              <h4 className="text-xl font-semibold mb-2">{p.title}</h4>
              <p className="text-gray-400 mb-3">{p.description}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {p.tags.map((tag, i) => (
                  <span key={i} className="bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-sm">{tag}</span>
                ))}
              </div>
              <a href={p.github} target="_blank" rel="noreferrer" className="text-orange-400 hover:underline">View Github →</a>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="contact" className="px-6 md:px-20 py-16 text-center">
        <Contact />

      </section >

      {/* Footer */}
      <footer className="text-center py-6 border-t border-gray-800">
        <p className="text-gray-400">David © All rights reserved</p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="https://github.com/davidhadi" target="_blank" rel="noreferrer"><Github /></a>
          <a href="https://www.linkedin.com/in/shakildavid/" target="_blank" rel="noreferrer"><Linkedin /></a>
        </div>
      </footer>
    </div>
  );
}

