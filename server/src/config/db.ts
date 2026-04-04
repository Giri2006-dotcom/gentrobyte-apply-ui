'use strict';

import mongoose from 'mongoose';

/**
 * Connects to MongoDB using the MONGODB_URI environment variable.
 *
 * Example .env:
 *   MONGODB_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/gentrobyte?retryWrites=true&w=majority
 */
export async function connectDatabase(): Promise<void> {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error('MONGODB_URI is not defined in environment variables');
  }

  await mongoose.connect(uri, {
    // Use default mongoose connection options; for a production deployment,
    // you may want to tune the following based on your MongoDB provider.
    autoIndex: true,
  });

  mongoose.connection.on('connected', () => {
    console.log('✅ MongoDB connected');
  });

  mongoose.connection.on('error', (error) => {
    console.error('❌ MongoDB connection error:', error);
  });
}
