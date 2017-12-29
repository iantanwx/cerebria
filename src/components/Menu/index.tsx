import * as React from 'react';
import Link from '../Link';
import items from './items';
import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
  margin-left: 0;
`;

const Item = styled.li`
  display: inline-block;
  margin: 1em;
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
