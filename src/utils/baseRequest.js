import axios from 'axios';

export async function baseGet(route) {
  const response = await axios.get(route);
  return response.data;
}

export async function queryGet(route, content) {
  const response = await axios.get(route, {
    params: content,
  });
  return response.data;
}

export async function basePost(route, content) {
  const response = await axios.post(route, content);
  return response.data;
}

export async function basePostRating(route, body, headers) {
  const response = await axios.post(route, body, {
    headers,
  });
  return response.data;
}

export async function basePatch(route, content) {
  const response = await axios.patch(route, content);
  return response.data;
}

export async function baseMultiFormPatch(route, content) {
  const response = await axios.patch(route, content, {
    headers: content.getHeaders(),
  });
  return response.data;
}

export async function basePut(route, content) {
  const response = await axios.put(route, content);
  return response.data;
}

export async function baseDelete(route) {
  const response = await axios.delete(route);
  return response.data;
}
