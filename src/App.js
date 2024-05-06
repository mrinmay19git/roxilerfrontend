import React from 'react';
import Transactions from './components/Transactions';
import './App.css';

const App = () => {
  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours();
    let greeting = '';

    if (hours < 12) {
      greeting = 'Good morning';
    } else if (hours < 18) {
      greeting = 'Good afternoon';
    } else {
      greeting = 'Good evening';
    }

    return greeting;
  };

  return (
    <div className='app-container'>
      <div className='greeting-message'>
        {getCurrentTime()}, welcome to your transaction dashboard!
      </div>
      <Transactions />
    </div>
  );
};

export default App;
