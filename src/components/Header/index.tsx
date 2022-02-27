import Link from 'next/link';

import styles from './header.module.scss';

export function Header(): JSX.Element {
  return (
    <header className={styles.headerContainer}>
      <Link href="/" passHref>
        <a>
          <img src="/logo.svg" alt="logo" width="239" height="26" />
        </a>
      </Link>
    </header>
  );
}
