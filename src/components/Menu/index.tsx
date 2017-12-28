import * as React from 'react';
import Link from 'gatsby-link';
import items from './items';
import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
`;

const Item = styled.li`
  display: inline-block;
`;

export default class Menu extends React.Component<any> {
  render() {
    return (
      <List>
        {items.map((item) => (
          <Item key={item.name}>
            <Link to={item.path}>{item.name}</Link>
          </Item>
        ))}
      </List>
    );
  }
}
