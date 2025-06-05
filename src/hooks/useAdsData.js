import { useState, useEffect } from 'react';
import { standardizeAdData } from '../utils/dataStandardization';

const useAdsData = () => {
  const [ads, setAds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAds = async () => {
      try {
        const response = await fetch('http://localhost:3000/fakeDataSet');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        
        const allAds = [
            ...(data.facebook_ads || []),
            ...(data.twitter_ads || []),
            ...(data.snapchat_ads || [])
          ];
        setAds(allAds.map(standardizeAdData));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAds();
  }, []);

  return { ads, loading, error };
};

export default useAdsData;