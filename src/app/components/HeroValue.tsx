'use client';

import { useState } from 'react';
import styles from './HeroValue.module.scss';
import Button from './Button'; // Assuming Button.tsx is in the same folder

export default function HeroValue() {
  const [activeButton, setActiveButton] = useState('Total');

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  const isTotalActive = activeButton === 'Total';

  return (
    <div className={styles.heroValue}>
      <p className={styles.label}>Earned this month against forecast</p>

      <div className={`${styles.valueWrapper} ${isTotalActive ? styles.active : ''}`}>
        <p className={`${styles.valueMain} ${isTotalActive ? styles.active : ''}`}>£5,282</p>
        <p className={`${styles.valueDivider} ${isTotalActive ? styles.active : ''}`}>/</p>
        <p className={`${styles.valueForecast} ${isTotalActive ? styles.active : ''}`}>£7,200</p>
      </div>

      <div className={styles.buttonGroup}>
        <Button text="Total" isActive={activeButton === 'Total'} onClick={() => handleButtonClick('Total')} />
        <Button text="NHS" isActive={activeButton === 'NHS'} onClick={() => handleButtonClick('NHS')} />
        <Button text="Private" isActive={activeButton === 'Private'} onClick={() => handleButtonClick('Private')} />
      </div>
    </div>
  );
}
