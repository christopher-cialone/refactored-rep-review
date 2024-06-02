// src/app/page.tsx
// import Image from "next/image";

import React from 'react';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <img src="/Users/christophercialone/Desktop/refactored-rep-review/public/logo1.png" className={styles.avatar} alt="logo1" />
          <h1>Welcome to I On You Reviews</h1>
          <h3>Giving Power to the Users</h3>
        </div>
        <div className={styles.logoContainer}>
          <img src="/Users/christophercialone/Desktop/refactored-rep-review/public/icons/logo2.png" className={styles.logo} alt="Logo"/>
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.button}>Connect Wallet</button>
          <button className={styles.button}>Create new wallet</button>
        </div>
      </header>
      <nav className={styles.nav}>
        <div className={styles.navItem}>
          <img src="/Users/christophercialone/Desktop/refactored-rep-review/public/icons/logo1.png" alt="search icon" />
          <p>Search</p>
        </div>
        <div className={styles.navItem}>
          <img src="/Users/christophercialone/Desktop/refactored-rep-review/public/icons/logo1.png" alt="saved icon" />
          <p>Saved</p>
        </div>
        <div className={styles.navItem}>
          <img src="/Users/christophercialone/Desktop/refactored-rep-review/public/icons/logo1.png" alt="filter icon" />
          <p>Filter</p>
        </div>
      </nav>
    </div>
  );
};

export default Home;
