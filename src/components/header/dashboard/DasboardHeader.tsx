import { useState } from 'react';
import styles from './header.module.scss';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <>
      <div className={styles.header}>
        {/* Logo */}
        <div className={styles.logo}>
          <Link href="/">
            <Image
              src="/Lingroks.svg"
              alt="Logo"
              width={105}
              height={100}
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
            <img src="/user.svg" alt="Logo" className="" />
          </div>
          <span className={styles.user__name}>Username</span>
          <div className={styles.user__icon}>
            <img src="/down.svg" alt="down" className="" />
          </div>

          {/* Dropdown */}
          {dropdownOpen && (
            <div className={styles.user__dropdown}>
              <ul>
                <li>Personal Info</li>
                <li>Security Changes</li>
                <li>Payment</li>
                <li>Terms and Privacy</li>
                <li className="logout">Log Out</li>
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
