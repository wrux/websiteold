import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <script
            defer
            data-domain="wrux.com"
            src="https://plausible.io/js/plausible.js"
          ></script>
        </Head>
        <body className="min-h-screen bg-black text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
