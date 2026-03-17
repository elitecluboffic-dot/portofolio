# Bustanul Labib Alwasi — Portfolio

A modern, interactive frontend developer portfolio built with **React**, featuring:

- 🌑 Dark theme with green/cyan accent
- ⚛️ Matrix rain canvas animation
- ✍️ Typewriter effect hero title
- 🖱️ Custom animated cursor
- 📊 Animated skill progress bars
- 🔍 Filterable projects grid
- 📬 Contact form
- 📱 Fully responsive

## Tech Stack

- React 18
- CSS Modules (no Tailwind dependency — pure CSS variables)
- Google Fonts: Syne + DM Mono

## Getting Started

```bash
npm install
npm start
```

## Build for Production

```bash
npm run build
```

The `build/` folder is ready to deploy to Cloudflare Pages or any static host.

## Deploy to Cloudflare Pages

1. Push this repo to GitHub
2. Go to [Cloudflare Pages](https://pages.cloudflare.com/)
3. Connect your GitHub repo
4. Set build command: `npm run build`
5. Set output directory: `build`
6. Deploy 🚀

## Customization

- **Personal info**: Edit `src/components/About.jsx`
- **Projects**: Edit the `PROJECTS` array in `src/components/Projects.jsx`
- **Skills**: Edit the `SKILLS` array in `src/components/Skills.jsx`
- **Social links**: Edit `src/components/Contact.jsx`
- **Resume**: Replace `public/resume.pdf` with your actual CV

## License

MIT
