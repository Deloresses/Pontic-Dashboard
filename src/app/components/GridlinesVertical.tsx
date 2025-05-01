'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './GridLines.module.scss';

interface GridLinesVerticalProps {
  totalDivisions: number; // from horizontal grid lines, i.e. primary ticks
}

const GridLinesVertical = ({ totalDivisions }: GridLinesVerticalProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [verticalCount, setVerticalCount] = useState(0);

  useEffect(() => {
    const updateGrid = () => {
      if (!wrapperRef.current) return;
      const width = wrapperRef.current.offsetWidth;
      const height = wrapperRef.current.offsetHeight;

      if (totalDivisions <= 1 || height === 0) return;

      const verticalSpacing = height / (totalDivisions - 1);
      const newCount = Math.floor(width / verticalSpacing);
      setVerticalCount(newCount);
    };

    const observer = new ResizeObserver(updateGrid);
    if (wrapperRef.current) {
      observer.observe(wrapperRef.current);
    }

    updateGrid(); // initial run

    return () => {
      observer.disconnect();
    };
  }, [totalDivisions]);

  return (
    <div ref={wrapperRef} className={styles.gridLinesVerticalWrapper}>
      {[...Array(verticalCount)].map((_, i) => (
        <div key={i} className={styles.verticalGridLine} />
      ))}
    </div>
  );
};

export default GridLinesVertical;
