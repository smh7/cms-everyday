const UtilService = require('../services/util.service');
const JwtService = require('../services/jwt.service');


module.exports = {
/**
 *@api {post} /signup-everyday
 *@apiGroup Author 
 * @apiName AuthorCard
 * @apiSuccess {Object} Author A newly signed up cms Author
 * @apiExample {curl} Example usage:
 * curl -i http://localhost:8080/signup
 * @apiDescription A Author can signup to become a cms Author
 * @apiParam {String} [username]
 * @apiParam {String} [firstname]
 * @apiParam {String} [lastname]
 * @apiParam {String} [email]
 * @apiParam {String} [password]
 */

  async create(ctx){
    let {username, firstname, lastname, email, password} = ctx.request.body;

    if (!username) {
      ctx.throw(400, 'please provide the username')
  }
  if (!password) {
      ctx.throw(400, 'please provide the password')
  }

  const encryptedPassword = await UtilService.hashPassword(password);
    
    try {
      ctx.body = await ctx.db.Author.create({
        username,
        firstname,
        lastname,
        email,
        password: encryptedPassword
      })
      ctx.body = 'Signup successful';
    } catch (error) {
        ctx.throw(500, err);
    }
  },
    /**
     *@api {post} /login-everyday
     *@apiGroup Author
     * @apiName loginUser
     * @apiParam {String} [username] user must need to provide username
     * @apiParam {String} [password] user must need to provide password
     * @apiParamExample {String} Request Params :
     * {
     *  "username"  : "testuser",
     *  "password" : "password12"
     * }
     * @apiSuccess {Object} Token - JSON Web Token (JWT) to acces proceted routes
     * @apiSuccessExample {json} Login Response:
     * {
     *  "token" : "XZADJHASGDJHASGDJHAGSDJAGSJDH"
     * }
     * @apiExample {curl} Example usage:
     * curl -i http://localhost:8080/login
     * @apiDescription User can login to the system
     */
  async login(ctx){
    try {
      let {username, password} = ctx.request.body;

      if(!username) {
        ctx.throw(400, 'please provide username')
      }
      if(!password) {
        ctx.throw(400, 'please provide password')
      }

      const author = await ctx.db.Author.findOne({
        where: {
          username
        }
      })

      if(!author) {
        ctx.throw(500, 'unable to proces request');
      }
      const matched = UtilService.comparedPassword(password, author.password);
      if (matched) {

          //create a json webtoken for the user
          const token = JwtService.issue({
              payload:{
                  author: author.id
              }
          },'1 day');

          ctx.body = {token};
      

      } else {
          ctx.throw(500, 'invalid password');
      }


  }
  catch (err) {
      ctx.throw(500, err);
  }
}
};