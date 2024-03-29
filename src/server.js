import dotenv from 'dotenv';

import app from './app.js';

dotenv.config();

const HOST = 'localhost';
const PORT = process.env.PORT || 3000;

app.listen(PORT);

console.log(`Running at ${HOST}:${PORT}`);
