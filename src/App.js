import * as React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { DefaultLayout } from 'components/default-layout';
import { LandingPage } from 'pages/landing-page';
import { AppRoute } from 'constants/routes';
/* eslint-disable */
export function App() {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <Switch>
          <Route exact path={AppRoute.ROOT} component={LandingPage} />
        </Switch>
      </DefaultLayout>
    </BrowserRouter>
  );
}
