import { NestFactory, FastifyAdapter } from "@nestjs/core";
import { ApplicationModule } from "@app/app.module";
import { join } from "path";





async function bootstrap() {
    const app = await NestFactory.create(ApplicationModule);
    app.useStaticAssets(join(__dirname + "/views"), {
        extensions: ["js", "css"],
    });
    app.setBaseViewsDir(join(__dirname + "/views"));
    app.setViewEngine("pug");
    await app.listen(3000);
}
bootstrap();
