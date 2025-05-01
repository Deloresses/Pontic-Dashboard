'use client';

import styles from './YAxis.module.scss';

interface ChartTickerProps {
  side: 'left' | 'right';
  primaryCount: number;
  secondaryPerPrimary: number;
}

const ChartTicker = ({ side, primaryCount, secondaryPerPrimary }: ChartTickerProps) => {
  const totalTicks = primaryCount + (primaryCount - 1) * secondaryPerPrimary;

  const isPrimaryTick = (index: number) => index % (secondaryPerPrimary + 1) === 0;

  return (
    <div className={`${styles.chartTickerWrapper} ${styles[side]}`}>
      {[...Array(totalTicks)].map((_, i) => {
        const isPrimary = isPrimaryTick(i);
        return (
          <div
            key={i}
            className={isPrimary ? styles.primaryTick : styles.secondaryTick}
          />
        );
      })}
    </div>
  );
};

export default ChartTicker;