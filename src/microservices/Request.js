import {
  baseGet,
  basePut,
  basePost,
  baseDelete,
  basePatch,
} from '../utils/baseRequest.js';
import endpoint from '../utils/endpoint.js';
import { mergeUserDataFromRequest } from '../utils/mergeUser.js';

const { request } = endpoint[process.env.NODE_ENV] || endpoint.fallback;

async function getProductCategory(req, res) {
  res.json(await baseGet(`${request}/product_category`));
}

async function getFilteredByCategoryRequest(req, res) {
  const response = await baseGet(
    `${request}/requests/${req.params.categoryId}`
  );
  const requests = response.data.requests;
  const mergedUserWithRequest = await mergeUserDataFromRequest(requests);

  res.json(mergedUserWithRequest);
}

async function createProductCategory(req, res) {
  res.json(await basePost(`${request}/product_category`, req.body));
}

async function getRequest(req, res) {
  const response = await baseGet(`${request}/requests`);
  const requests = response.data.requests;
  const mergedUserWithRequest = await mergeUserDataFromRequest(requests);

  res.status(200).json(mergedUserWithRequest);
}

async function updateLender(req, res) {
  const id = req.params.id;

  res.json(await basePatch(`${request}/requests/${id}`, req.body));
}

async function finalizeRequest(req, res) {
  const id = req.params.id;

  res.json(await basePatch(`${request}/requests/${id}/finalize`, null));
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
  getFilteredByCategoryRequest,
  getRequest,
  createRequest,
  updateRequest,
  deleteRequest,
  updateLender,
  finalizeRequest,
};
