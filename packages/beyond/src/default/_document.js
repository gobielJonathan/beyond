import {
  Html,
  Head,
  Main,
  Body,
  Scripts,
} from "@beyond/server/shared/document";

const Document = () => {
  return (
    <Html>
      <Head />
      <Body>
        <noscript>Please enable your javascript</noscript>
        <Main />
        <Scripts />
      </Body>
    </Html>
  );
};

export default Document;
