import Link from "next/link";
import React from "react";
import Width from "./Width";
import Twitter from "../public/images/twitter.svg";
import Discord from "../public/images/discord.svg";
import Github from "../public/images/github.svg";
import Logo from "../public/images/logo.svg";
import { IFooter } from "../types";

interface IProps {
  footer: IFooter;
}

export default function Footer({ footer }: IProps) {
  return (
    <footer className="footer">
      <Width wide>
        <div className="footer-box">
          <ul className="footer-social">
            {footer.social.map((link, i) => {
              return (
                <li key={i}>
                  <Link href={link.url}>
                    <a>
                      <img src={link.icon} />
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>

          {footer.navigations.map((nav, i) => {
            return (
              <div key={i} className="footer-nav">
                <h2>{nav.heading}</h2>
                <ul>
                  {nav.links.map((link, i) => {
                    return (
                      <li key={i}>
                        <Link href={link.url}>
                          <a>{link.text}</a>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}

          <p className="footer-copy">
            <Logo /> {footer.copyright_text}
          </p>
        </div>
      </Width>
    </footer>
  );
}
