import * as React from 'react';
import { Grid } from 'react-styled-flexboxgrid';
import 'prismjs/themes/prism-okaidia.css';
import 'normalize.css';
import Menu from '../components/Menu';

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
      <Grid>
        <Menu />
        {this.props.children()}
      </Grid>
    );
  }
}
