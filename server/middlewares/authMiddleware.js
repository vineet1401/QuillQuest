const jwt = require("jsonwebtoken");


exports.generateToken = (data) => {
  const token = jwt.sign({data}, `${process.env.JWT_SECRET}`);
  return token;
}


exports.isAuthenticated = async(req, res, next) => {
  const token = req.header("Authorization").replace("Bearer ", "");
  if(!token){
    return  res.status(401).send({success:false, message:"Unauthorized user"});
  }
  try {
    const decode = jwt.verify(token, `${process.env.JWT_SECRET}`)
    if(decode){
      req.user = decode.data;
      next();
    }
  } catch (error) {
    return  res.status(401).send({success:false, message:"Unauthorized user"});
  }
}