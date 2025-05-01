'use client';

import React, { useState } from 'react';
import styles from './EarningsChart.module.scss';

import YAxisLabels from './Y-AxisLabels';
import ChartTicker from './ChartTicker';
import ChartCore from './ChartCore';

const dummyData = Array.from({ length: 30 }, (_, i) => ({
  earning: Math.floor(Math.random() * 1000),
  outgoing: Math.floor(Math.random() * 500),
  date: `2025-04-${(i + 1).toString().padStart(2, '0')}`,
}));

const EarningsChart = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const chartWidth = 1500;
  const chartHeight = 600;
  const barWidth = 12;
  const barSpacing = 18;

  const maxEarning = Math.max(...dummyData.map(d => d.earning));
  const maxOutgoing = Math.max(...dummyData.map(d => d.outgoing));

  const topLabel = Math.ceil((maxEarning + 100) / 100) * 100;
  const bottomLabel = Math.ceil((maxOutgoing + 100) / 100) * 100;

  return (
    <div className={styles.chartWrapper}>
      <YAxisLabels
        topLabel={topLabel}
        middleLabel={0}
        bottomLabel={bottomLabel}
        chartHeight={chartHeight}
      />
      <div className={styles.chartArea}>
        <ChartTicker side="left" primaryCount={6} secondaryPerPrimary={4} />
        <ChartCore
          data={dummyData}
          activeIndex={activeIndex}
          chartHeight={chartHeight}
          chartWidth={chartWidth}
          barWidth={barWidth}
          barSpacing={barSpacing}
        />
        <ChartTicker side="right" primaryCount={6} secondaryPerPrimary={4} />
      </div>
    </div>
  );
};

export default EarningsChart;