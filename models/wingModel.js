// const mongoose = require('mongoose');
import mongoose from "mongoose";

const wingSchema = new mongoose.Schema({
  societyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Society', required: true },
  name: { type: String },
  
  created: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now },
});

const Wing = mongoose.model("Wing", wingSchema);

export default Wing;
