import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import styles from '../../styles/Home.module.css';

export const ToggleButton = ({ labelOn, labelOff }: any) => {
  const [isON, setON] = useState(false);

  const toggleOnOffMode = () => {
    setON(!isON);
  };

  return (
    <React.Fragment>
      <main className={styles.main}>
        <div data-testid='button'>
          <Button onClick={toggleOnOffMode}>{isON ? labelOn : labelOff}</Button>
        </div>
      </main>
    </React.Fragment>
  );
};
