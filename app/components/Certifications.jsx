"use client";

import { motion } from "framer-motion";
import { FaCertificate, FaTrophy } from "react-icons/fa";
import { certifications, achievements } from "@/app/data/portfolio";

export default function Certifications() {
  return (
    <section className="section" id="certifications">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">Credentials</span>
          <h2 className="section-title">Certifications & Achievements</h2>
          <p className="section-subtitle">
            Professional certifications and competition wins
          </p>
        </motion.div>

        {/* Certifications grid */}
        <div className="certs-grid">
          {certifications.map((cert, idx) => (
            <motion.div
              className="cert-card"
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
            >
              <div className="cert-icon">
                <FaCertificate />
              </div>
              <h4 className="cert-name">{cert.name}</h4>
              <p className="cert-org">{cert.org}</p>
            </motion.div>
          ))}
        </div>

        {/* Achievements */}
        <motion.div
          style={{ marginTop: "64px" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3
            className="section-title"
            style={{ fontSize: "28px", textAlign: "center", marginBottom: "32px" }}
          >
            🏆 Achievements
          </h3>
          <div className="achievements-list">
            {achievements.map((achievement, idx) => (
              <motion.div
                className="achievement-item"
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <FaTrophy className="achievement-icon" />
                <span className="achievement-text">{achievement}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
