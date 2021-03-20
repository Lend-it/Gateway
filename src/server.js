import express from 'express';
import app from './app.js';

const HOST = 'localhost';
const PORT = process.env.PORT || 3002;
app.listen(PORT);

console.log(`Running at ${HOST}:${PORT}`);
