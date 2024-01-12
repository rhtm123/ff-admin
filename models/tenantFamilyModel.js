// const mongoose = require('mongoose');
import mongoose from "mongoose";

const tenantFamilySchema = new mongoose.Schema({
  tenantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Tenant', required: true },
  memberId: { type: mongoose.Schema.Types.ObjectId, ref: 'Member', required: true },

  relation: {type: String},

  created: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now },
});

const TenantFamily = mongoose.model("TenantFamily", tenantFamilySchema);

export default TenantFamily;
