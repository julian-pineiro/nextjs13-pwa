# Next.js 13 + Next-PWA

This is a template project that implements next-pwa with Next.js 13. I had a hard time making the service workers and manifest work with Next.js 13, so I made this template project to help others.

## Getting Started

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Open your browser dev tools and go to the Application tab. You should see the service worker registered and the manifest loaded.

! You need to add your own favicons and icons to the public folder. The project as-is will show this warning on the Application/Manifest tab.