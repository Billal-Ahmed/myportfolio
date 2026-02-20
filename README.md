# 🚀 Bilal Ahmed — Developer Portfolio

A modern, fully responsive **personal portfolio website** built with **Next.js 14** and **React**, showcasing projects, skills, experience, certifications, and contact information.

**Live at:** [github.com/Billal-Ahmed](https://github.com/Billal-Ahmed)

---

## ✨ Features

- **Hero Section** — Animated introduction with name, title, and social links
- **About** — Personal bio with key stats (CGPA, GitHub repos, certifications)
- **Skills** — Categorized tech stack (Frontend, Backend, AI & LLMs, Databases & Tools)
- **Projects** — Showcase of 6+ real-world projects with tech stacks and GitHub links
- **Experience & Education** — Timeline of work experience and academic background
- **Certifications** — 13+ professional certifications from Google, Harvard, Coursera & more
- **Contact** — Direct contact via email, phone, and social media
- **Fully Responsive** — Works seamlessly on mobile, tablet, and desktop

---

## 🛠️ Tech Stack

| Layer       | Technology                          |
|-------------|-------------------------------------|
| Framework   | Next.js 14 (App Router)             |
| UI Library  | React 18                            |
| Styling     | CSS Modules / Global CSS            |
| Icons       | React Icons (Font Awesome, Simple Icons) |
| Language    | JavaScript (ES6+)                   |
| Deployment  | Vercel (recommended)                |

---

## 📁 Project Structure

```
Portfolio_App/
├── app/
│   ├── components/
│   │   ├── Hero.jsx          # Landing / intro section
│   │   ├── About.jsx         # About me + stats
│   │   ├── Skills.jsx        # Tech skills grid
│   │   ├── Projects.jsx      # Project cards
│   │   ├── Experience.jsx    # Work & education timeline
│   │   ├── Certifications.jsx
│   │   ├── Contact.jsx       # Contact form & links
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── portfolio.js      # All content data (single source of truth)
│   ├── globals.css
│   ├── layout.js
│   └── page.js
├── next.config.mjs
├── package.json
└── README.md
```

---

## ⚡ Getting Started

### Prerequisites
- Node.js `v18+`
- npm or yarn

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Billal-Ahmed/portfolio-app.git
cd portfolio-app

# 2. Install dependencies
npm install

# 3. Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## 🎨 Customization

All portfolio content lives in a **single file**: [`app/data/portfolio.js`](app/data/portfolio.js)

To personalize this portfolio, simply update:

| Export            | What it controls                          |
|-------------------|-------------------------------------------|
| `personalInfo`    | Name, title, email, phone, social links   |
| `aboutText`       | About me paragraph                        |
| `stats`           | Key stats shown in the About section      |
| `skills`          | Tech skills by category                   |
| `projects`        | Project cards with title, description, links |
| `experience`      | Work experience entries                   |
| `education`       | Education history                         |
| `certifications`  | Certifications list                       |
| `achievements`    | Achievements & awards                     |

---

## 🌐 Deployment

This project is optimized for **Vercel** (recommended):

1. Push to GitHub
2. Import the repo at [vercel.com](https://vercel.com)
3. Deploy with zero configuration ✅

---

## 📬 Contact

**Bilal Ahmed**
- 📧 [bilalahmedskardu@gmail.com](mailto:bilalahmedskardu@gmail.com)
- 💼 [LinkedIn](https://linkedin.com/in/codeskd)
- 🐙 [GitHub](https://github.com/Billal-Ahmed)
- 📍 Gilgit-Baltistan, Pakistan

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
