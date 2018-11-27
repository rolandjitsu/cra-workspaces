import React, {Component, Fragment} from 'react';

import {
  createMuiTheme,
  createStyles,
  MuiThemeProvider,
  Theme,
  withStyles,
  WithStyles
} from '@material-ui/core/styles';
import withWidth, {WithWidth} from '@material-ui/core/withWidth';


const theme = createMuiTheme({
  palette: {type: 'dark'},
  typography: {
    useNextVariants: true
  }
});

const styles = (theme: Theme) => createStyles({
  root: {}
});

const style = withStyles(styles);

class App extends Component<Props> {
  render() {
    const {classes, width} = this.props;
    console.log(width);
    return (
      <Fragment>
        <MuiThemeProvider theme={theme}>
          <div className={classes.root}>
            <h2>Root</h2>
          </div>
        </MuiThemeProvider>
      </Fragment>
    );
  }
}

export default withWidth()(
  style(App)
);

interface Props extends WithStyles<typeof styles>, WithWidth {
  noop?: boolean;
}
