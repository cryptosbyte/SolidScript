const fs = require("fs")
    , rmWhiteSpaces = require("./strings/removeWhiteSpaces")
    , tokeniser = require("./lang/tokeniser")
    , colors = require("colors");

module.exports = (fileToRead, flag, encoding) => {
    fs.readFile(fileToRead, { encoding, flag }, (err, data) => {
        let arrayOfCode = [];
        if (err) return console.log(`${"[SolidScript Execution]".red} Error when reading file! ${err}`)
        else {
            // SHORT LEXER
            perLineArray = rmWhiteSpaces(data).split("\n")
            perLineArray.forEach(line => {
                if (line.startsWith(";") || line == "") return;
                if (line.includes(";")) {
                    line = line.substring(0, line.indexOf(";"))
                    let rmLastChar = rmWhiteSpaces(line).slice(0, -1)
                    if (rmLastChar == "" || rmLastChar == " ") return;
                    arrayOfCode.push(rmLastChar);
                } else arrayOfCode.push(line)
            });
        };
        console.log(arrayOfCode);
        tokeniser(arrayOfCode);
    });
};