import React, { Fragment, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { CssBaseline, MuiThemeProvider } from "@material-ui/core";
import theme from "theme";
import GlobalStyles from "GlobalStyles";

const HomePage = React.lazy(() => import("pages/HomePage"));
const HelloPage = React.lazy(() => import("pages/HelloPage"));

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles />
      <Suspense fallback={<Fragment />}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/hello" component={HelloPage} />
        </Switch>
      </Suspense>
    </MuiThemeProvider>
  );
}

export default App;
