import { basePost } from '../utils/baseRequest.js';

const url = 'https://lendit-user-hom.herokuapp.com';

async function createUser(req, res) {
  const postData = req.body;
  res.json(await basePost(`${url}/users`, postData));
}

async function createSession(req, res) {
  const postData = req.body;
  res.json(await basePost(`${url}/session`, postData));
}

export default {
  createUser,
  createSession,
};
