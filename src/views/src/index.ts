import { Overview } from "./overview";
import $ from "jquery";
require("./resources/styles/index.styl");


$(document).ready(() => {
    const overview = new Overview();
    $("#pagination").click((e) => {
        e.stopPropagation();
        overview.swithPage(e.target.accessKey);
    });
});



