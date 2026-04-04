'use strict';

import express, { json, urlencoded } from 'express';
import dotenv from 'dotenv';
import { connectDatabase } from './config/db';
import { otpRouter } from './routes/otp.routes';
import { errorHandler } from './middleware/errorHandler';

// Load environment variables from .env (if present)
dotenv.config();

const app = express();

app.use(json());
app.use(urlencoded({ extended: true }));

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.use('/api', otpRouter);

// Global error handler
app.use(errorHandler);

const port = Number(process.env.PORT ?? 4000);

connectDatabase()
  .then(() => {
    app.listen(port, () => {
      // eslint-disable-next-line no-console
      console.log(`🚀 Server listening on http://localhost:${port}`);
    });
  })
  .catch((error) => {
    // eslint-disable-next-line no-console
    console.error('Failed to start server', error);
    process.exit(1);
  });
