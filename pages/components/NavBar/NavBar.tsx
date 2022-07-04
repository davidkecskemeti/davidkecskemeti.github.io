import Image from "next/image";
import { useState } from "react";
import React from "react";
import Scrollspy from "react-scrollspy";

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = () => {
  const [menuShowing, setMenuShowing] = useState<boolean>(false);

  const showMenu = () => setMenuShowing((prev) => !prev);

  const navOption = (name: string) => (
    <li className="nav-item">
      <a className="nav-link" href={`#${name}`} onClick={() => showMenu}>
        {name}
      </a>
    </li>
  );

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top show"
      id="sideNav"
    >
      <a className="navbar-brand" href="#page-top">
        <span className="d-block d-lg-none">
          <Image src="/profile.svg" alt="Profile" width={82} height={20} />
          David Kecskemeti
        </span>
        <span className="d-none d-lg-block">
          <Image
            className="img-fluid img-profile rounded-circle mx-auto mb-2"
            src="/profile.png"
            alt="Profile"
            width="200"
            height="150"
          />
        </span>
      </a>
      <button
        onClick={() => showMenu()}
        className="navbar-toggler"
        type="button"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className={`collapse navbar-collapse ${menuShowing ? "show" : ""}`}
        id="navbarSupportedContent"
      >
        <Scrollspy
          className="navbar-nav "
          items={["about", "experience"]}
          currentClassName="active"
        >
          {navOption("about")}
          {navOption("experience")}
          {navOption("skills")}
          {navOption("education")}
        </Scrollspy>
      </div>
    </nav>
  );
};

export default NavBar;
