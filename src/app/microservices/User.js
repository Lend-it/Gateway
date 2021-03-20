class User {
  constructor() {
    this.url = process.env.USER_ROUTE;
  }

  async createUser(req, res) {
    console.log(this.url);
    res.json(true);
  }
}

export default new User();
