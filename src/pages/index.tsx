import * as React from "react";
import Link from "gatsby-link";
import { menuItems } from "../layouts";

interface IndexPageProps {
  location: {
    pathname: string;
  };
}

export default (props: IndexPageProps) => <div>HELLO THIS IS THE HOME PAGE</div>;
