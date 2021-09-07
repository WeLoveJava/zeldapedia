import React from "react";
import '../../style/header.scss';
import HeaderLogo from "./HeaderLogo";
import NavigationBar from "./NavigationBar";

export default function Header() {

  return (
      <header>
        <nav>
          <HeaderLogo/>
          <NavigationBar/>
        </nav>
      </header>
  );
}