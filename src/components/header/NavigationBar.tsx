import React from "react";

export default function NavigationBar() {

  return (
      <div className={"rightMenu"}>
        <a href="/zeldapedia/legend">legende</a>
        <a href={"/zeldapedia/characters"}>personnages</a>
        <a href={"/zeldapedia/ennemies"}>ennemis</a>
        <a href={"/zeldapedia/objects"}>objets</a>
        <a href={"/zeldapedia"}>lieux</a>
      </div>
  );
}