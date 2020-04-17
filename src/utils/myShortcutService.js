// import userService from './userService';
import tokenService from './tokenService';

const BASE_URL = '/api/myshortcuts';

// function getAll() {
//   return fetch(BASE_URL, {
//       method: 'GET',
//       headers: {
//         'Authorization': `Bearer ${tokenService.getToken()}`
//       }
//   })
//   .then(res => res.json());
// }

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

export default {
    // getAll,
    create,
    deleteOne,
}
