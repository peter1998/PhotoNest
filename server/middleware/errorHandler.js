module.exports = (err, req, res, next) => {
  console.error(err.stack);

  let response = {
    status: 500,
    message: "Internal Server Error",
  };

  if (process.env.NODE_ENV !== "production") {
    response.error = err.message;
  }

  res.status(response.status).json(response);
};
