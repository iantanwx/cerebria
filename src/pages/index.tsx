import * as React from 'react';
import Link from 'gatsby-link';

interface IndexPageProps {
  location: {
    pathname: string;
  };
}

export default (props: IndexPageProps) => (
  <div>HELLO THIS IS THE HOME PAGE</div>
);
