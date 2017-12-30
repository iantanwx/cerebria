import * as React from 'react';
import styled from 'styled-components';
import Link from '../Link';
import { Header2 } from '../Header';

interface PostItemHeaderProps {
  date: string;
  text: string;
  to: string;
}

const Date = styled.p`
  margin-bottom: 0.8rem;
`;

const PostItemHeader: React.SFC<PostItemHeaderProps> = ({ date, text, to }) => (
  <div>
    <Date>{date}</Date>
    <Header2>
      <Link to={to} data-hover={text}>{text}</Link>
    </Header2>
  </div>
);

export default PostItemHeader;
