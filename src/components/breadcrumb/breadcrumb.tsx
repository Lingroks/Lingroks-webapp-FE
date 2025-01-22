'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './breadcrumb.module.scss';

interface BreadcrumbProps {
  title: string;
  date: string;
  author: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ title, date, author }) => {
  const router = useRouter();

  return (
    <div className={styles.breadcrumbContainer}>
      <div className={styles.breadcrumbFirstrow} >
        <span className={styles.backLink} onClick={() => router.back()}>
          &lt; Back
        </span>
        {/* <span className={styles.separator}>|</span> */}
        <span className={styles.title}>{title}</span>
      </div>
      <div className={styles.details}>
        <span className={styles.author}>{author}</span>
        <span className={styles.date}>{date}</span>
      </div>
    </div>
  );
};

export default Breadcrumb;
