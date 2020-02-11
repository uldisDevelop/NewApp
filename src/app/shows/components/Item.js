import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import styles from './Item.module.scss';

export default function ShowList({ item }) {
  const match = useRouteMatch();

  return (
    <div className={styles.item}>
      <Link to={`${match.url}/${item.value}`}>
        {`${item.value} - ${item.text}`}
      </Link>
    </div>
  );
}
