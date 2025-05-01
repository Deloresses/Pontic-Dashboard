'use client';

import React from 'react';
import ChartBars from './ChartBars';
import GridlinesHorizontal from './GridlinesHorizontal';
import GridlinesVertical from './GridlinesVertical';
import SnapLine from './SnapLine';
import ChartTooltips from './ChartTooltips';
import styles from './ChartCore.module.scss';

interface BarDatum {
  earning: number;
  outgoing: number;
  date: string;
}

interface ChartCoreProps {
  data: BarDatum[];
  activeIndex: number | null;
  chartHeight: number;
  chartWidth: number;
  barWidth: number;
  barSpacing: number;
}

const ChartCore = ({
  data,
  activeIndex,
  chartHeight,
  chartWidth,
  barWidth,
  barSpacing,
}: ChartCoreProps) => {
  const totalDivisions = 5;

  return (
    <div className={styles.chartCore} style={{ height: chartHeight, width: chartWidth }}>
      <GridlinesHorizontal totalDivisions={totalDivisions} />
      <GridlinesVertical totalDivisions={totalDivisions} />
      <ChartBars
        data={data}
        chartHeight={chartHeight}
        topPadding={48}
        bottomPadding={48}
        barWidth={barWidth}
        barSpacing={barSpacing}
        activeIndex={activeIndex}
      />
      <SnapLine
        index={activeIndex}
        chartHeight={chartHeight}
        barWidth={barWidth}
        barSpacing={barSpacing}
      />
      <ChartTooltips
        data={data}
        activeIndex={activeIndex}
        chartWidth={chartWidth}
        barWidth={barWidth}
        barSpacing={barSpacing}
      />
    </div>
  );
};

export default ChartCore;