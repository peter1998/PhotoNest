module.exports = {
  ensureAuthenticated: (req, res, next) => {
    if (!req.session || !req.session.user) {
      return res.status(401).json({ message: "Authentication required" });
    }
    next();
  },
  ensureAdmin: (req, res, next) => {
    if (!req.session || !req.session.user || !req.session.user.admin) {
      return res.status(403).json({ message: "Admin access is required" });
    }
    next();
  },
};
