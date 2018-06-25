import Swiper from "swiper";
require("swiper/dist/css/swiper.min.css");
import $ from "jquery";


export class Overview {
    private mySwiper!: any;

    constructor() {
        this.mySwiper = new Swiper(".swiper-container", {
            // Optional parameters
            // direction: "vertical",
            loop: document.location.pathname === "pas" ? false : true,
            spaceBetween: 30,
            centeredSlides: true,
            autoplay: document.location.pathname === "pas" ? {} : {
                delay: 2500,
                disableOnInteraction: false,
            },

            // If we need pagination
            // pagination: {
            //     clickable: true,
            //     el: ".swiper-pagination",
            // },

            // // Navigation arrows
            // navigation: {
            //     nextEl: ".swiper-button-next",
            //     prevEl: ".swiper-button-prev",
            // },

            // // And if we need scrollbar
            // scrollbar: {
            //     el: ".swiper-scrollbar",
            // },
        });

        this.mySwiper.on("slideChange", () => {
            const page = $("#pagination").children(".page");
            for (let i = 0, len = page.length; i < len; i++) {
                if (parseInt(page[i].accessKey, 10) === this.mySwiper.realIndex) {
                    page.eq(i).addClass("page-current");
                } else {
                    page.eq(i).removeClass("page-current");
                }
            }
        });
    }

    public swithPage(page: string) {
        this.mySwiper.slideTo(page, 0);
    }
}

