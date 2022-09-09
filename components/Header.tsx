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
import { IHeader } from "../types";

export default function Header({ header }: { header: IHeader }) {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!open);
  const lastNav = header.inner_navs.length - 1;

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
            {header.nav.map((link) => {
              return (
                <li>
                  <Link href={link.url}>
                    <a>{link.text}</a>
                  </Link>
                </li>
              );
            })}
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
            {header.inner_navs.map((nav, i) => {
              const last = lastNav === i;

              return (
                <div className="header-overlay-nav">
                  <h2>{nav.heading}</h2>
                  <ul>
                    {nav.links.map((link) => {
                      return (
                        <li>
                          <Link href={link.url}>
                            <a>
                              {link.text}
                              {last && <Arrow />}
                            </a>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>

          <ul className="header-overlay-social">
            {header.social.map((link) => {
              return (
                <li>
                  <Link href={link.url}>
                    <a>
                      <img src={link.icon} />
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Width>
      </div>
    </header>
  );
}
