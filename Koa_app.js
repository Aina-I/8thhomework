const Koa = require('Koa');
const bodyParser = require('koa-bodyparser');
const koaRouter = require('koa-router');
const cors = require('koa-cors');
const app = new Koa;
const router = new koaRouter;
const options = {origin:'*'};

app.use(bodyParser());
app.use(cors(options));

app.use(async (ctx,next) =>
{
    // the parsed body will store in ctx.request.body
    // if nothing was parsed, body will be an empty object {}
    ctx.body = ctx.request.body;
    await next();
    console.log(ctx.body);
});

app	.use(router.routes())
    .use(router.allowedMethods());

app.listen(8080);

router.post('/msg=:message',async function (ctx, next)
{
    ctx.body = `ctx.request.body`;
    await next();
});