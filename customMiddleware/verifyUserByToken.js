module.exports = async (req, res, next) => {
  if (req.trip.created_by_user_id === req.jwtToken.subject) {
    next();
  } else {
    res.status(400).json({ error: "user must be creator of trip to do that" });
  }
};
