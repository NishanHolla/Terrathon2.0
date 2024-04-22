import React, { useState, useEffect } from 'react';

const WearAble = () => {
  const [sensorData, setSensorData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/sensordata');
        if (!response.ok) {
          throw new Error('Failed to fetch sensor data');
        }
        const data = await response.json();
        setSensorData(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="wearable">
      <h2>Sensor Information</h2>
      {loading && <p>Loading sensor data...</p>}
      {error && <p>Error: {error}</p>}
      {sensorData && (
        <div className="sensor-data">
          <p><strong>Patient ID:</strong> {sensorData._id}</p>
          <p><strong>Patient Name:</strong> {sensorData.patient_name} bpm</p>
          <p><strong>Device Type:</strong> {sensorData.device_type} °C</p>
          <p><strong>Sleep Cycle:</strong> {sensorData.sleepCycle}</p>
          <p><strong>ECG:</strong> {sensorData.ECG}</p>
          <p><strong>Food Consumption:</strong> {sensorData.foodConsumption}</p>
          <p><strong>Stress Level:</strong> {sensorData.stressLevel}</p>
        </div>
      )}
    </div>
  );
};

export default WearAble;
