import * as React from 'react';

export default class Post extends React.Component<any> {
  render() {
    console.warn(this.props);

    return (
      <div>A BLOG POST</div>
    );
  }
}
