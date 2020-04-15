// import userService from './userService';
import tokenService from './tokenService';

const BASE_URL = '/api/shortcuts';

function getAll() {
  return fetch(BASE_URL, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      }
  })
  .then(res => res.json());
}

export function create(shortcut) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${tokenService.getToken()}`
        },
        body: JSON.stringify(shortcut)
    }).then(res => res.json());
}

export default {
    getAll,
    create,
}
