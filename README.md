# 🎬 Vintage Blue Productions

**Vintage Blue Productions** is a portfolio and showcase website for an Algerian film production company. The site presents the studio's vision, creative team, services, and body of work , with a bold cinematic aesthetic built around deep blues and a signature red accent.

> *"To build a contemporary Algerian cinema that fully embraces its roots while engaging in dialogue with the world."*

---

## 🎥 What the Site Presents

The website is structured as a single-page cinematic experience featuring:

- **Home** — A full-screen Ken Burns image slideshow with an animated word rotator and a countdown timer to an upcoming project launch
- **About** — The studio's vision (*Authenticity and Emotion*) and mission (*Sincere and Powerful Storytelling*), presented alongside a crew section profiling each team member
- **Services** — Four core offerings: Feature Films & Documentaries, Television & Streaming Series, Corporate & Institutional Films, and Short Films & Web Content
- **Amine Kais** — A dedicated section for the lead figure of the production house, with an IMDb profile link
- **Works** — A gallery of completed and ongoing projects including short films and festival selections (e.g. *"Maybe One Day"* screened at the Oran Film Festival)
- **Media** — Press coverage, Canal+ appearances, red carpet moments, and festival highlights
- **Investment** — Information for potential co-producers and investors
- **Contact** — A contact form powered by Formspree with social media links (Facebook, YouTube, Instagram, IMDb)

---

## 🖥️ Tech Stack

- **HTML5** — Semantic structure and single-page layout
- **CSS3** — Responsive design with custom media queries, animations, and a cinematic dark theme
- **JavaScript (ES6+)** — Ken Burns slideshow, countdown timer, animated word rotator, menu blur effect, and contact form handling
- **Google Fonts** — Raleway, Dosis, Montserrat, Oswald
- **Formspree** — Serverless contact form submission
- **Cloudflare** — Email obfuscation and CDN

---

## 🚀 Getting Started

### Prerequisites

- [Git](https://git-scm.com/) installed on your machine

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Kahinasd/vintage-bleue.git
   ```

2. **Navigate to the project folder**

   ```bash
   cd vintage-bleue
   ```

3. **Open in your browser**

   Open `index.html` directly in your browser, or use a local dev server:

   ```bash
   npx serve .
   ```

> **Note:** Some features (Ken Burns slideshow, film grain overlay) depend on local assets in the `img/` folder and JavaScript files in `js/`. Make sure these are present for the full experience.

---

## 📁 Project Structure

```
vintage-bleue/
├── index.html           # Main single-page entry point
├── css/
│   ├── style.css        # Main styles
│   └── plugins.css      # Plugin styles
├── js/
│   ├── hombre.js        # Core UI interactions
│   ├── plugins.js       # Bundled plugins
│   └── countdown.js     # Countdown timer
├── img/
│   ├── crew/            # Crew member photos
│   ├── festival oran/   # Festival gallery images
│   └── *.jpg / *.webp   # Section background images
└── README.md
```

## 👤 Author

**Kahina** — [@Kahinasd](https://github.com/Kahinasd)

---

© 2025 Vintage Blue Productions. All Rights Reserved.
