import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();

import dotenv from 'dotenv';
dotenv.config();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('DB Connection Successful');
  })
  .catch((err) => console.log(err.message));

const port = process.env.PORT || 5000;

const server = app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
