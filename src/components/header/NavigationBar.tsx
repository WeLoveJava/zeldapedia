import React from "react";

export default function NavigationBar() {

  return (
      <div className={"rightMenu"}>
        <a href={"/legend"}>legende</a>
        <a href={"/characters"}>personnages</a>
        <a href={"/ennemies"}>ennemis</a>
        <a href={"/objects"}>objets</a>
        <a href={"/zeldapedia"}>lieux</a>
      </div>
  );
}