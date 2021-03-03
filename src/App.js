import * as React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { DefaultLayout } from 'components/defaultLayout/defaultLayout';
import { LandingPage } from 'pages/langingPage/landingPage';
import { AppRoute } from 'constants/routes';

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


