import Head from "next/head";

function PageHead({ title }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="shortcut icon" href="./faviconn.PNG" />
    </Head>
  );
}

export default PageHead;
