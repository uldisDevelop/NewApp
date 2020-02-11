import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import styles from './_Page.module.scss';
import List from './List';
import Details from './Details';

export default function Page() {
  const match = useRouteMatch();

  return (
    <div className={styles.pageContainer}>
      <div className={styles.page}>
        <Switch>
          <Route path={match.path} exact>
            <List />
          </Route>
          <Route path={`${match.path}/:showId`}>
            <Details />
          </Route>
        </Switch>
      </div>
    </div>
  );
}
