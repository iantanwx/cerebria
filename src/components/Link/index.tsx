import Link from 'gatsby-link';
import styled from 'styled-components';

export default styled(Link)`
  text-decoration: none;
  text-shadow: none;
  padding: 0 10px;
  color: #000;
  position: relative;
  font-size: 18px;
  line-height: normal;

  &:before {
    position: absolute;
    content: attr(data-hover);
    top: 0;
    left: 0;
    overflow: hidden;
    max-height: 0;
    color: rgb(255, 82, 82);
    transition: max-height 0.3s;
    padding: 0 10px;
  }

  &:hover {
    &:before {
      max-height: 100%;
    }
  }
`;
