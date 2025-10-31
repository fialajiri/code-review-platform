/** @format */

import express from 'express';
import dotenv from 'dotenv';
import { corsMiddleware } from './middleware/cors.js';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(corsMiddleware());
app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'gateway' });
});

// Basic API route
app.get('/api/v1', (req, res) => {
  res.json({ message: 'Gateway API v1' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Gateway server running on http://localhost:${PORT}`);
});
