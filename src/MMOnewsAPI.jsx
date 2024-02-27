// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './gamerpowerAPI.css';

function MMOnewsAPI() {
    // State to store the data fetched from the API
    const [data, setData] = useState([]);
    //define the platform you want to search reviews for
    const game_platform = 'all';
    // API key
    const apiKey = import.meta.env.VITE_GAMERPOWER_API;
    useEffect(() => {
        /**
         * Function to fetch data from the OpenCritic API
         */
        const fetchData = async () => {
          try {
            // Fetch data from the API
            const apiRequest = 'https://mmo-games.p.rapidapi.com/latestnews';
            const response = await axios.get(apiRequest, {
              headers: {
                'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com',
                'X-RapidAPI-Key': apiKey, // Add your API key
              }
            });
            setData(response.data);
          } catch (error) {
            console.error('Error fetching data from the API:', error);
          }
        };
        fetchData();
      }, [apiKey, game_platform]);
    return (
    <div>
      <h1>Reviews</h1>
      <ul className='scrollable-section'>
        {data.map((item) => (
            <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}
export default MMOnewsAPI;