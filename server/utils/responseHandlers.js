module.exports = {
  /**
   * Handle successful responses
   * @param {Object} res - Response object
   * @param {Object} data - Response data
   * @param {string} [message] - Optional success message
   * @param {number} [statusCode=200] - HTTP status code (default: 200)
   */
  sendSuccess: (
    res,
    data,
    message = "Operation successful!",
    statusCode = 200
  ) => {
    res.status(statusCode).send({
      status: "success",
      message: message,
      data: data,
    });
  },

  /**
   * Handle error responses
   * @param {Object} res - Response object
   * @param {string} errorMessage - Error message
   * @param {number} [statusCode=500] - HTTP status code (default: 500)
   */
  sendError: (res, errorMessage, statusCode = 500) => {
    res.status(statusCode).send({
      status: "error",
      message: errorMessage,
    });
  },

  /**
   * Handle not found (404) responses
   * @param {Object} res - Response object
   */
  sendNotFound: (res, message = "Resource not found!") => {
    res.status(404).send({
      status: "error",
      message: message,
    });
  },

  /**
   * Handle unauthorized (401) responses
   * @param {Object} res - Response object
   * @param {string} [message="Unauthorized"] - Error message
   */
  sendUnauthorized: (res, message = "Unauthorized") => {
    res.status(401).send({
      status: "error",
      message: message,
    });
  },

  /**
   * Handle forbidden (403) responses
   * @param {Object} res - Response object
   * @param {string} [message="Forbidden"] - Error message
   */
  sendForbidden: (res, message = "Forbidden") => {
    res.status(403).send({
      status: "error",
      message: message,
    });
  },

  /**
   * Handle bad request (400) responses
   * @param {Object} res - Response object
   * @param {string} [message="Bad request"] - Error message
   */
  sendBadRequest: (res, message = "Bad request") => {
    res.status(400).send({
      status: "error",
      message: message,
    });
  },
};
