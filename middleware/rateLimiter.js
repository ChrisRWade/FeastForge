const rateLimit = require("express-rate-limit");

const loginRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // limit each IP to 10 requests per windowMs
  handler: (req, res) => {
    res.status(429).json({
      message:
        "Too many login attempts from this IP, please try again after 15 minutes",
    });
  },
});

module.exports = loginRateLimiter;
