

'use client';

import React from 'react';
import styles from './SnapLine.module.scss';

interface SnapLineProps {
  index: number | null;
  barWidth: number;
  barSpacing: number;
  chartHeight: number;
}

const SnapLine = ({ index, barWidth, barSpacing, chartHeight }: SnapLineProps) => {
  if (index === null) return null;

  const totalBarWidth = barWidth + barSpacing;
  const left = index * totalBarWidth + barWidth / 2;

  return (
    <div
      className={styles.snapLine}
      style={{
        left: `${left}px`,
        height: `${chartHeight}px`,
      }}
    />
  );
};

export default SnapLine;