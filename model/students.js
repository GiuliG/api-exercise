'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const studentSchema = new Schema({
  name: {
    type: String
  }
});

const Student = mongoose.model('student', studentSchema);

module.exports = Student;