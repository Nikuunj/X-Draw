import dotenv from 'dotenv';

dotenv.config({ path: "../../.env" });

export const JWT_SECRET = process.env.JWT_SECRET || 'default_secret';
export const REDIS_URL = process.env.REDIS_URL || "redis://localhost:6379"