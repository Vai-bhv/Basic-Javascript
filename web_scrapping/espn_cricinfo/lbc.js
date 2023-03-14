const request = require("request")
const cheerio = require("cheerio")
const url = "https://www.espncricinfo.com/series/australia-in-india-2022-23-1348637/india-vs-australia-4th-test-1348655/ball-by-ball-commentary";
request(url, cb)
function cb(err, html) {
    if (err) {
        console.log("error", err);
    } else {
        extractHTML(html)
    }
}

function extractHTML(html) {
    let $ = cheerio.load(html)
}