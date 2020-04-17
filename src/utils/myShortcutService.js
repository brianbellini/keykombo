import tokenService from './tokenService';

const BASE_URL = '/api/myshortcuts';

function create(shortcut) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${tokenService.getToken()}`
        },
        body: JSON.stringify(shortcut)
    }).then(res => res.json()).then(({token}) => {
      tokenService.setToken(token);
    });
}

function deleteOne(id) {
  console.log("THIS IS ID", id)
  return fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE',
      headers: {
          'Authorization': `Bearer ${tokenService.getToken()}`
      }
  }).then(res => res.json()).then(({token}) => {
    tokenService.setToken(token);
  });

}

export function update(shortcut) {  //------------------------------
  return fetch(`${BASE_URL}/${shortcut._id}`, {
      method: 'PUT',
      headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: JSON.stringify(shortcut)
  }).then(res => res.json()).then(({token}) => {
    tokenService.setToken(token);
  });
}

export default {
    create,
    deleteOne,
    update,
}
