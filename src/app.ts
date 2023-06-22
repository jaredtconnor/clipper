import express from 'express';
import mongoose from 'mongoose';
import { userRoutes } from './routes/userRoutes';
import { authRoutes } from './routes/authRoutes';

class App {
  public app: express.Application;
  private readonly mongoUri: string;

  constructor() {
    this.app = express();
    this.mongoUri = process.env.MONGO_URI!;
    this.config();
    this.routes();
    this.connect();
  }

  private config() {
    this.app.use(express.json());
  }

  private routes() {
    this.app.use('/users', userRoutes);
    this.app.use('/auth', authRoutes);
  }

  private async connect() {
    try {
      await mongoose.connect(this.mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error(error);
      process.exit(1);
    }
  }
}

export { App };
