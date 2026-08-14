# Welcome to your Lovable project

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Open your project in the [Lovable editor](https://lovable.dev) and keep building.

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: connect the project to GitHub and every change made in Lovable is committed straight to your repository.
- **Full ownership**: this code is yours. Push to your repository and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Contact form (Formspree)

This project uses a frontend-only Formspree endpoint for the contact form. To enable it locally, create a `.env.local` file in the project root with the following content (replace the placeholder with your Formspree form endpoint):

```bash
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/yourFormId
```

The app falls back to opening the user's email client (`mailto:`) when the env variable is not set. Do NOT commit `.env.local` to source control.

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS
