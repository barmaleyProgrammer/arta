import React, { useState } from 'react';
import Footer from "./Footer";

export default function StartScreen({ onStart }) {
  const [userName, setUserName] = useState('');
  const [isError, setIsError] = useState(false);

  const handleNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleStartClick = () => {
    if (userName.trim() === '') {
      setIsError(true);
    } else {
      onStart(userName);
    }
  };

  const currentDate = new Date().toLocaleDateString();

  return (
      <div style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh'
      }}>
          <div style={{flex: 1, padding: 20, textAlign: 'center'}}>
      {/* Логотип і 23 ЗМО */}
      <div
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
          borderRadius: '10px',
          padding: '10px 20px',
          display: 'inline-block',
          marginBottom: '20px',
        }}
      >
        <img
          src="images/dpsu.jpg" // Шлях відносно public
          alt="Логотип ДПСУ"
          style={{
            width: '80px',
            height: '80px',
            objectFit: 'contain',
            marginBottom: '10px',
          }}
        />
        <h2 style={{ margin: 0, fontWeight: 'bold' }}>23 ЗМО</h2>
      </div>

      <h1>Тест: визначення рівня підготовленості до самостійного управління кораблем
з ракетно-артилерійської підготовки
</h1>
      <p>Дата: {currentDate}</p>

      <p>Будь ласка, введіть своє ім’я та прізвище:</p>
      <input
        type="text"
        value={userName}
        onChange={handleNameChange}
        placeholder="Ваше ім’я"
        style={{
          padding: '10px',
          borderRadius: '5px',
          border: '1px solid #ccc',
          marginBottom: '10px',
          width: '100%',
        }}
      />
      {isError && <p style={{ color: 'red' }}>Будь ласка, введіть ім’я!</p>}
      <button
        onClick={handleStartClick}
        style={{
          padding: '10px 20px',
          backgroundColor: '#3399ff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Розпочати тест
      </button>
    </div>
          <Footer/>
      </div>
  );
}
