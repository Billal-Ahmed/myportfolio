"use client";

import { FaGithub, FaLinkedinIn, FaEnvelope, FaInstagram } from "react-icons/fa";
import { personalInfo } from "@/app/data/portfolio";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-socials">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="footer-social-link"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href={personalInfo.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>
        <p className="footer-text">
          © {year} <span>{personalInfo.name}</span>. {t("footer.text")}
        </p>
      </div>
    </footer>
  );
}
