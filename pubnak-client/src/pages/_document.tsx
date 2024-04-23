// document.tsx
import Document, { Html, Head, Main, NextScript } from 'next/document';
import RootLayout from '../components/layout/RootLayout';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <link href="https://fonts.googleapis.com/css2?family=Goldman&display=swap" rel="stylesheet" />

          <script src="https://kit.fontawesome.com/a4fc922de4.js" crossOrigin="anonymous"></script>
        </Head>
        <body>
          <RootLayout>
            <Main />
            <NextScript />
          </RootLayout>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
