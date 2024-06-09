function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).send("User not authenticated");
}

function hasRole(req, res, next) {
  const rolesAllowed = ["frank_admin", "super_admin"];
  if (req.isAuthenticated() && rolesAllowed.includes(req.user.role)) {
    return next();
  }
  res.status(403).send("Access denied");
}

function hasCompanyAdminRole(req, res, next) {
  const rolesAllowed = ["company_admin", "super_admin"];
  if (req.isAuthenticated() && rolesAllowed.includes(req.user.role)) {
    return next();
  }
  res.status(403).send("Access denied");
}

module.exports = {isAuthenticated, hasRole, hasCompanyAdminRole};
