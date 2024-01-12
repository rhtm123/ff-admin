// const mongoose = require('mongoose');
import mongoose from 'mongoose';

const builderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  website: { type: String },
  ffrating: { type: Number },
  contact: { type: String },
  email: { type: String },
  
  created: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now },
});

const Builder = mongoose.model("Builder", builderSchema);

export default Builder;

