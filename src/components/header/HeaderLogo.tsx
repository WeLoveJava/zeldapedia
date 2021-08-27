import React from "react";
import {makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  logo: {
    color: 'white',
    fontWeight: 'bold',
  },
}));

export default function HeaderLogo() {

  const { logo } = useStyles();

  return (
      <Typography variant="h6" component="h1" className={logo}>
        Zeldapedia
      </Typography>
  );
}