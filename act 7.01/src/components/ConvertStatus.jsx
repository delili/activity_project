import React from 'react';
import { StatusConsumer } from '../StatusContext';

const ConvertStatus = () => {
  const getStatus = (value) => {
    if (value > 50) return 'Very hot';
    if (value > 30) return 'Hot';
    if (value > 15) return 'Warm';
    if (value > 0) return 'Cool';
    if (value > -10) return 'Cold';
    return 'Very cold';
  };

  return (
    <StatusConsumer>
      {(celsius) => <div className="status">Status: {getStatus(celsius)}</div>}
    </StatusConsumer>
  );
};

export default ConvertStatus;
