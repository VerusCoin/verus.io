import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicons/favicon.svg" type="image/svg+xml" />
          <link
            rel="alternate icon"
            href="/favicons/favicon.ico"
            type="image/x-icon"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicons/apple-touch-icon.png"
          />

          <link rel="manifest" href="/favicons/site.webmanifest" />
          <meta
            content="/favicons/browserconfig.xml"
            name="msapplication-TileColor"
            content="#3165D4"
          />
          <meta name="theme-color" content="#3165D4" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
