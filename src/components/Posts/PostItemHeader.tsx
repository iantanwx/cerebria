import * as React from 'react';
import styled from 'styled-components';
import Link from '../Link';
import { Header2 } from '../Header';

interface PostItemHeaderProps {
  text: string;
  to: string;
}

const PostItemHeader: React.SFC<PostItemHeaderProps> = ({ text, to }) => (
  <Header2>
    <Link to={to} data-hover={text}>{text}</Link>
  </Header2>
);

export default PostItemHeader;
