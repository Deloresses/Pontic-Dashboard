'use client';

import { useState } from 'react';

import styles from './ChartBars.module.scss';

interface BarData {
  earning: number;
  outgoing: number;
  date: string; // Format: "DD MMM YYYY"
}

interface ChartBarsProps {
  data: BarData[];
  chartHeight: number; // in pixels
  topPadding: number; // in pixels
  bottomPadding: number; // in pixels
  barWidth: number;
  barSpacing: number;
  activeIndex: number | null;
}

const ChartBars = ({ data, chartHeight, topPadding, bottomPadding, barWidth, barSpacing, activeIndex }: ChartBarsProps) => {
  const [internalActiveIndex, setInternalActiveIndex] = useState<number | null>(null);

  const maxEarning = Math.max(...data.map(d => d.earning));
  const maxOutgoing = Math.max(...data.map(d => d.outgoing));

  const usableHeight = chartHeight - topPadding - bottomPadding;

  return (
    <div className={styles.chartBarsContainer} style={{ height: chartHeight }}>
      {data.map((d, i) => {
        const earningHeight = (d.earning / maxEarning) * (usableHeight * (maxEarning / (maxEarning + maxOutgoing)));
        const outgoingHeight = (d.outgoing / maxOutgoing) * (usableHeight * (maxOutgoing / (maxEarning + maxOutgoing)));

        const isActive = i === activeIndex;
        const isInactive = activeIndex !== null && i !== activeIndex;

        return (
          <div
            key={i}
            className={`${styles.barWrapper} ${isActive ? styles.active : ''} ${isInactive ? styles.inactive : ''}`}
            onMouseEnter={() => setInternalActiveIndex(i)}
            onMouseLeave={() => setInternalActiveIndex(null)}
            style={{ width: barWidth, marginRight: barSpacing }}
          >
            <div className={styles.earningBar} style={{ height: `${earningHeight}px` }} />
            <div className={styles.outgoingBar} style={{ height: `${outgoingHeight}px` }} />
          </div>
        );
      })}
    </div>
  );
};

export default ChartBars;