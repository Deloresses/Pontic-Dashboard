'use client';

import styles from './YAxis.module.scss';

interface YAxisLabelsProps {
  topLabel: number;
  middleLabel: number;
  bottomLabel: number;
  chartHeight: number;
}

const YAxisLabels = ({ topLabel, middleLabel, bottomLabel }: YAxisLabelsProps) => {
  return (
    <div className={styles.yAxisLabels}>
      <div className={styles.label}>{topLabel}</div>
      <div className={styles.label}>{middleLabel}</div>
      <div className={styles.label}>{bottomLabel}</div>
    </div>
  );
};

export default YAxisLabels;