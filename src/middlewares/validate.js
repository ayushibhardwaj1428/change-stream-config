exports.validate = (schema) => {
  return async (req, res, next) => {
    try {
      const validatedPayload = await schema.validateAsync(req.body)
      req.body = validatedPayload
                                 
      next()
    } catch (error) {
      res.status(400).json({
        success: false,
        errors: error.details,
      })
    }
  }
}
