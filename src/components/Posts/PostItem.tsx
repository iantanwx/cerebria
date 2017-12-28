import * as React from 'react';
import Link from 'gatsby-link';

interface PostItemProps {
  date: string;
  title: string;
  slug: string;
}

export default class PostItem extends React.Component<PostItemProps> {
  render() {
    const { date, title, slug } = this.props;
    return (
      <div>
        <p>{date}   <Link to={slug}>{title}</Link></p>
      </div>
    );
  }
}

