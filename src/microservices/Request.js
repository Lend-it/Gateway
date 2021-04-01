import { baseGet, basePost } from '../utils/baseRequest.js';
import endpoint from '../utils/endpoint.js';

const { request } = endpoint[process.env.NODE_ENV] || endpoint.fallback;

async function getProductCategory(req, res) {
  res.json(await baseGet(`${request}/product_category`));
}

async function createProductCategory(req, res) {
  res.json(await basePost(`${request}/product_category`, req.body));
}

async function getRequest(req, res) {
  res.json(await baseGet(`${request}/requests`));
}

async function createRequest(req, res) {
  res.json(await basePost(`${request}/requests`, req.body));
}

export default {
  getProductCategory,
  createProductCategory,
  getRequest,
  createRequest,
};
