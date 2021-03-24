import { basePost } from '../utils/baseRequest.js';

const url = 'https://lendit-user-hom.herokuapp.com';

async function createUser(req, res) {
  res.json(await basePost(`${url}/users`, req.body));
}

export default {
  createUser,
};
