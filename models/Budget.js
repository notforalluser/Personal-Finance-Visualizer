import mongoose from "mongoose";

const BudgetSchema = new mongoose.Schema({
  category: { type: String, required: true },
  limit: { type: Number, required: true, },
  userToken: { type: String, required: true, },
}, { timestamps: true });

export default mongoose.models.Budget || mongoose.model("Budget", BudgetSchema);
