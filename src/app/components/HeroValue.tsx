'use client';

import styles from './HeroValue.module.scss';

export default function HeroValue() {
  return (
    <div className={styles.heroValue}>
      <p className={styles.label}>Earned this month against forecast</p>
      <div className={styles.valueWrapper}>
        <p className={styles.valueMain}>£5,282</p>
        <p className={styles.valueDivider}>/</p>
        <p className={styles.valueForecast}>£7,200</p>
      </div>
    </div>
  );
}
