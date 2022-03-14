import mongoose from 'mongoose';

async function connectDb() {
  try {
    const URL: string = process.env.MONGO_URL!;
    await mongoose.connect(URL);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.log(error);
  }
}

module.exports = connectDb;
