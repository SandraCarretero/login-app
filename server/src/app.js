const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');
const path = require('path');
const authRoutes = require('./routes/auth.routes');
const usersRoutes = require('./routes/users.routes');
const corsOptions = require('./config/cors.config');

require('dotenv').config();

// Rutas

// Middlewares para cliente

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use(fileUpload());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Uso de rutas
app.use('/auth', authRoutes);
app.use('/api/users', usersRoutes);

const startSever = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log('Connected to database');
  } catch (err) {
    console.log('Connecting error');
  }
  app.listen(process.env.PORT, () =>
    console.log(`Server running at port ${process.env.PORT}`)
  );
};

startSever();
