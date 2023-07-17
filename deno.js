import { proxy } from "https://deno.land/x/oak_http_proxy@2.1.0/mod.ts";
import { Application, Router } from "https://deno.land/x/oak@v10.1.0/mod.ts";


const app = new Application();
const router = new Router();
// app.use(proxy((ctx) => {
//     console.log(ctx);
//     return new URL("https://cdn.discordapp.com"+ctx.router.params.url)
// }));

router.get("/", async (ctx) => {
    // console.log(ctx);
    let req = ctx.request
    let fetchUrl =  ctx.request.url.searchParams.get("url")
    console.log(fetchUrl)

    let res =  await fetch(fetchUrl);
    console.log(res)
    ctx.response.headers = res.headers
    ctx.response.body = res.body
    
    
});

/* router.get("/", async (ctx)=> {
    console.log(ctx.request.url.searchParams.get("url"));
    return fetch(`https://example.com`);
  }); */

app.use(router.routes());
app.use(router.allowedMethods());
await app.listen({ port: 8080 });

