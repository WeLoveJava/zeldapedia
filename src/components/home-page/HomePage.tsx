import React from 'react';
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  home: {
    paddingTop: "80px",
  },
}));

export default function HomePage() {

  const {home} = useStyles();

  return (
      <div className={home}>
        <h1>Zelda encyclopédia</h1>
        <h2>Author: Julien Perrin</h2>
        Content
      </div>
  );
}