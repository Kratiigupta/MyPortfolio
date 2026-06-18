// 1. Imports ko change kiya (require -> import)
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import process from 'process';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// 2. MongoDB Connection
// Note: Agar local DB use kar rahe ho to URI 'mongodb://127.0.0.1:27017/portfolio' try karein
mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/portfolio')
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.log('❌ Connection Error:', err));

// 3. Database Model
const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  date: { type: Date, default: Date.now }
});

const Contact = mongoose.model('Contact', ContactSchema);

// 4. Route for Form Submission
// FIX: Yahan 'app.posl' likha tha, usko 'app.post' kar diya hai
app.post('/api/contact', async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();
    res.status(201).json({ message: 'Success' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Server Start
const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));