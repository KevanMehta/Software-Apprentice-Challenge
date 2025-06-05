import React, { useState } from 'react';
import useAdsData from '../../hooks/useAdsData';
import AdCard from '../AdCard/AdCard';
import SearchSortBar from '../SearchSortBar/SearchSortBar';
import styles from './AdList.module.css';

const AdList = () => {
  const { ads, loading, error } = useAdsData();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortDirection, setSortDirection] = useState(null);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSortChange = (direction) => {
    setSortDirection(direction === '' ? null : direction);
  };

  const handleClearSort = () => {
    setSortDirection(null);
  };

  const filteredAndSortedAds = () => {
    let result = [...ads];
    
    if (searchTerm) {
      result = result.filter(ad => 
        ad.campaign.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    console.log(ads.map(ad => ({ campaign: ad.campaign, spend: ad.spend, type: typeof ad.spend })));
    if (sortDirection === 'asc') {
      result.sort((a, b) => a.spend - b.spend);
    } else if (sortDirection === 'desc') {
      result.sort((a, b) => b.spend - a.spend);
    }
    
    return result;
  };

  if (loading) return <div className={styles.status}>Loading...</div>;
  if (error) return <div className={styles.error}>Error: {error}</div>;

  const displayedAds = filteredAndSortedAds();
  console.log(sortDirection)
  return (
    <div className={styles.container}>
      <SearchSortBar
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        sortDirection={sortDirection}
        onSortChange={handleSortChange}
        onClearSort={handleClearSort}
      />

      <div className={styles.grid}>
        {displayedAds.length > 0 ? (
          displayedAds.map(ad => (
            <AdCard key={ad.id} ad={ad} />
          ))
        ) : (
          <div className={styles.noResults}>
            No ads found matching your criteria
          </div>
        )}
      </div>
    </div>
  );
};

export default AdList;