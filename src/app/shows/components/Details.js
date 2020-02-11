import React, { useEffect } from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';
import { observer } from 'mobx-react';
import styles from './Details.module.scss';
import { onKeyboard } from '../../../utils';

function Details() {
  const match = useRouteMatch();
  const history = useHistory();
  const id = match.params.showId;

  onKeyboard(['esc', 'backspace'], () => {
    history.push('/shows');
  });

  return <div className={styles.details}>{id}</div>;
}

export default observer(Details);
