import { basePost } from '../utils/baseRequest.js';

const url = 'https://lendit-request-homolog.herokuapp.com';

async function createRequest(req, res) {
  res.json(await basePost(`${url}/requests`, req.body));
}

export default {
  createRequest,
};
