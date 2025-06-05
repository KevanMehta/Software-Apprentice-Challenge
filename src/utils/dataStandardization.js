export const standardizeAdData = (ad) => {
    // Standardize campaign names
    const campaign = ad.campaign_name || ad.campaign || ad.utm_campaign || 'N/A';
    
    // Standardize adset names
    const adset = ad.media_buy_name || ad.ad_group || ad.ad_squad_name || ad.utm_medium || 'N/A';
    
    // Standardize creative names
    const creative = ad.ad_name || ad.image_name || ad.creative_name || ad.utm_content || 'N/A';
    
    // Standardize metrics
    const spend = ad.spend || ad.cost || 0;
    const clicks = ad.clicks || ad.post_clicks || 0;
    const impressions = ad.impressions || 0;
    const results = ad.results || 0;
  
    return {
      id: ad.id,
      campaign,
      adset,
      creative,
      spend: parseFloat(spend),
      impressions: parseInt(impressions),
      clicks: parseInt(clicks),
      results: parseInt(results),
      // Keep original data for reference
      originalData: ad
    };
  };