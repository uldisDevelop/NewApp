import React from 'react';
import { observer } from 'mobx-react';
import styles from './List.module.scss';
import App from '../../../mobxStore';
import Item from './Item';

function ShowList() {
  const { shows } = App;

  return (
    <div>
      <div>{shows.number}</div>
      <button type='button' onClick={shows.add}>
        Add
      </button>
      <button type='button' onClick={shows.subtract}>
        Subtracts
      </button>
      <button type='button' onClick={shows.addNumber}>
        addNumber
      </button>

      <div className={styles.list}>
        {shows.numbers.map(item => (
          <Item key={item.value} item={item} />
        ))}
      </div>
    </div>
  );
}

export default observer(ShowList);
