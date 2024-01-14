import mongoose from "mongoose";

const complaintSchema = new mongoose.Schema({
    flatId: { type: mongoose.Schema.Types.ObjectId, ref: "Flat", required: false },
    memberId: { type: mongoose.Schema.Types.ObjectId, ref: "Member", required: true },
    status: { type: String, enum: ['pending', 'in-progress', 'resolved'], default: 'pending' },
    title: { type: String},
    details: { type: String, required: true },
    isOwner: { type: Boolean, default: false },
    isTenant: { type: Boolean, default: false },
    comments: { type: String},
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now },
  });
  
const Complaint = mongoose.model("Complaint", complaintSchema);
export default Complaint;