'use client';

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
      <div className={styles.breadcrumbFirstrow}>
      
        {/* <span className={styles.separator}>|</span> */}
        <span className={styles.backLink} onClick={() => router.back()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
            style={{ marginRight: '4px' }}
          >
            <path
              fillRule="evenodd"
              d="M15 8a.5.5 0 0 1-.5.5H3.707l4.147 4.146a.5.5 0 0 1-.708.708l-5-5a.5.5 0 0 1 0-.708l5-5a.5.5 0 0 1 .708.708L3.707 7.5H14.5a.5.5 0 0 1 .5.5z"
            />
          </svg>
          Back
        </span>
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
