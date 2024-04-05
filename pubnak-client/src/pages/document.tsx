// document.tsx
import Document, { Html, Head, Main, NextScript } from 'next/document';
import RootLayout from '../components/layout/RootLayout'; 

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
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
