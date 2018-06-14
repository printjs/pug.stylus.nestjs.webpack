import { NestFactory, FastifyAdapter } from "@nestjs/core";
import { ApplicationModule } from "@app/app.module";
import { join } from "path";
import pug from "pug";

async function bootstrap() {
    // , new FastifyAdapter()
    const app = await NestFactory.create(ApplicationModule);

    // app.useStaticAssets(__dirname + "/public");
    app.setBaseViewsDir(__dirname + "/views");
    app.setViewEngine("pug");
    // app.setViewEngine({
    //     engine: {
    //         pug: require("pug"),
    //     },
    //     templates: join(__dirname, "views"),
    // });
    await app.listen(3000);
}
bootstrap();