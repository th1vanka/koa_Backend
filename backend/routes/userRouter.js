const koaRouter = require('koa-router');

const { register, login,getAllUserDetails} = require('../api/userApi');

const userRouter = new koaRouter(({ prefix: '/user' }));

userRouter.get("/all", getAllUserDetails);
userRouter.post('/register', register);
userRouter.get('/login', login); 



module.exports = userRouter;


