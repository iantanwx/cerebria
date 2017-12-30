import * as React from 'react';
import styled from 'styled-components';

const Header1 = styled.h1`
  display: block;
  font-size: 4rem;
  text-align: center;
`;

const Header2 = styled.h2`
  display: block;
  font-family: 'Open Sans';
  text-align: left;
  & > *, & > *::before {
    padding: 0;
  }
`;

const Header3 = styled.h3`
  color: #888;
  display: block;
  font-weight: normal;
  font-family: 'Open Sans';
  text-align: center;
`;

export { Header1, Header2, Header3 };
