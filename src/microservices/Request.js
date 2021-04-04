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

async function getFilteredByCategoryRequest(req, res) {
  res.json(await baseGet(`${request}/requests/${req.params.categoryId}`));
}

async function createProductCategory(req, res) {
  res.json(await basePost(`${request}/product_category`, req.body));
}

async function getRequest(req, res) {
  const response = await baseGet(`${request}/requests`);

  const requests = response.data.requests;

  const requesters = requests.map(request => request.requester);
  const lenders = requests.map(request => request.lender);

  const usersIds = [...lenders, ...requesters];
  const usersIdsString = usersIds.join(',');

  const users = await queryGet(`${user}/users`, {
    requestUsers: usersIdsString,
  });

  const mergedRequest = requests.map(function joinUsersDataToRequest(request) {
    const requester = users.find(user => user.useremail === request.requester);
    const lender = users.find(user => user.useremail === request.lender);

    return {
      ...request,
      lender,
      requester,
    };
  });

  res.status(200).json(mergedRequest);
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
