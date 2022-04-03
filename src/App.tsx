import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className='app'> 
      <h1>
        <LoginPage />
        {/* <HomePage /> */}
      </h1>
    </div>      
  );
}

export default App;
