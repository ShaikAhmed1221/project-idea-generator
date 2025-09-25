const app = require("../server"); // points to your Express app
const serverless = require("serverless-http"); // Vercel uses serverless functions

module.exports = serverless(app);
