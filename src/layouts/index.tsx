import Link from "gatsby-link";
import * as React from "react";
import "prismjs/themes/prism-okaidia.css";

export const menuItems = [
  { name: "Home", path: "/", exact: true, icon: "home", inverted: true },
  { name: "About", path: "/about/", exact: true, icon: "info circle" },
  { name: "Blog", path: "/blog/", exact: false, icon: "newspaper" },
];

interface DefaultLayoutProps extends React.HTMLProps<HTMLDivElement> {
  location: {
    pathname: string;
  };
  children: any;
}

export default class DefaultLayout extends React.PureComponent<DefaultLayoutProps, void> {
  render() {
    const { pathname } = this.props.location;
    const isHome = pathname === "/";

    return <div>{this.props.children()}</div>;
  }
}
