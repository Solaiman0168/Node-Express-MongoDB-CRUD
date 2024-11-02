const authorizeRoles = (...allowedRoles) => {
    return (req, res, next) => {
        console.log("Allowed roles:", allowedRoles);
        console.log("User role:", req.user?.role);
        if (!allowedRoles.includes(req.user?.role)) { //req.user.role
            return res.status(403).json({
                status: "fail",
                message: "Access denied"
            })
        }
        next();
    }
}


module.exports = authorizeRoles;