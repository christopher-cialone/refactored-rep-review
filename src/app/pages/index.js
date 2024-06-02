// src/pages/index.js
import React from 'react';
import QueryInput from '../components/QueryInput';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img src="public/logo1.png" className={styles.logo} alt="logo" />
        <h1>Welcome to I On You Reviews</h1>
        <h3>Giving Power to the Users</h3>
        <div className={styles.buttonContainer}>
          <button className={styles.button}>Connect Wallet</button>
          <button className={styles.button}>Create new wallet</button>
        </div>
      </header>
      <QueryInput />
      <nav className={styles.nav}>
        <div className={styles.navItem}>
          <img src="public/icons/logo2.png" alt="search icon" />
          <p>Search</p>
        </div>
        <div className={styles.navItem}>
          <img src="public/icons/logo2.png" alt="saved icon" />
          <p>Saved</p>
        </div>
        <div className={styles.navItem}>
          <img src="public/icons/logo2.png" alt="filter icon" />
          <p>Filter</p>
        </div>
      </nav>
    </div>
  );
}
