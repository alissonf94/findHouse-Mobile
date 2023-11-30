require("dotenv").config();
const jwt = require("jsonwebtoken");
const AppError = require("../erros/AppError");

function authMiddleware(req, res, next)
{
    const route = req.path
    const nonSegurityRoutes = ['/login', '/register','/house/register']

    if(nonSegurityRoutes.includes(route))
    {
        return next()
    }

    const authHeader = req.headers.authorization;

    if(!authHeader)
    {
        
       throw new AppError("The token was not informed!", 401);
    }

    const parts = authHeader.split(" ")

    if(parts.lenght > 2 || parts.lenght < 2){
        throw new  AppError("Invalid token!", 401);
    }

    const [scheme, token] = parts

    if (!/^Bearer$/i.test(scheme))
        throw new AppError("Malformatted token", 401);

    jwt.verify(token, process.env.SECRET, async (err, decoded) =>
    {
        if(err)
        {
            return res.status(401).send({ message: err.message});
        }

        req.userId = decoded.userLogin.id;
        req.userEmail = decoded.userLogin.email;

        return next();
    })
}

module.exports = authMiddleware