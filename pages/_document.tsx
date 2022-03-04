import Document, { Head, Html, Main, NextScript } from "next/document";
import React from "react";

const title = "Trisha Lim - Frontend Engineer";
const description =
  "Frontend Engineer with 5+ years experience working on single page applications using React, Next.js, TypeScript.";

class CustomDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <meta name="description" content={description} />
          <link rel="icon" href="/favicon.ico" />

          <meta property="og:url" content="https://trishalim.com" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={title} />
          <meta name="twitter:card" content={description} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content="/fb-social-share.jpg" />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
