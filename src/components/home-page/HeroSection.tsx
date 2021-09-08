import React from "react";

export default function HeroSection({title, description, link}:{title: string, description: string, link: string}) {
  return (
      <li>
        <div>
          <h1>{title}</h1>
          <p>{description}</p>
          <a href={link}><button>Découvrir son histoire</button></a>
        </div>
      </li>
  );
}