function setToken(token) {
    if (token) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    }
  }

function getToken() {
    let token = localStorage.getItem('token');
    if (token) {
      // remove if expired
      const payload = JSON.parse(atob(token.split('.')[1]));
      // conversion to seconds
      if (payload.exp < Date.now() / 1000) {
        localStorage.removeItem('token');
        token = null;
      }
    }
    return token;
}

function getUserFromToken() {
    const token = getToken();
    return token ? JSON.parse(atob(token.split('.')[1])).user : null;
}

function removeToken() {
    localStorage.removeItem('token');
}
  
export default {
    setToken,
    getToken,
    getUserFromToken,
    removeToken,
};