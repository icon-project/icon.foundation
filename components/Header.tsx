import Link from "next/link";
import React from "react";
import Width from "./Width";

export default function Header() {
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
              <button className="header-more">
                <a>
                  <img src="/images/dotdotdot.svg" />
                </a>
              </button>
            </li>
          </ul>
        </div>
      </Width>
    </header>
  );
}
