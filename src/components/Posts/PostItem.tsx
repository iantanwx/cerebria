import * as React from 'react';
import Link from 'gatsby-link';

interface PostItemProps {
  date: string;
  excerpt: string;
  title: string;
  slug: string;
}

export default class PostItem extends React.Component<PostItemProps> {
  render() {
    const { date, excerpt, title, slug } = this.props;

    return (
      <div>
        <p>{date}</p>
        <h2><Link to={slug}>{title}</Link></h2>
        <p>{excerpt}</p>
      </div>
    );
  }
}
