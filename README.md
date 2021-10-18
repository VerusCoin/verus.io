# Next.js Boilerplate

> Easy to use front-end boilerplate to start developing your Next.js application right away 💯

[**Learn More**](#learn-more)

---

## Highlights

- Features all the benefits of Next.js 10
- Uses Styled Components for CSS-in-JS
- Typescript
- Lint your code with `husky`
- Normalizes default browser styles with `normalize.css`
- Automatically formats your code by using `Prettier`
- Friendly errors & warnings
- Includes Twitter's famous Bootstrap grid to quickly build your app
- Automatically optimizes all your SVGs

## File Tree

```bash
├── components            # Component folder
│   └── elements          # Elements (e.g. <a>, <h1>, <button>)
│   └── molecules         # Molecules  (e.g. larger elements)
│   └── layouts           # Layouts (e.g. main layout, section layouts)
│   └── sections          # Page Sections (e.g. large content blocks)
├── docs                  # Documentation
├── pages                 # Pages folder
│   └── _app.tsx          # Main page file
│   └── _document.tsx     # Custom document
│   └── index.tsx         # Home page
│   └── <page>.tsx        # <page> represents the page URI for each site page
├── public                # Folder for static assets
│   ├── favicon           # Favicon - https://realfavicongenerator.net/
├── styles                # Style folder
│   └── global.ts         # Global styling
│   └── themes.ts         # Themes
├── types                 # Types folder
│   └── index.d.ts        # Your default project Typescript declaration file
│   └── <type>.ts         # Typescript declaration <type> = component folder or specific component
├──  next-env.d.ts        # Next.js Typescript declaration file (leave unchanged)
├──  styled.d.ts          # Styled Components Typescript declaration file
├──  tsconfig.json        # Typescript config
├── .babelrc              # Babel config
├── .eslintrc.json        # Eslint config
├── .priettierc           # Prettier config
├── .stylelintrc          # Stylelint config
```

## Usage

```bash
# Install dependencies

yarn install

# Start local webserver at port 3000

yarn dev

# Run all linters

yarn lint:all

# Build app for production (gets output in the 'dist' directory)

yarn build
```

## Learn More

To learn more about Next.js and the other tools, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Typescript](https://www.typescriptlang.org/docs/) - Introduction to TypeScript
- [Styled Components](https://styled-components.com/docs) - Use the best bits of ES6 and CSS to style your apps without stress
- [Eslint](https://eslint.org/docs/user-guide) - Find and fix problems in your JavaScript code.
- [Prettier](https://prettier.io/docs/en/index.html) - Prettier is an opinionated code formatter.

## Deploy

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/project?template=)

## Todo

- [x] Write README.md
- [ ] Add more examples

## License

MIT
