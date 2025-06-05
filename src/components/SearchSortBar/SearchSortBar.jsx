import React from 'react';
import styles from './SearchSortBar.module.css';

const SearchSortBar = ({ 
  searchTerm, 
  onSearchChange, 
  sortDirection, 
  onSortChange,
  onClearSort
}) => {
  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Search by campaign name..."
        value={searchTerm}
        onChange={onSearchChange}
        className={styles.searchInput}
      />
      
      <div className={styles.sortControls}>
        <select 
          value={sortDirection || ''}
          onChange={(e) => onSortChange(e.target.value)}
          className={styles.sortSelect}
        >
          <option value="">Sort by Spend</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
        
        {sortDirection && (
          <button onClick={onClearSort} className={styles.clearButton}>
            Clear Sort
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchSortBar;