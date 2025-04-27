

'use client';

import styles from './page.module.scss';
import HeroValue from './components/HeroValue';

export default function Page() {
  return (
    <main className={styles.page}>
      <HeroValue />
    </main>
  );
}