const endpoint = {
  homolog: {
    user: 'https://lendit-user-hom.herokuapp.com',
    request: 'https://lendit-request-homolog.herokuapp.com',
    rating: 'https://lendit-rating-homolog.herokuapp.com',
  },
  prod: {
    user: 'https://lendit-user-prod.herokuapp.com',
    request: 'https://lendit-request-prod.herokuapp.com',
    rating: 'https://lendit-rating-prod.herokuapp.com',
  },
  fallback: {
    user: 'http://user:3002',
    request: 'http://request:5000',
    rating: 'http://rating:5001',
  },
};

export default endpoint;
