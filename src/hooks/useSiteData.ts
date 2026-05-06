import { useState, useEffect } from 'react';
import { SiteData, INITIAL_DATA } from '../types';

const STORAGE_KEY = 'pratiksha_site_data';

export function useSiteData() {
  const [data, setData] = useState<SiteData>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse site data', e);
      }
    }
    return INITIAL_DATA;
  });

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // VERCEL DATABASE READ TODO:
    /*
    fetch(process.env.KV_REST_API_URL + '/get/siteData', {
      headers: { Authorization: 'Bearer ' + process.env.KV_REST_API_TOKEN }
    })
    .then(res => res.json())
    .then(kvData => {
      if (kvData.result) setData(JSON.parse(kvData.result));
    });
    */
    setIsLoaded(true);
  }, []);

  const updateData = (newData: SiteData) => {
    setData(newData);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));

    // VERCEL DATABASE WRITE TODO:
    /*
    fetch(process.env.KV_REST_API_URL + '/set/siteData', {
      method: 'POST',
      headers: { 
        Authorization: 'Bearer ' + process.env.KV_REST_API_TOKEN,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ value: JSON.stringify(newData) })
    });
    */
  };

  return { data, updateData, isLoaded };
}
