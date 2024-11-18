// src/app/components/header/DashboardHeader.tsx
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../assets/scss/Dashboard.module.scss'; // Update the CSS/SCSS file name accordingly

const DashboardHeader = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    // Toggle function for dropdown
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <div className={styles.header}>
            <div className='max-w-[1100px] flex items-center justify-between mx-auto my-0 px-6 py-2 cursor-pointer'>
                <Link href="/">
                    <Image
                    src="/Lingroks.svg" 
                    alt="Logo"
                    width={105}
                    height={100} 
                    className=''/>
                </Link>
            </div>
            <div className={styles.searchBar}>
                <input type="text" placeholder="Search by name or service" />
            </div>
            <div className={styles.userProfile}>
                <button onClick={toggleDropdown} className={styles.profileButton}>
                    Einstein ▼
                </button>
                {dropdownOpen && (
                    <div className={styles.dropdownMenu}>
                        <ul>
                            <Link href="/profile"><a className={styles.dropdownItem}>Personal Info</a></Link>
                            <Link href="/security"><a className={styles.dropdownItem}>Security Changes</a></Link>
                            <Link href="/payments"><a className={styles.dropdownItem}>Payments</a></Link>
                            <Link href="/terms"><a className={styles.dropdownItem}>Terms and Privacy</a></Link>
                            <Link href="/logout"><a className={styles.dropdownItem}>Log Out</a></Link>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DashboardHeader;
