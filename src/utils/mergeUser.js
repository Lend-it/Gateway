import { queryGet } from './baseRequest.js';
import endpoint from './endpoint.js';

const { user } = endpoint[process.env.NODE_ENV] || endpoint.fallback;

export async function mergeUserDataFromRequest(requests) {
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
      requester,
      lender: lender || null,
    };
  });

  return mergedRequest;
}
