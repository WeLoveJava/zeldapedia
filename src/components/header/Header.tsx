import React from "react";
import {AppBar, makeStyles, Toolbar} from "@material-ui/core"
import HeaderLogo from "./HeaderLogo";
import NavigationBar from "./NavigationBar";

const useStyles = makeStyles(() => ({
  navigation: {
    display: "flex",
    justifyContent: "space-between",
  },
  header: {
    backgroundColor: 'black',
    height: "80px"
  },
}));

export default function Header() {

  const {header, navigation} = useStyles();

  return (
      <AppBar className={header}>
        <Toolbar className={navigation}>
          <HeaderLogo/>
          <NavigationBar/>
        </Toolbar>
      </AppBar>
  );
}