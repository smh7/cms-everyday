const JwtService = require('../services/jwt.service');
module.exports = async (ctx, next) => {

    let token = '';
    if (ctx.req.headers && ctx.req.headers.authorization) {
        token = ctx.req.headers.authorization;
    }
    else {
        ctx.throw(401, 'Authorization header is missing');
    }

    const decodedToken = JwtService.verify(token);

    const  author = await ctx.db.Author.findOne({
        where: {
            id : decodedToken.payload.author
        }
    });
    if(author){
        ctx.state.author = author.id;
        await next();
    }
    else{
        ctx.throw(401, 'Unauthorized');
    }
};