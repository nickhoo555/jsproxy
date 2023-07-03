import { proxy } from "https://deno.land/x/oak_http_proxy@2.1.0/mod.ts";
import { Application } from "https://deno.land/x/oak@v10.1.0/mod.ts";

const app = new Application();

app.use(proxy((ctx) => new URL("https://cdn.discordapp.com"+ctx.?router.params.url)));
//router.get("/", proxy((ctx) => new URL("https://cdn.discordapp.com"+ctx.?router.params.url)));

await app.listen({ port: 80 });
