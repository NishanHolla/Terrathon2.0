const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const app = express();
const port = process.env.PORT || 3001;
app.use(cors());
app.use(bodyParser.json());

dotenv.config();

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define the schema for the "patients" collection
const patientSchema = new mongoose.Schema({
  patient_id: String,
  patient_name: String,
  age: Number,
  gender: String,
  diagnosis: String,
  address: String,
  guardian_name: String,
  phone: String,
  email: String,
  difficulty: String,
  // Add other patient-related fields as needed
});

// Create the "patients" model
const Patient = mongoose.model('patients', patientSchema);

// Fetch 10 patients from the database with specific fields
app.get('/patients', async (req, res) => {
  try {
    const patients = await Patient.find({}, 'patient_id patient_name age gender diagnosis address guardian_name phone email difficulty');
    res.json(patients);
  } catch (error) {
    console.error('Error fetching patients:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


const sensorDataSchema = new mongoose.Schema({
    timestamp: { type: Date, required: true },
    patient_id: { type: String, required: true },
    patient_name: { type: String, required: true },
    device_type: { type: String, enum: ['RespiBAN', 'Empatica E4'], required: true },
    ECG: [Number],
    EDA: [Number],
    EMG: [Number],
    respiration: [Number],
    body_temperature: Number,
    acceleration_x: [Number],
    acceleration_y: [Number],
    acceleration_z: [Number],
    BVP: [Number],
  });
  
  // Define sensor data model
  const SensorData = mongoose.model('sensor_datas', sensorDataSchema);
  
  app.get('/sensordata', async (req, res) => {
    try {
      console.log(req)
      const sensorData = await SensorData.find();
  
      res.json(sensorData);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
    }
  });

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
