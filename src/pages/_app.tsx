import "bootstrap/dist/css/bootstrap.css";

import Head from "next/head";
import type { AppProps } from "next/app";

// Components
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Revoltz Stats</title>
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
