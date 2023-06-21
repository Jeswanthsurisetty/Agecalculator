import React, { useState } from 'react';
import './AgeCalculator.css';

function AgeCalculator() {
  const [birthDate, setBirthDate] = useState('');
  const [age, setAge] = useState('');

  const calculateAge = () => {
    const currentDate = new Date();
    const selectedDate = new Date(birthDate);

    if (isNaN(selectedDate)) {
      setAge('Invalid Date');
    } else {
      const diffInMilliseconds = currentDate - selectedDate;
      const years = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24 * 365.25));
      setAge(`Your age is ${years} years`);
    }
  };

  return (
    <div className="AgeCalculator">
      <h2>Age Calculator</h2>
      <label htmlFor="birthDate">Enter your date of birth</label>
      <div className="input-container">
        <input
          type="date"
          id="birthDate"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
        />
      </div>
      <div className="button-container">
        <button onClick={calculateAge}>Calculate Age</button>
      </div>
      <p>{age}</p>
    </div>
  );
}

export default AgeCalculator;
