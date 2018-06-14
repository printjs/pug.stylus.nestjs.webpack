import { Module } from "@nestjs/common";
import { ApplicationController } from "@app/app.controller";
import { AppModelModule } from "@model/model.module";
import { TypeOrmModule } from "@nestjs/typeorm";


@Module({
    controllers: [ApplicationController],
    imports: [
        // AppModelModule,
        TypeOrmModule.forRoot(),
    ]
})
export class ApplicationModule {

}