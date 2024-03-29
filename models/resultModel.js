const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Result must have student name.'],
    unique: true,
    trim: true,
    maxlength: [40, 'A student name cannot exceed more than 40 characters.'],
    minlength: [10, 'A student name must contain atleast 10 characters.'],
  },
  id: {
    type: Number,
    required: [true, 'A Student must have his id'],
  },
  semester: {
    type: Number,
    required: [true, 'Please mention the semester the student is studying.'],
  }
});
