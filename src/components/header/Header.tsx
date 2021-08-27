import React from "react";
import {AppBar, makeStyles, Toolbar} from "@material-ui/core"
import HeaderLogo from "./HeaderLogo";

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: 'black',
  },
}));

export default function Header() {

  const {header} = useStyles();

  return (
      <header>
        <AppBar className={header}>
          <Toolbar>
            <HeaderLogo/>
          </Toolbar>
        </AppBar>
      </header>
  );
}