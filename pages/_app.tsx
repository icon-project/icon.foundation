import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Transition from "../components/Transition";
import { useEffect, useState } from "react";
import classNames from "classnames";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setActive(true);
    }, 300);
  }, []);

  return (
    <div className={classNames("fade-in-effect", { active })}>
      <Head>
        <meta
          name="description"
          content="We support open development for decentralized technologies"
        />
      </Head>
      <Transition>
        <Component {...pageProps} />
      </Transition>
    </div>
  );
}

export default MyApp;
