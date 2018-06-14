import {
    Controller,
    Get,
    Render,
} from "@nestjs/common";


@Controller()
export class ApplicationController {
    @Get()
    @Render("index.pug")
    public app() {
        return {
            message: `hello world`
        }
    }
}