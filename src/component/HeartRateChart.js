// HeartRateChart.js
import React from 'react';
import Chart from 'react-google-charts';

const HeartRateChart = ({ heartRateData }) => {
  return (
    <Chart
      width={'100%'}
      height={'400px'}
      chartType="LineChart"
      loader={<div>Loading Chart</div>}
      data={heartRateData}
      options={{
        title: 'Heart Rate Fluctuations',
        curveType: 'function',
        legend: { position: 'bottom' },
      }}
    />
  );
};

export default HeartRateChart;
