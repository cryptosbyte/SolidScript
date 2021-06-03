const colors = require("colors")
    , quotes = ["\"", "'"/*, "`"*/]

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

            }

        }

    });
};