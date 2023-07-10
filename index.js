const jwt=require("jsonwebtoken")
const path = require('path')
require("dotenv").config({ path: path.resolve(__dirname, '.env') })



const createJsonWebToken=(values)=>{
    try {
        return jwt.sign(values,process.env.JSONWEB_TOKEN_SECRETKEY)      
    } catch (error) {
        return "please enter valid values"
    }
}

const verifyUsers=(role)=>{
  return  (req,res,next)=>{
        try {            
            if(req.headers.authorization){            
                    const decoded=jwt.verify(req.headers.authorization.substring(7),process.env.JSONWEB_TOKEN_SECRETKEY)
                    if(decoded){
                        req.userDetails=decoded
                        if(role){
                            if(role.includes(decoded.role)){
                                next()
                            }else{
                                return res.status(401).send({
                                    status:false,
                                    message:"permission denied"
                                })
                            }
                        }else{
                            next()
                        }
                    }else{
                        return res.redirect("/login")
                    }
            }else{
                return res.redirect("/login")
            }
        } catch (error) {
            return res.redirect("/login")
        }
    }
}


module.exports={
    createJsonWebToken,
    verifyUsers
}