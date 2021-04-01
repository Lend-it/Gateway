import { baseGet, basePost } from '../utils/baseRequest.js';
import endpoint from '../utils/endpoint.js';

const { request } = endpoint[process.env.NODE_ENV] || endpoint.fallback;

async function createRequest(req, res) {
  res.json(await basePost(`${request}/requests`, req.body));
}

async function getProductCategory(req, res) {
  res.json(await baseGet(`${request}/product_category`));
}

export default {
  createRequest,
  getProductCategory,
};
