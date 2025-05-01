'use client';

import React from 'react';
import styles from './ChartTooltips.module.scss';

interface ChartTooltipsProps {
  data: { earning: number; outgoing: number; date: string }[];
  activeIndex: number | null;
  chartWidth: number;
  barWidth: number;
  barSpacing: number;
}

const ChartTooltips = ({ data, activeIndex, chartWidth, barWidth, barSpacing }: ChartTooltipsProps) => {
  if (activeIndex === null || !data[activeIndex]) return null;

  const entry = data[activeIndex];
  const totalBarWidth = barWidth + barSpacing;
  const rawLeft = activeIndex * totalBarWidth + barWidth / 2;
  const tooltipMaxWidth = 160; // approximate tooltip width
  const clampedLeft = Math.max(
    tooltipMaxWidth / 2,
    Math.min(rawLeft, chartWidth - tooltipMaxWidth / 2)
  );

  const tooltipStyle = {
    left: `${clampedLeft}px`,
    transform: 'translateX(-50%)',
  };

  return (
    <div className={styles.tooltipContainer} style={{ width: chartWidth }}>
      <div className={styles.topTooltip} style={tooltipStyle}>
        <span>NHS £{entry.earning}</span> · <span>Lab Fees £{entry.outgoing}</span>
      </div>
      <div className={styles.bottomTooltip} style={tooltipStyle}>
        {entry.date}
      </div>
    </div>
  );
};

export default ChartTooltips;
