const colors = require("colors")
    , quotes = ["\"", "'"/*, "`"*/]
    , prohibitedChars = ["!","\"","£","$","%","^","&","*","(",")","-","+","=","¹","³","€","½","{","}","[","]","'","~","@","<",">",",",".","/","?","\\","|","¬","`","¦"]
    , parser = require("./parser")
    , varManager = require("../variables/varManager");

module.exports = (arrayOfCode) => {
    arrayOfCode.forEach(tokenizedLine => {
        // PRINTLN | PRINT FUNC.
        let [first] = tokenizedLine.split(" ")
        if (first.startsWith("print")) {
            let [_, ...second] = tokenizedLine.split(" ");

            if (!second) {
                if (first == "print") process.stdout.write(" ");
                if (first == "println") process.stdout.write(" ");
            } else {
                second = second.join(" ");

                if (
                    (quotes.includes(second[0]) &&
                        quotes.includes(second[second.length - 1]))
                ) {
                    if ((second[0] == second[second.length - 1])) {
                        // PRINT
                        if (first == "print") process.stdout.write(second.substring(1).slice(0, -1));
                        // PRINTLN
                        if (first == "println") process.stdout.write(second.substring(1).slice(0, -1) + "\n");
                    } else return console.log(`${"[SolidScript Tokeniser]".red} Unequal Quotation`);
                    //     Fix when stupid quotation is used
                    //     Make Tokeniser show what line error is
                } else return console.log(`${"[SolidScript Tokeniser]".red} Unequal Quotation`);
            }

        }

        // EXIT ON CODE FUNC.
        if (first == "exit") {
            let [_, ...second] = tokenizedLine.split(" ")

            if (second.length != 1) return console.log(`${"[SolidScript Tokeniser]".red} Unnecessary arguments given`);
            if (!second[0]) return console.log(`${"[SolidScript Tokeniser]".red} Ungiven Integer in exit function`);

            if (second[0]) {

                if (["0", "1"].includes(second[0])) process.exit(second[0]);
                // 0 = Success
                // 1 = Failure
                if (parseInt(second[0])) return console.log(`${"[SolidScript Tokeniser]".red} Exit Codes 0 & 1 are available`);

            };

        };

        // VARIABLES
        if (first == "var") {

            // ATTEMPT 1
            let splitted = tokenizedLine.split(" ", 2)
            // splitted[0] = "var"

            if (splitted[1]) {

                if (!tokenizedLine.includes("=")) return console.log(`${"[SolidScript Tokeniser]".red} Variable value not given`);

                let varName = splitted[1].includes("=") ? splitted[1].split("=")[0] : splitted[1];

                for (const prohibited of prohibitedChars) {
                    if (varName.includes(prohibited)) return console.log(`${"[SolidScript Tokeniser]".red} ${prohibited} cannot be part of a variable name`);
                };

                let varValue = tokenizedLine.split("=")[1];
                varValue = varValue.startsWith(" ") ? varValue.replace(" ", "") : varValue;
                let varType = parser(varValue);

                for (const arr of varManager._dev_showStorage())
                    if (varName == arr['varName'])
                        return console.log(`${"[SolidScript Tokeniser]".red} Variable ${varName} already exists`);

                if (varType == "unknown") return console.log(`${"[SolidScript Tokeniser]".red} Unknown variable value given`);

                varManager.storeVar(varName, varType == "string" ? varValue.substring(1).slice(0, -1) : varValue, varType);

            } else return console.log(`${"[SolidScript Tokeniser]".red} Variable name not given`);

        };

    });

    // console.log(varManager._dev_showStorage());

};