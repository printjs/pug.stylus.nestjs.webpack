import Swiper from "swiper";
require("swiper/dist/css/swiper.min.css");
import $ from "jquery";


export class Overview {
    private mySwiper!: any;

    constructor() {
        this.mySwiper = new Swiper(".swiper-container", {
            // Optional parameters
            // direction: "vertical",
            loop: true,
            spaceBetween: 30,
            centeredSlides: true,
            autoplay: {
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
    }

    public swithPage(page: string) {
        this.mySwiper.slideTo(page, 0);
    }
}

$(document).ready(() => {
    const overview = new Overview();
    $("#pagination").click((e)=>{
        e.stopPropagation();
        overview.swithPage(e.target.accessKey);
    })
});
