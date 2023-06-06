import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ko">
      <Head />
      <body>
        <Main />
        <div id="check-modal" />
        <div id="error-modal" />
        <NextScript />
      </body>
    </Html>
  );
}
