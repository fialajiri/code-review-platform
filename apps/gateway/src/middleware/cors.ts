/** @format */

import { Request, Response, NextFunction } from 'express';

interface CorsOptions {
  origin?: string | string[] | boolean;
  methods?: string[];
  allowedHeaders?: string[];
  credentials?: boolean;
}

/**
 * Custom CORS middleware
 * Replaces the outdated cors package with a modern implementation
 */
export const corsMiddleware = (options: CorsOptions = {}) => {
  const {
    origin = '*',
    methods = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders = ['Content-Type', 'Authorization'],
    credentials = false,
  } = options;

  return (req: Request, res: Response, next: NextFunction) => {
    // Determine allowed origin
    const requestOrigin = req.headers.origin;
    let allowedOrigin: string;

    if (origin === '*') {
      allowedOrigin = '*';
    } else if (typeof origin === 'string') {
      allowedOrigin = origin;
    } else if (Array.isArray(origin) && requestOrigin && origin.includes(requestOrigin)) {
      allowedOrigin = requestOrigin;
    } else if (origin === true && requestOrigin) {
      allowedOrigin = requestOrigin;
    } else {
      allowedOrigin = '*';
    }

    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', allowedOrigin);
    res.setHeader('Access-Control-Allow-Methods', methods.join(', '));
    res.setHeader('Access-Control-Allow-Headers', allowedHeaders.join(', '));

    if (credentials) {
      res.setHeader('Access-Control-Allow-Credentials', 'true');
    }

    // Handle preflight requests
    if (req.method === 'OPTIONS') {
      return res.status(204).send();
    }

    next();
  };
};
