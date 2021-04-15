import { basePostRating } from '../utils/baseRequest.js';
import endpoint from '../utils/endpoint.js';

const { rating } = endpoint[process.env.NODE_ENV] || endpoint.fallback;

async function createRating(req, res) {
  res.json(await basePostRating(`${rating}/rating`, req.body, req.headers));
}

export default {
  createRating,
};
