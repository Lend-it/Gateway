import endpoint from '../utils/endpoint.js';

const { rating } = endpoint[process.env.NODE_ENV] || endpoint.fallback;

export default {};
