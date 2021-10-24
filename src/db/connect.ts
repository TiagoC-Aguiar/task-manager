import mongoose from 'mongoose';

const connectDB = async (url: string | undefined): Promise<typeof mongoose> => {
  if(!url) {
    throw new Error('Error in url of connection');
  }
  return await mongoose.connect(url);
}

export default connectDB;
