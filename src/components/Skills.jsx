import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    { name: "Java", level: "Advanced" },
    { name: "Data Structure", level: "Intermediate" },
    { name: "Spring Boot", level: "Advanced" },
    { name: "Spring Security", level: "Beginner" },
    { name: "Spring AOP", level: "Advanced" },
    { name: "Spring", level: "Intermediate" },
    { name: "React", level: "Intermediate" },
    { name: "MySQL & MongoDB", level: "Beginner" },
    { name: "Docker", level: "Beginner" },
    { name: "Git & GitHub", level: "Intermediate" },
    { name: "C & C++", level: "Intermediate" },
    { name: "HTML/CSS", level: "Advanced" },
    
  ];

  return (
    <section>
      <div className="max-w-8xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-10"
        >
          My Skills
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-gray-900 rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-xl font-semibold">{skill.name}</h3>
              <p className="text-gray-400">{skill.level}</p>
              <div className="w-full bg-gray-700 h-2 rounded-full mt-3">
                <motion.div
                  className="bg-blue-500 h-2 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: skill.level === "Advanced" ? "100%" : skill.level === "Intermediate" ? "70%" : "40%" }}
                  transition={{ duration: 1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
