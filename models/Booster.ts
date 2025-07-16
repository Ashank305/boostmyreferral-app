import mongoose, { Schema, model, models } from 'mongoose';

const BoosterSchema = new Schema({
  name: { type: String, required: true },
  company: { type: String, required: true },
  role: { type: String, required: true },
  experience: { type: Number, required: true }, // years
  profileImage: { type: String }, // optional
  referralsMade: { type: Number, default: 0 },
  sessionsTaken: { type: Number, default: 0 },
  linkedin: { type: String },
  email: { type: String },
});

const Booster = models.Booster || model('Booster', BoosterSchema);

export default Booster;
