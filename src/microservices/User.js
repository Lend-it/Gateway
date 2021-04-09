import { baseMultiFormPatch, basePatch, basePost, basePut } from '../utils/baseRequest.js';
import endpoint from '../utils/endpoint.js';
import FormData from 'form-data';
import fs from 'fs';

const { user } = endpoint[process.env.NODE_ENV] || endpoint.fallback;

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

async function createSession(req, res) {
  res.json(await basePost(`${user}/session`, req.body));
}

export default {
  createUser,
  createSession,
  updateAvatar,
  updateUser
};
