import {
  baseGet,
  baseMultiFormPatch,
  basePatch,
  basePost,
  basePut,
  queryGet,
} from '../utils/baseRequest.js';
import endpoint from '../utils/endpoint.js';
import FormData from 'form-data';
import fs from 'fs';
import { mergeUserDataFromRequest } from '../utils/mergeUser.js';

const { user, rating, request } =
  endpoint[process.env.NODE_ENV] || endpoint.fallback;

async function createUser(req, res) {
  res.json(await basePost(`${user}/users`, req.body));
}

async function updateUser(req, res) {
  res.json(await basePut(`${user}/users`, req.body));
}

async function updateAvatar(req, res) {
  const avatar = req.file;
  const { useremail } = req.body;

  const formData = new FormData();
  formData.append('avatar', fs.createReadStream(avatar.path));
  formData.append('useremail', useremail);

  res.json(await baseMultiFormPatch(`${user}/users/avatar`, formData));
}

async function updateLocation(req, res) {
  res.json(await basePatch(`${user}/users/location`, req.body));
}

async function createSession(req, res) {
  res.json(await basePost(`${user}/session`, req.body));
}

async function getUserRequests(req, res) {
  const { useremail } = req.params;
  const { data: userRequester } = await queryGet(`${request}/requests`, {
    requester: useremail,
  });
  const { data: userLender } = await queryGet(`${request}/requests`, {
    lender: useremail,
  });

  const { data: rates } = await baseGet(`${rating}/rating`);

  const userRequesterRates = userRequester.requests.map(request => {
    const rate = rates.rates.find(rate => rate.requestid === request.requestid);
    return {
      ...request,
      rate,
    };
  });

  const userLenderRates = userLender.requests.map(request => {
    const rate = rates.rates.find(rate => rate.requestid === request.requestid);
    return {
      ...request,
      rate,
    };
  });

  const mergedUserWithRequester = await mergeUserDataFromRequest(userLenderRates);
  const mergedUserWithLender = await mergeUserDataFromRequest(userRequesterRates);

  return res.status(200).json({ mergedUserWithRequester, mergedUserWithLender });
}

export default {
  createUser,
  createSession,
  updateAvatar,
  updateUser,
  updateLocation,
  getUserRequests,
};
