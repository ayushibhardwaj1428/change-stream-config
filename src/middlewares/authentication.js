const jwt = require('jsonwebtoken');

exports.verifyToken = async (req, res, next) => {
    let jwtSecretKey = process.env.JWT_SECRET_KEY
   
    try {
      let token = req.header('authorization');
      const split = token.split(' ');
      if(split[0] !== 'Bearer'){
        throw new Error("invalid token");
      } 
      token = split[1];
      const decodedPayload = jwt.verify(token, jwtSecretKey)

    for(const propName of Object.keys(decodedPayload) ){
        req.body[propName] = decodedPayload[propName]
    }
    next();
    } catch (error) {
      res.status(401).json({
        success: true,
        message: 'Access denied',
      })
    }
  }