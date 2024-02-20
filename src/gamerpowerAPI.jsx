/* eslint-disable no-unused-vars */
// This component fetches data from the GamerPower API and displays the titles of the giveaways
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './gamerpowerAPI.css';
/**
 * Component to display the titles of the giveaways from GamerPower API
 */
function GamerPower() {
  // State to store the data fetched from the API
  const [data, setData] = useState([]);
  //define the platform you want to search giveaways for   
  const game_platform = 'steam';
  // API key
  const apiKey = import.meta.env.VITE_GAMERPOWER_API;
  // Fetch data from the API when the component mounts
  useEffect(() => {
    /**
     * Function to fetch data from the GamerPower API
     */
    const fetchData = async () => {
      try {
        // Fetch data from the API
        const apiRequest = 'https://gamerpower.p.rapidapi.com/api/giveaways';
        const response = await axios.get(apiRequest, {
          headers: {
            'X-RapidAPI-Host': 'gamerpower.p.rapidapi.com',
            'X-RapidAPI-Key': apiKey, // Add your API key
          },
          params: {
            // platform: game_platform, // Replace with the actual platform value, e.g., 'platform'
            id: '2776'
          },
        });
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data from the API:', error);
      }
    };
    fetchData();
  }, [apiKey, game_platform]);
  // Render the titles of the giveaways
  return (
    <div>
      <h1>Giveaways</h1>
      <ul className="scrollable-section">
        {data.map((item) => (
            // (item.id === 2776) ? 
            <li className ='giveaway' key={item.id}>
                <a href={item.gamerpower_url}>
                    <img src = {item.thumbnail}/>
                </a>
                <p className='gifttext'>{item.title}</p>
                <date>Giveaway End date: {item.end_date}</date>
                <p className='gifttext'>{item.platforms}</p>
                <p className='gifttext'>{item.type}</p>
            </li> 
            // :null
        ))}
      </ul>
    </div>
  );
}
export default GamerPower;