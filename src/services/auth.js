
class Auth {
  async login(username, password) {
    const data = await fetch('http://localhost:3000/users');
    const users = await data.json();
    const user = users.find(user => user.name === username && user.password === password);
    if (user) {
      localStorage.setItem('username', username);
      return true;
    } else {
      return false;
    }
  }

  async register(username, password) {
    await fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        name: username,
        password
      })
    });
    localStorage.setItem('username', username);
    return true;
  }

  isLogin() {
    return localStorage.getItem('username') !== undefined
  }

  getUserName() {
    return localStorage.getItem('username');
  }

  logon() {
    localStorage.removeItem('username');
  }
}

export default new Auth();