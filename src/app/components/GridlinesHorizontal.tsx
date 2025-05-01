

'use client';

import styles from './GridLines.module.scss';

interface GridLinesProps {
  totalDivisions: number;
  showBaseline?: boolean;
}

const GridLines = ({ totalDivisions, showBaseline = true }: GridLinesProps) => {
  return (
    <div className={styles.gridLinesContainer}>
      {[...Array(totalDivisions)].map((_, i) => (
        <div
          key={i}
          className={styles.gridLine}
        />
      ))}
      {showBaseline && <div className={styles.baseline} />}
    </div>
  );
};

export default GridLines;