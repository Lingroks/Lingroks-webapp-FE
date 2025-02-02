'use client';

import { useState } from 'react';
import styles from './header.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { logoutUser } from '../../../services/authService';
import { useRouter } from 'next/navigation';

import { useUser } from '../../../context/UserContext';

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter();
  const { user } = useUser();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    logoutUser(router.push);
  };

  return (
    <>
      <div className={styles.header}>
        {/* Logo */}
        <div className={styles.logo}>
          <Link href="/dashboard">
            <Image
              src="/Lingroks.svg"
              alt="Logo"
              width={105}
              height={30}
              className=""
            />
          </Link>
        </div>

        {/* Search Input */}
        <div className={`${styles.search} hidden md:flex`}>
          <input
            type="text"
            placeholder="Search by name or service"
            className={styles.search__input}
          />
        </div>

        {/* User Section */}
        <div className={styles.user} onClick={toggleDropdown}>
          <div className={styles.user__icon}>
            <Image
              src="/user.svg"
              alt="Logo"
              width={20}
              height={20}
              className=""
            />
          </div>
          <span className={styles.user__name}>{user?.firstName || '...'}</span>
          <div className={styles.user__icon}>
            <Image
              src="/down.svg"
              alt="down"
              width={10}
              height={10}
              className=""
            />
          </div>

          {/* Dropdown */}
          {dropdownOpen && (
            <div className={styles.user__dropdown}>
              <ul>
                <Link href="/dashboard/personal-info">
                  <li className={styles.listitem}>Personal Info</li>
                </Link>
                {/* <Link href="/dashboard/security-changes">
                  <li className={styles.listitem}>Security Changes</li>
                </Link> */}

                <li className={styles.listitem}>Payment</li>
                <li className={styles.listitem}>Terms and Privacy</li>
                <li onClick={handleLogout} className={styles.logout}>
                  Log Out
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      {/* Mobile View */}
      <div className={` ${styles['mobile-search']}`}>
        <input
          type="text"
          placeholder="Search by name or service"
          className={styles['mobile-search__input']}
        />
      </div>
    </>
  );
};

export default Header;
