import * as React from 'react';
import Link from '../Link';
import items from './items';
import styled from 'styled-components';

const List = styled.nav`
  margin-left: 0;
  margin-top: 1em;
  margin-bottom: 1em;
  text-align: center;
`;

export default class Menu extends React.Component<any> {
  render() {
    return (
      <List>
        {items.map((item) => (
          <Link key={item.name} to={item.path} data-hover={item.name}>
            {item.name}
          </Link>
        ))}
      </List>
    );
  }
}
