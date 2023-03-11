const request = require("request")
const cheerio = require("cheerio");
const  chalk  = require("chalk");
// feature -> request
console.log("Before");
request('https://www.worldometers.info/coronavirus/', cb);
console.log("After");
function cb (error, response, html) {
    // console.error('error:', error); // Print the error if one occurred
    if(error){
        console.log("error", error); 
    }else{
        handleHtml(html)
    }
}

function handleHtml(html){
    let selectorTool = cheerio.load(html)
    // let h1s = selectorTool("h1")
    // console.log(h1s.length);
    let contentArray = selectorTool("#maincounter-wrap span") 
    // [i] -> wrap selectorTools
    // for(let i = 0; i<contentArray.length;i++){
    //     let data = selectorTool(contentArray[i])
    //     console.log("data" + data);
    // }
    let total = selectorTool(contentArray[0]).text()
    let death = selectorTool(contentArray[1]).text()
    let recover = selectorTool(contentArray[2]).text()

    console.log(chalk.grey("Total Cases" + total));
    console.log(chalk.red("Death" + death));
    console.log(chalk.green("Recovered" + recover));
}