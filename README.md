This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Table of Contents
- [1. Getting Started](#1-getting-started)
  - [1.1. Install dependencies](#11-install-dependencies)
  - [1.2. Development Server](#12-development-server)
  - [1.3. Production Server](#13-production-server)
- [2. Development to production cycle](#2-development-to-production-cycle)
  - [2.1. Working in Development](#21-working-in-development)
  - [2.2. Working with Stage](#22-working-with-stage)
- [3. Learn More](#3-learn-more)

# 1. Getting Started

First, copy the `.env.template` file and create a `.env`: (this is for both development and production servers)

``` cp .env.template .env ```
note: change `NEXT_PUBLIC_SITEURL` value to domain name being used.

## 1.1. Install dependencies

Need to install all dependencies:

```bash
npm install
# or
yarn install
```

## 1.2. Development Server

To run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the pages by modifying the files located in `pages/*.js` or `pages/api/*.js`. The page will auto-update as you edit the file.

## 1.3. Production Server

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

to start the server side. (this can only be done after build)

```bash
npm start
# or
yarn start
```


# 2. Development to production cycle
## 2.1. Working in Development
All developemnt will be committed to `dev` branch

1. `git checkout dev` - to make sure you are on dev branch
2. `git pull` - this is to make sure you have updated content on your branch
3. Make any changes
4. `git commit -m 'message'` to commit changes
5. `git pull` to make sure no changes happen between your changes and github
6. `git push`

All merges to staging will be done end of day or at request

## 2.2. Working with Stage
Stage branch will be used for `next.verus.io` for review

Note: make sure you follow [Getting Started](#1-getting-started) for the `.env` file.

If everything is good, look for pull request (stage to master), and insert your comments if good or there needs to be a fixed.

Upon completion of review a merge from stage to master will be done


# 3. Learn More

To learn about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [CSS documentation](https://tailwindcss.com/docs) - the css being used in this website


