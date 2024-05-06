

import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './index.css'

// StatisticsHeader component
const StatisticsHeader = ({ selectedMonth }) => (
    <h2>Statistics - {selectedMonth}</h2>
);

// StatisticsContainer component

const StatisticsContainer = ({ statistics }) => (
  <div className='statitics-container'>
      <div className='element'>
          <span>Total Sale:</span>
          <span>{statistics.totalSaleAmount}</span>
      </div>
      <div className='element'>
          <span>Total sold items:</span>
          <span>{statistics.totalSoldItems}</span>
      </div>
      <div className='element'>
          <span>Total not sold items:</span>
          <span>{statistics.totalNotSoldItems}</span>
      </div>
  </div>

);

// Statistics component
const Statistics = ({ selectedMonth }) => {
    const [statistics, setStatistics] = useState({});

    useEffect(() => {
        const getStatistics = async () => {
            try {
                const response = await axios.get(`https://newproject-o3v2.onrender.com/statistics/?month=${selectedMonth}`);
                setStatistics(response.data);
            } catch (error) {
                console.error('Error fetching statistics:', error);
            }
        }

        getStatistics();
    }, [selectedMonth]);

    return (
        <div className='statistics-main-container'>
            <StatisticsHeader selectedMonth={selectedMonth} />
            <StatisticsContainer statistics={statistics} />
        </div>
    );
};

export default Statistics;
