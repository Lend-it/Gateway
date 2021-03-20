class User {
  constructor() {
    this.url = 'http://localhost:3001';
  }

  async createUser(req, res) {
    res.json(true);
  }
}

export default new User();
