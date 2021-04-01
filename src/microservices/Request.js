import {
  baseGet,
  basePut,
  basePost,
  baseDelete,
} from '../utils/baseRequest.js';
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

async function updateRequest(req, res) {
  res.json(await basePut(`${request}/requests/${req.params.id}`, req.body));
}

async function deleteRequest(req, res) {
  res.json(await baseDelete(`${request}/requests/${req.params.id}`, req.body));
}

export default {
  getProductCategory,
  createProductCategory,
  getRequest,
  createRequest,
  updateRequest,
  deleteRequest,
};
