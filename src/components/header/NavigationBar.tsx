import React from "react";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  navigationBar: {
    color: 'white',
    fontWeight: 'bold',
    fontFamily: "Open Sans, sans-serif",
    size: "18px",
    marginLeft: "38px",
  },
  navigationButton: {
    color: 'white',
    fontWeight: 'bold',
    fontFamily: "Open Sans, sans-serif",
    size: "18px",
    marginLeft: "38px",
  },
  navigationLink: {
    color: 'white',
    fontWeight: 'bold',
    fontFamily: "Open Sans, sans-serif",
    size: "18px",
    marginLeft: "38px",
  }
}));

const headersMenu = [
  {
    label: "Histoire",
    href: "/history",
  },
  {
    label: "Personnages",
    href: "/characters",
  },
  {
    label: "Boss",
    href: "/ennemies",
  },
  {
    label: "Items",
    href: "/items",
  },
];

export default function NavigationBar() {

  const {navigationBar, navigationButton, navigationLink} = useStyles();
  const menu = headersMenu.map(({label, href}) => {return (<li key={label} className={navigationButton}><a href={href} className={navigationLink}>{label}</a></li>)});

  return (
      <nav>
        <div>
          <ul className={navigationBar}>
            {menu}
          </ul>
        </div>
      </nav>
  );
}