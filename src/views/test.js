const pug = require("pug");
const {
    join
} = require("path");

console.log(pug.renderFile(join(__dirname,"index.pug")));