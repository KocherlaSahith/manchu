const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const cors = require('cors');
app.use(cors());
app.use(bodyParser.json());
const mongoURI = 'mongodb+srv://sahithkocherla:abcdef1234@cluster0.aj9bc3p.mongodb.net/food';
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const FormEntrySchema = new mongoose.Schema({
  name: String,
  date: String,
  time: String,
  meal: String,
});

const FormEntry = mongoose.model('FormEntry', FormEntrySchema);n
app.post('/submit', async (req, res) => {
  try {
    const { name, date, time, meal } = req.body;
    const newFormEntry = new FormEntry({ name, date, time, meal });
    await newFormEntry.save();
    res.status(201).json({ message: 'Form entry saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred' });
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
