import { ReactElement } from 'react';
import { Html, Head, Main, NextScript } from 'next/document';

const Document: any = () => {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
        <div id='modal-root'></div>
      </body>
    </Html>
  );
};
export default Document;
