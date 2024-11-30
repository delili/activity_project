import React, { Component } from 'react';
import './App.css';
import ConvertForm from './components/ConvertForm';
import { StatusProvider } from './StatusContext';

class App extends Component {
  constructor(props) {
    super(props);
    const defaultCelsius = 20;
    this.state = {
      celsius: defaultCelsius,
      fahrenheit: this.convertToFahrenheit(defaultCelsius),
    };
  }

  convertToFahrenheit(celsius) {
    return parseInt((celsius * 9) / 5 + 32);
  }

  convertToCelsius(fahrenheit) {
    return parseInt(((fahrenheit - 32) * 5) / 9);
  }

  updateTemperature = (convertTo, value) => {
    const isEmpty = value === '' || value === '-';
    const parsedValue = parseFloat(value);

    this.setState(() => {
      if (isEmpty) {
        const emptyValue = value === '-' ? '-' : '';
        return { celsius: emptyValue, fahrenheit: emptyValue };
      }

      return convertTo === 'celsius'
        ? {
            celsius: this.convertToCelsius(parsedValue),
            fahrenheit: parseInt(parsedValue),
          }
        : {
            celsius: parseInt(parsedValue),
            fahrenheit: this.convertToFahrenheit(parsedValue),
          };
    });
  };

  render() {
    return (
      <div className="container">
        <h1>Temperature Converter</h1>
        
        <StatusProvider value={this.state.celsius}>
          <ConvertForm
            temperature={this.state}
            updateTemperature={this.updateTemperature}
          />
        </StatusProvider>
      </div>
    );
  }
}

export default App;
