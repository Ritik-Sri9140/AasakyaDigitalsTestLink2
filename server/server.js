const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const todoRoutes = require('./routes/todos');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use('/api/todos', todoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
