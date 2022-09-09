import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Transition from "../components/Transition";
import { useEffect, useState } from "react";
import classNames from "classnames";

function MyApp({ Component, pageProps }: AppProps) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setActive(true);
    }, 300);
  }, []);

  return (
    <div className={classNames("fade-in-effect", { active })}>
      <Transition>
        <Component {...pageProps} />
      </Transition>
    </div>
  );
}

export default MyApp;
