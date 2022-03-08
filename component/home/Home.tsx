import React from 'react';
import styles from '../../styles/Home.module.css';

export const Home = (props: any) => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Next Testing</h1>
        {props?.label ? (
          <div data-testid='button'>
            {' '}
            <button>{props.label}</button>{' '}
          </div>
        ) : (
          ''
        )}
      </main>
    </div>
  );
};
