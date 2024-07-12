import React, { useEffect, useState } from 'react';
import './App.css';
import { forecastItemModel } from './Interfaces';
import ApiForecastCall from './API/forecastItemApi';
import { ForecastItemCard } from './Page';

function App() {
  const [forecastItem, setForecastItems] = useState<forecastItemModel[]>([]);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() =>{
    getData().then(r=>{});
  },[]);

  async function getData() {
    try {
      const response = await ApiForecastCall();
      setForecastItems(response);
      setError(null);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('An unknown error occurred');
      }
      setForecastItems([]);
    }
}
  
  return (
    <div className="container p-2">
      <div className="container row-2">
        {forecastItem.map((forecastItem, index) =>
        (
          <ForecastItemCard forecastItem={forecastItem} key={index} />
        ))
        }
      </div>
    </div>
  );
}

export default App;
