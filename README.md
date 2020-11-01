This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, copy the `.env` file and create a:

- `.env.development.local` if you intend to run a development server
- `.env.production.local` if you intend to run a production server

## Install dependencies

Need to install all dependencies:

```bash
npm install
# or
yarn install
```

## Development Server

To run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the pages by modifying the files located in `pages/*.js` or `pages/api/*.js`. The page will auto-update as you edit the file.

## Production Server

There are two modes for production server:

1. Full Static
2. Server Side

This website is designed having Server Side (API) requirements. Full Static will not be an option.
First run below to build the app.

```bash
npm run build
# or
yarn build
```

<!-- You will have an output showing the file load sizes forWhat you are looking for what type of file was produced on the build. if any file has `λ` then you will be required to run Server Side.
```bash
λ  (Server)  server-side renders at runtime (uses getInitialProps or getServerSideProps)
○  (Static)  automatically rendered as static HTML (uses no initial props)
●  (SSG)     automatically generated as static HTML + JSON (uses getStaticProps)
```

To run full static, you must export the files. (This can only be done after build)
```bash
npm export
# or
yarn export
```
By default, the export will generate an `out` directory, which can be served by any static hosting service or CDN. -->

to start the server side. (this can only be done after build)

```bash
npm start
# or
yarn start
```

## Learn More

To learn about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
