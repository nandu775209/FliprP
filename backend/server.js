// server.js
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

const projectRoutes = require('./routes/projectRoutes');
const clientRoutes = require('./routes/clientRoutes');
const contactRoutes = require('./routes/contactRoutes');
const subscriptionRoutes = require('./routes/subscriptionRoutes');
// Load env vars
dotenv.config();

// Connect to Database
connectDB();

const app = express();

// Middlewares
app.use(cors()); 
app.use(express.json()); 

// Basic Test Route
app.get('/', (req, res) => {
  res.send('API is running successfully...');
});


app.use('/api/projects', projectRoutes);
app.use('/api/clients', clientRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/subscribe', subscriptionRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});