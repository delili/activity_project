import React from 'react';
import ConvertStatus from './ConvertStatus';
import ConvertInput from './ConvertInput';

const ConvertForm = ({ temperature, updateTemperature }) => {
  return (
    <div>
      <div>
        <ConvertInput
          temperature={temperature.celsius}
          updateTemperature={updateTemperature}
        />
      </div>
      <div>
        <ConvertInput
          temperature={temperature.fahrenheit}
          convertTo="celsius"
          updateTemperature={updateTemperature}
        />
      </div>
      <ConvertStatus />
    </div>
  );
};

export default ConvertForm;
