const errorHandler = (err, req, res, next) => {
  console.error(err.stack); // Log the error stack for debugging
  res.status(err.status || 500).json({
    message: err.message || "Internal Server Error",
  });
};

// Async error handler wrapper
const asyncHandler = (fn) => {
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};

module.exports = {
  errorHandler,
  asyncHandler,
};
