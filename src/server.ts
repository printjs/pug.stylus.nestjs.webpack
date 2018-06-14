import { NestFactory, FastifyAdapter } from "@nestjs/core";
import { ApplicationModule } from "@app/app.module";
import { join } from "path";
import pug from "pug";

async function bootstrap() {
    const app = await NestFactory.create(ApplicationModule, new FastifyAdapter());
    app.setViewEngine({
        engine: {
            pug: require("pug"),
        },
        templates: join(__dirname, "views"),
    });
    await app.listen(3000);
}
bootstrap();