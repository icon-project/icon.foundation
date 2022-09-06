import classNames from "classnames";
import Link from "next/link";
import React, { useState } from "react";
import Width from "./Width";
import Arrow from "../public/images/arrow-top-right.svg";
import X from "../public/images/x.svg";
import Dotdotdot from "../public/images/dotdotdot.svg";
import Twitter from "../public/images/twitter.svg";
import Discord from "../public/images/discord.svg";
import Github from "../public/images/github.svg";

export default function Header() {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!open);

  return (
    <header className="header">
      <Width>
        <div className="header-flex">
          <Link href="/">
            <a className="header-logo">
              <img src="/images/logo.png" alt="Icon" />
            </a>
          </Link>
          <ul className="header-nav">
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Projects</a>
              </Link>
            </li>
            <li>
              <button className="header-more" onClick={toggleMenu}>
                <Dotdotdot />
              </button>
            </li>
          </ul>
        </div>
      </Width>

      <div className={classNames("header-overlay", { open })}>
        <Width>
          <div className="header-flex">
            <Link href="/">
              <a className="header-logo">
                <img src="/images/logo.png" alt="Icon" />
              </a>
            </Link>
            <ul className="header-nav">
              <li>
                <button className="header-more" onClick={toggleMenu}>
                  <X />
                </button>
              </li>
            </ul>
          </div>

          <div className="header-overlay-navs">
            <div className="header-overlay-nav">
              <h2>Foundation</h2>
              <ul>
                <li>
                  <Link href="#">About</Link>
                </li>
                <li>
                  <Link href="#">Projects</Link>
                </li>
              </ul>
            </div>

            <div className="header-overlay-nav">
              <h2>Community</h2>
              <ul>
                <li>
                  <Link href="#">Discord</Link>
                </li>
                <li>
                  <Link href="#">Forum</Link>
                </li>
                <li>
                  <Link href="#">Legal</Link>
                </li>
              </ul>
            </div>

            <div className="header-overlay-nav">
              <h2>Program</h2>
              <ul>
                <li>
                  <Link href="#">
                    <a className="header-overlay-build">
                      Build <Arrow />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a className="header-overlay-growth">
                      Growth <Arrow />
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <ul className="header-overlay-social">
            <li>
              <Link href="https://twitter.com">
                <a>
                  <Twitter />
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://twitter.com">
                <a>
                  <Discord />
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://twitter.com">
                <a>
                  <Github />
                </a>
              </Link>
            </li>
          </ul>
        </Width>
      </div>
    </header>
  );
}
