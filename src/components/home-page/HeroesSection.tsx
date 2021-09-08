import React from "react";
import '../../style/heroes-section.scss';
import HeroSection from "./HeroSection";

export default function HeroesSection() {
  return (
      <>
        <div className={"accordionHomePage"}>
          <ul>
            <HeroSection title={"Link"} description={"Prodige Hylien"} link={"/heroes/link"}/>
            <HeroSection title={"Zelda"} description={"Princesse du royaume d'Hyrule"} link={"/heroes/zelda"}/>
            <HeroSection title={"Mipha"} description={"Prodige Zora"} link={"/heroes/mipha"}/>
            <HeroSection title={"Urbosa"} description={"Prodige Gerudo"} link={"/heroes/urbosa"}/>
            <HeroSection title={"Urbosa"} description={"Prodige Goron"} link={"/heroes/urbosa"}/>
            <HeroSection title={"Revali"} description={"Prodige Piaf"} link={"/heroes/revali"}/>
          </ul>
        </div>
      </>
  );
}