import React from 'react';
import styles from './AdCard.module.css';

const AdCard = ({ ad }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.campaign}>{ad.campaign}</h3>
      <div className={styles.details}>
        <div className={styles.row}>
          <span className={styles.label}>Adset:</span>
          <span className={styles.value}>{ad.adset}</span>
        </div>
        <div className={styles.row}>
          <span className={styles.label}>Creative:</span>
          <span className={styles.value}>{ad.creative}</span>
        </div>
        <div className={styles.metrics}>
          <div className={styles.metric}>
            <span className={styles.label}>Spend:</span>
            <span className={styles.value}>${ad.spend.toFixed(2)}</span>
          </div>
          <div className={styles.metric}>
            <span className={styles.label}>Impressions:</span>
            <span className={styles.value}>{ad.impressions.toLocaleString()}</span>
          </div>
          <div className={styles.metric}>
            <span className={styles.label}>Clicks:</span>
            <span className={styles.value}>{ad.clicks.toLocaleString()}</span>
          </div>
          <div className={styles.metric}>
            <span className={styles.label}>Results:</span>
            <span className={styles.value}>{ad.results.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdCard;