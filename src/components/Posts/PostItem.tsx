import * as React from 'react';
import PostItemHeader from './PostItemHeader';

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
        <PostItemHeader date={date} to={slug} text={title} />
        <p>{excerpt}</p>
      </div>
    );
  }
}
