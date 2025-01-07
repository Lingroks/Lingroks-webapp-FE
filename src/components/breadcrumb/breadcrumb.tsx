'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './breadcrumb.module.scss'

const Breadcrumb = ({ title, date, author }) => {
  const router = useRouter();

  return (
    <div className={styles.breadcrumbContainer}>
      <span className={styles.backLink} onClick={() => router.back()}>
        &lt; Back
      </span>
      <span className={styles.separator}>|</span>
      <span className={styles.title}>{title}</span>
      <div className={styles.details}>
        <span className={styles.author}>{author}</span>
        <span className={styles.date}>{date}</span>
      </div>
    </div>
  );
};


export default Breadcrumb;
