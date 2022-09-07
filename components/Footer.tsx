import Link from "next/link";
import React from "react";
import Width from "./Width";
import Twitter from "../public/images/twitter.svg";
import Discord from "../public/images/discord.svg";
import Github from "../public/images/github.svg";
import Logo from "../public/images/logo.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <Width>
        <div className="footer-box">
          <ul className="footer-social">
            <li>
              <Link href="/">
                <a>
                  <Twitter />
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>
                  <Discord />
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>
                  <Github />
                </a>
              </Link>
            </li>
          </ul>

          <div className="footer-nav">
            <h2>Foundation</h2>
            <ul>
              <li>
                <Link href="#">
                  <a>About</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Foundation</a>
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-nav">
            <h2>Community</h2>
            <ul>
              <li>
                <Link href="#">
                  <a>Discord</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Forum</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Legal</a>
                </Link>
              </li>
            </ul>
          </div>

          <p className="footer-copy">
            <Logo /> 2022 &copy; ICON
          </p>
        </div>
      </Width>
    </footer>
  );
}
