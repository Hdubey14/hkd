# Xlligent Softwares Website

The company website is built with React and Vite. It brings together information about Xlligent Softwares, its business software products, services, team, projects and contact options.

## What is included

- Home, About, Careers, Contact and Services pages
- Product catalogue and individual product pages
- Project portfolio and individual project pages
- Team, Reviews and FAQ pages
- Shared navigation, footer, page loader, contact form and AI assistant
- SEO titles and descriptions, canonical URLs, social sharing metadata, structured organization data, `robots.txt` and `sitemap.xml`
- A separate Express server for sending contact-form enquiries by email

## Requirements

- Node.js 20.19+ or 22.12+ is recommended for the current Vite toolchain
- npm

## Run the website locally

1. Open a terminal in the project folder.
2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the local URL printed by Vite, usually `http://localhost:5173`.

## Production build

Run the following commands from the project folder:

```bash
npm run build
npm run preview
```

Vite writes the production website to `dist/`. Deploy the contents of that folder to a static host configured to serve the React application for its page routes. The files in `public/`, including `robots.txt` and `sitemap.xml`, are copied to the root of the production build.

## Contact form server

The optional Express server lives in `server/`. It uses SMTP credentials to send contact-form enquiries.

1. Copy `server/.env.example` to `server/.env`.
2. Fill in the SMTP settings and the inbox that should receive enquiries. Keep these values private.
3. Install server dependencies and start the API:

   ```bash
   cd server
   npm install
   npm run dev
   ```

The server defaults to port `5000`. Configure your production frontend origin in the server's CORS settings before deploying; the current development configuration allows localhost only. Do not commit `.env` files or SMTP credentials.

## SEO notes

- The site uses the canonical domain `https://xlligent-softwares.com/`.
- Page titles, descriptions, canonical links and social metadata are updated for the active React route.
- `public/robots.txt` points crawlers to `https://xlligent-softwares.com/sitemap.xml`.
- The sitemap lists the main pages, known product pages and known project pages. Update it when public routes or slugs change.
- Search rankings are not guaranteed by metadata alone. Useful page content, performance, accessibility, quality backlinks and indexing in Google Search Console also matter.
- Because this is a client-rendered React app, route metadata is updated in the browser. If reliable first-response HTML metadata and richer search previews are needed for every route, consider adding prerendering or server-side rendering as a separate improvement.

## Useful commands

```bash
npm run dev      # Start the local development server
npm run build    # Create the production build
npm run preview  # Preview the production build locally
npm run lint     # Run Oxlint
```
