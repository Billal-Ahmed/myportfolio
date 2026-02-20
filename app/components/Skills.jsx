"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaDocker,
  FaGitAlt,
  FaLinux,
  FaTerminal,
  FaBrain,
  FaRobot,
  FaMicrochip,
  FaCogs,
  FaServer,
  FaCode,
  FaDatabase,
  FaLaptopCode,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiBootstrap,
  SiTailwindcss,
  SiExpress,
  SiFlask,
  SiMongodb,
  SiMysql,
  SiLangchain,
} from "react-icons/si";
import { skills } from "@/app/data/portfolio";

const iconMap = {
  FaReact: FaReact,
  SiNextdotjs: SiNextdotjs,
  SiJavascript: SiJavascript,
  SiTypescript: SiTypescript,
  FaHtml5: FaHtml5,
  FaCss3Alt: FaCss3Alt,
  SiBootstrap: SiBootstrap,
  SiTailwindcss: SiTailwindcss,
  FaNodeJs: FaNodeJs,
  SiExpress: SiExpress,
  FaPython: FaPython,
  SiFlask: SiFlask,
  FaServer: FaServer,
  FaBrain: FaBrain,
  SiLangchain: SiLangchain,
  FaRobot: FaRobot,
  FaMicrochip: FaMicrochip,
  FaCogs: FaCogs,
  SiMongodb: SiMongodb,
  SiMysql: SiMysql,
  FaDocker: FaDocker,
  FaGitAlt: FaGitAlt,
  FaLinux: FaLinux,
  FaTerminal: FaTerminal,
};

const categoryIcons = {
  Frontend: <FaLaptopCode />,
  Backend: <FaServer />,
  "AI & LLMs": <FaBrain />,
  "Databases & Tools": <FaDatabase />,
};

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">What I Work With</span>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            Tools and technologies I use to build modern applications
          </p>
        </motion.div>

        <div className="skills-categories">
          {skills.map((category, catIdx) => (
            <motion.div
              className="skill-category-card"
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
            >
              <h3 className="skill-category-title">
                {categoryIcons[category.category] || <FaCode />}
                {category.category}
              </h3>
              <div className="skill-items">
                {category.items.map((skill) => {
                  const IconComp = iconMap[skill.icon] || FaCode;
                  return (
                    <span className="skill-item" key={skill.name}>
                      <IconComp />
                      {skill.name}
                    </span>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
