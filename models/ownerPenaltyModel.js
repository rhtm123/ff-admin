// const mongoose = require('mongoose');
import mongoose from "mongoose";

const ownerPenaltySchema = new mongoose.Schema({
    penaltyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Penalty', required: true },
    ownerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Owner', required: true },
    details: { type: String },
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now },
  });
  
const OwnerPenalty = mongoose.model("OwnerPenalty", ownerPenaltySchema);
  
export default OwnerPenalty;
  // module.exports = OwnerPenalty;