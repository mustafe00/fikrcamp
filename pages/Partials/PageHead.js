import Head from "next/head";

function PageHead({ title }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="keywords"
        content="bootcamp, fikrcamp, somaliland, coding, somali, javascript, training, somaliland coding, somaliland tech, tech, hargeisa, full stack"
      ></meta>
      <meta
        name="description"
        content="Fikrcamp is the first coding bootcamp in Somaliland. Attending this bootcamp students are given access to mentors, awesome work environment and most importantly experienced tutors."
      ></meta>
      <link rel="shortcut icon" href="./faviconn.PNG" />
    </Head>
  );
}

export default PageHead;
