"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaEnvelope, FaBriefcase, FaGlobe } from "react-icons/fa";
import {
  personalInfo,
  aboutText,
  stats,
  languages,
} from "@/app/data/portfolio";
import { useLanguage } from "../context/LanguageContext";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export default function About() {
  const paragraphs = aboutText.split("\n\n");
  const { t } = useLanguage();

  return (
    <section className="section" id="about">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">{t("about.label")}</span>
          <h2 className="section-title">{t("about.title")}</h2>
          <p className="section-subtitle">
            {t("about.subtitle")}
          </p>
        </motion.div>

        <div className="about-grid">
          {/* Left: Image + About text + stats */}
          <div>
            <motion.div 
              className="about-image-container"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Image 
                src="/bilal.png" 
                alt="Bilal Ahmed" 
                width={400} 
                height={400} 
                className="about-image"
              />
            </motion.div>

            <div className="about-text">
              {paragraphs.map((p, i) => (
                <motion.p
                  key={i}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {p}
                </motion.p>
              ))}
            </div>

            <motion.div
              className="about-stats"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {stats.map((stat) => (
                <div className="stat-card" key={stat.label}>
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Info cards + languages */}
          <motion.div
            className="about-info-cards"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="info-card">
              <div className="info-icon">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h4>{t("about.location")}</h4>
                <p>{personalInfo.location}</p>
              </div>
            </div>
            <div className="info-card">
              <div className="info-icon">
                <FaEnvelope />
              </div>
              <div>
                <h4>{t("about.email")}</h4>
                <p>{personalInfo.email}</p>
              </div>
            </div>
            <div className="info-card">
              <div className="info-icon">
                <FaBriefcase />
              </div>
              <div>
                <h4>{t("about.experience")}</h4>
                <p>MERN Stack Developer at K2PeakTechnologies</p>
              </div>
            </div>
            <div className="info-card">
              <div className="info-icon">
                <FaGlobe />
              </div>
              <div>
                <h4>{t("about.languages")}</h4>
                <p>{languages.map((l) => l.name).join(", ")}</p>
              </div>
            </div>

            <div>
              <div className="languages-row">
                {languages.map((lang) => (
                  <span className="lang-badge" key={lang.name}>
                    {lang.name} — {lang.level}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
