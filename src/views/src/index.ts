import { Overview } from "./overview";
import $ from "jquery";
require("./resources/styles/index.styl");


$(document).ready(() => {
    const overview = new Overview();
    $("#pagination").click((e)=>{
        e.stopPropagation();
        overview.swithPage(e.target.accessKey);
    })
});

// export class A {
//     private a: string = "";
//     set aval(val: string) {
//         this.a = val;
//     }
//     get aval() {
//         return this.a;
//     }
// }

// const a = new A();

// a.aval = "23"
// console.log(a.aval);



