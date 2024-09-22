import dotenv from 'dotenv'; // Load environment variables from .env file
dotenv.config();

const config = {
    DATABASE_URL: process.env.DATABASE_URL,
    DIRECT_URL: process.env.DIRECT_URL,
    JWT_SECRET: process.env.JWT_SECRET,
};



export default config;
