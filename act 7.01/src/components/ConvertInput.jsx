import React from 'react';

const ConvertInput = ({ convertTo = 'fahrenheit', temperature, updateTemperature }) => {
  const handleTemperatureChange = (event) => {
    updateTemperature(convertTo, event.target.value);
  };

  return (
    <label>
      <span>{convertTo === 'celsius' ? 'Fahrenheit: ' : 'Celsius:'}</span>
      <input
        type="number"
        name="temperature"
        value={temperature}
        onChange={handleTemperatureChange}
      />
    </label>
  );
};

export default ConvertInput;
