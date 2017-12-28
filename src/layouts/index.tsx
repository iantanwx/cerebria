import Menu from '../components/Menu';
import * as React from 'react';
import 'prismjs/themes/prism-okaidia.css';

interface DefaultLayoutProps extends React.HTMLProps<HTMLDivElement> {
  location: {
    pathname: string;
  };
  children: any;
}

export default class DefaultLayout extends React.PureComponent<
  DefaultLayoutProps,
  void
> {
  render() {
    const { pathname } = this.props.location;
    const isHome = pathname === '/';

    return (
      <div>
        <Menu />
        {this.props.children()}
      </div>
    );
  }
}
