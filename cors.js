const whitelist = ['http://localhost:3000', 'https://shopcart08.netlify.app'];
const corsOptionsDelegate = (req, callback) => {
  let corsOptions;
  if (whitelist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true, credentials: true };
  } else {
    corsOptions = { origin: false };
  }
  callback(null, corsOptions);
};
exports.corsWithOptions = corsOptionsDelegate;
