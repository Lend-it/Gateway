import {
  baseGet,
  basePut,
  basePost,
  baseDelete,
  queryGet,
  basePatch,
} from '../utils/baseRequest.js';
import endpoint from '../utils/endpoint.js';

const { request, user } = endpoint[process.env.NODE_ENV] || endpoint.fallback;

async function getProductCategory(req, res) {
  res.json(await baseGet(`${request}/product_category`));
}

async function createProductCategory(req, res) {
  res.json(await basePost(`${request}/product_category`, req.body));
}

async function getRequest(req, res) {
  const response = await baseGet(`${request}/requests`);

  const requests = response.data.requests;

  const requesters = requests.map(request => {
    return request.requester;
  });

  const requestersString = requesters.join(',');

  const users = await queryGet(`${user}/users`, {
    requestUsers: requestersString,
  });

  const fixedRequests = requests.map(request => {
    const requester = users.find(user => user.useremail === request.requester);
    const lender = users.find(user => user.useremail === request.lender);

    return {
      ...request,
      lender,
      requester,
    };
  });

  res.status(200).json(fixedRequests);
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
  getRequest,
  createRequest,
  updateRequest,
  deleteRequest,
  updateLender,
  finalizeRequest
};
