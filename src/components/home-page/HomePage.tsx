import React from 'react';
import '../../style/home.scss';
import linkImage from '../../images/link-home.png';

export default function HomePage() {

  return (
      <section className={"presentation first"}>
        <div className={"home-text"}>
          <h1>Breath of the Wild l'encyclopedie</h1>
          <p>Depuis les temps les plus reculés, l'histoire de la famille royale d'Hyrule est intimement liée à celle du Fléau, ce monstre que l'on nomme Ganon.</p>
          <p>Chaque fois qu'il s'abat sur Hyrule, un jeune garçon et la princesse du royaume, l'âme du Héros et le sang de la Déesse, s'allient pour restaurer la paix. En ce temps-là, la civilisation d'Hyrule était à son apogée. Le peuple d'Hyrule sut mettre ce temps à profit.</p>
          <p>En prévision du retour de Ganon, il mobilisa tout son savoir pour élaborer des machines qui seconderaient le Héros et la princesse dans leur tâche. Et avec elles, toute une armée de Gardiens, des soldats mécaniques autonomes mus par la volonté de protéger le peuple d'Hyrule de ses ennemis.</p>
          <p>Quand enfin le Héros terrassa le monstre d'un coup formidable de la lame purificatrice, la princesse invoqua le pouvoir sacré hérité de son sang et scella le démon.</p>
          <button>Découvrir l'histoire</button>
        </div>
        <div className={"home-image"}>
          <img src={linkImage}/>
        </div>
      </section>
  );
}