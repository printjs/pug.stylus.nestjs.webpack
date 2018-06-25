import {
    Controller,
    Get,
    Render,
} from "@nestjs/common";


@Controller()
export class ApplicationController {
    @Get()
    @Render("index")
    public app() {
        return {
            message: `hello world`,
        };
    }

    /**
     * 首页路由
     */
    @Get("/home")
    @Render("home")
    public home() {
        return {
            page: "home",
            pages: [{
                h1: "用心服务 关注孩子",
                h2: "打造一流教育平台是我们的愿景目标",
                url: "src/resources/images/home-img-page1.png",
            }, {
                h1: "服务至上 打造品牌",
                h2: "不断倾听和满足用户需求，引导并超越用户需求",
                url: "src/resources/images/home-img-page2.png",
            },
            {
                h1: "享受卓越 享受责任",
                h2: "努力通过优质服务提升K12教育品质",
                url: "src/resources/images/home-img-page3.png",
            },
            {
                h1: "教育至上 链接未来",
                h2: "为家长和孩子营造健康的生活环境",
                url: "src/resources/images/home-img-page4.png",
            }],
        };
    }

    /**
     * 产品与服务路由
     */
    @Get("/pas")
    @Render("pas")
    public pas() {
        return {
            page: "pas",
            pages: [
                "src/resources/images/home-img-page2.png",
            ],
        };
    }


    /**
     * 关于我们
     */
    @Get("/about")
    @Render("about")
    public about() {
        return {
            page: "about",
            pages: [
                "src/resources/images/home-img-page4.png",
            ],
        };
    }
}
