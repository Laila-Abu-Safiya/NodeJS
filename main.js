const csvtojson = require('csvtojson')
const fs = require('fs')
const csvfilepath = "MOCK_DATA.csv"

function json() {

}

csvtojson()
.fromFile(csvfilepath)
.then((json) => {
    console.log(json) //write json file in console
    fs.writeFileSync("output.json", JSON.stringify(json), "utf-8", (err) => {
        if (err) console.log(err)
    })
})

//read text file
/*
fs.readFile('Input.txt', (err, data) => {
    if (err) throw err;

    console.log(data.toString());
})*/
function readPlain(){
    selectedfile.value= document.getElementById("inputfile").value;
}
//write data from json to text
fs.readFile('output.json', 'utf-8', (err, data) => {
    if (err) {
        throw err;
    }

    // parse JSON object
    //write in text file
    fs.writeFile("users.txt", data.toString(), function(err) {
        if (err) {
            console.log(err);
        }
    });
});
