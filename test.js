
const { LINK } = require("./dist");


console.log(LINK("https://morioh.com?abc=1", { utm_source: "morioh.com" }).toString())