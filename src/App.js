// src/App.js
import React from 'react';
import styles from './App.module.css';
import AdList from './components/AdList/AdList';

function App() {
  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Blueprint Ads Dashboard</h1>
      <AdList />
    </div>
  );
}

export default App;