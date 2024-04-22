import React, { useState, useEffect } from 'react';
import HeartRateChart from './component/HeartRateChart';

const PatientsPage = () => {
  const [patients, setPatients] = useState([]);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const apiUrl = `http://localhost:3000/patients`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setPatients(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [startIndex]);

  const handleNextClick = () => {
    setStartIndex(startIndex + 10);
  };

  const heartRateData = [
    ['Time', 'Heart Rate'],
    [0, 70],
    [1, 75],
    [2, 80],
  ];

  return (
    <div className="patient-grid">
      <h2>🌟 Brave personalities overcoming challenges 🌟</h2>
      {patients.map((patient) => (
        <div key={patient.patient_id} className="patient-card">
          <p><strong>Patient ID:</strong> {patient.patient_id}</p>
          <p><strong>Patient Name:</strong> {patient.patient_name}</p>
          <p><strong>Age:</strong> {patient.age}</p>
          <p><strong>Gender:</strong> {patient.gender}</p>
          <p><strong>Diagnosis:</strong> {patient.diagnosis}</p>
          <p><strong>Address:</strong> {patient.address}</p>
          <p><strong>Guardian Name:</strong> {patient.guardian_name}</p>
          <p><strong>Phone:</strong> {patient.phone}</p>
          <p><strong>Email:</strong> {patient.email}</p>
          <p><strong>Difficulty:</strong> {patient.difficulty}</p>
          <HeartRateChart heartRateData={heartRateData} />
        </div>
      ))}
      <button onClick={handleNextClick}>Load Next 10 Patients</button>
    </div>
  );
};

export default PatientsPage;
