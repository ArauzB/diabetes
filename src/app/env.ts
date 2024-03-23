import * as dotenv from 'dotenv';

dotenv.config();

export const environment = {
  production: false, // Puedes configurar esto según tus necesidades
  apiUrl: process.env.API_URL,
};
