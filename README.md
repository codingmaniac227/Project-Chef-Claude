# Chef Claude — AI Recipe Assistant

<!-- PROJECT SHIELDS -->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/codingmaniac227/Project-Chef-Claude" target="_blank" rel="noopener">
    <img src="client/public/chef-claude-icon.png" alt="Logo" width="90" height="90" style="border-radius:50%">
  </a>

  <h3 align="center">Chef Claude — AI Recipe Assistant</h3>

  <p align="center">
    Type the ingredients you have, and Chef Claude suggests a recipe (Markdown formatted) using Anthropic’s Claude.
    <br />
    <a href="https://github.com/codingmaniac227/Project-Chef-Claude" target="_blank" rel="noopener"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://chef-claude-ai-demo.netlify.app/" target="_blank" rel="noopener">View Demo</a>
    ·
    <a href="https://github.com/codingmaniac227/Project-Chef-Claude/issues/new?template=bug_report.yml&labels=bug" target="_blank" rel="noopener">Report Bug</a>
    ·
    <a href="https://github.com/codingmaniac227/Project-Chef-Claude/issues/new?template=feature_request.yml&labels=enhancement" target="_blank" rel="noopener">Request Feature</a>
  </p>
</div>

---

## Table of Contents
<details>
  <summary>Expand</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#built-with">Built With</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

---

## About The Project

<p align="center">
  <img src="screenshot.png" alt="Chef Claude Screenshot" width="520">
</p>

Chef Claude is a small full-stack demo that turns the food in your fridge into a recipe. Enter ingredients, hit **Get a recipe**, and the app calls a secure backend which talks to **Claude** and returns a neatly formatted Markdown recipe.

Highlights:
- Client has **no API keys**; all AI calls go through the backend.
- Markdown rendering for readable, copy-pasteable recipes.
- Deployed with a modern, low-friction stack (Netlify + Render).

<p align="right">(<a href="#chef-claude--ai-recipe-assistant">back to top</a>)</p>

---

## Built With

* [![React][React.js]][React-url]
* [![Vite][Vite.js]][Vite-url]
* **Express** (Node.js) for the API
* **Anthropic SDK** for Claude
* **Netlify** (frontend) + **Render** (backend)
* `react-markdown` for output formatting

<p align="right">(<a href="#chef-claude--ai-recipe-assistant">back to top</a>)</p>

---

## Getting Started

### Prerequisites
- **Node** & **npm**
```sh
npm install npm@latest -g
```

### Installation (local)
1. **Clone the repo**
   ```sh
   git clone https://github.com/codingmaniac227/Project-Chef-Claude.git
   ```

2. **Backend**
   ```sh
   cd Project-Chef-Claude/server
   npm install
   ```
   Create `.env`:
   ```dotenv
   ANTHROPIC_API_KEY=sk-ant-xxxxxxxxxxxxxxxx
   # During local dev the client runs on 5173:
   ALLOWED_ORIGIN=http://localhost:5173
   ```
   Start the API:
   ```sh
   npm run dev
   # API on http://localhost:3001
   ```

3. **Frontend**
   ```sh
   cd ../client
   npm install
   npm run dev
   # App on http://localhost:5173
   ```

> In production, set `VITE_API_BASE_URL` on Netlify to your Render URL (e.g., `https://chef-claude-api.onrender.com`). During local dev the Vite proxy handles `/api` → `localhost:3001`, so no frontend env var is needed.

<p align="right">(<a href="#chef-claude--ai-recipe-assistant">back to top</a>)</p>

---

## Usage

- Type ingredients (e.g., `chicken, pasta, garlic`) and click **Get a recipe**.
- The app calls `POST /api/generate/anthropic` and renders Claude’s Markdown in the UI.
- Try the live demo:  
  <a href="https://chef-claude-ai-demo.netlify.app/" target="_blank" rel="noopener">https://chef-claude-ai-demo.netlify.app/</a>

Troubleshooting tips:
- **CORS error?** Ensure `ALLOWED_ORIGIN` on the backend exactly matches your Netlify site URL.
- **API error from Anthropic?** Confirm your API key and that your account has credits.

<p align="right">(<a href="#chef-claude--ai-recipe-assistant">back to top</a>)</p>

---

## Roadmap

- [x] Claude Haiku integration
- [x] Markdown recipe output
- [ ] Add Mixtral/Mistral endpoint
- [ ] Streaming responses
- [ ] Save/Share recipes

<p align="right">(<a href="#chef-claude--ai-recipe-assistant">back to top</a>)</p>

---

## Contributing

Contributions are welcome!

1. Fork the project  
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)  
3. Commit your changes (`git commit -m 'feat: add AmazingFeature'`)  
4. Push to the branch (`git push origin feature/AmazingFeature`)  
5. Open a Pull Request

<p align="right">(<a href="#chef-claude--ai-recipe-assistant">back to top</a>)</p>

---

## Contact

Marquise Davis – <a href="https://instagram.com/FullStackDemon" target="_blank" rel="noopener">@FullStackDemon</a>  
codingmaniac227@gmail.com  
Project Link: <a href="https://github.com/codingmaniac227/Project-Chef-Claude" target="_blank" rel="noopener">https://github.com/codingmaniac227/Project-Chef-Claude</a>

<p align="right">(<a href="#chef-claude--ai-recipe-assistant">back to top</a>)</p>

---

## Acknowledgments

- React + Vite + Express communities  
- Anthropic for Claude  
- Netlify & Render for smooth deploys

<p align="right">(<a href="#chef-claude--ai-recipe-assistant">back to top</a>)</p>

---

<!-- MARKDOWN LINKS & IMAGES -->
[contributors-shield]: https://img.shields.io/github/contributors/codingmaniac227/Project-Chef-Claude?style=for-the-badge
[contributors-url]: https://github.com/codingmaniac227/Project-Chef-Claude/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/codingmaniac227/Project-Chef-Claude?style=for-the-badge
[forks-url]: https://github.com/codingmaniac227/Project-Chef-Claude/network/members
[stars-shield]: https://img.shields.io/github/stars/codingmaniac227/Project-Chef-Claude?style=for-the-badge
[stars-url]: https://github.com/codingmaniac227/Project-Chef-Claude/stargazers
[issues-shield]: https://img.shields.io/github/issues/codingmaniac227/Project-Chef-Claude?style=for-the-badge
[issues-url]: https://github.com/codingmaniac227/Project-Chef-Claude/issues
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/marquise-davis/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://react.dev/
[Vite.js]: https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=FFD62E
[Vite-url]: https://vitejs.dev/
