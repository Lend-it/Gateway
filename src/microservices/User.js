import { basePost } from '../utils/baseRequest.js';
import endpoint from '../utils/endpoint.js';

const { user } = endpoint[process.env.NODE_ENV] || endpoint.fallback;

async function createUser(req, res) {
  res.json(await basePost(`${user}/users`, req.body));
}

async function createSession(req, res) {
  res.json(await basePost(`${user}/session`, req.body));
}

export default {
  createUser,
  createSession,
};
