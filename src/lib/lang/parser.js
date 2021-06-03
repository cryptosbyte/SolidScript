const varManager = require("../variables/varManager");

module.exports = (value) => {

    // STRING
    if (value.replace(/[^\"]/g, "").length == 2) return "string";

    // BOOLEAN
    if (!value.includes("\"") && ["true", "false"].includes(value)) return "boolean";

    // INTEGER
    if (value == "0" || parseInt(value)) return "int";

    // IF VAR = DIF VAR
    /*
    // REMOVED DUE TO UNTRACEABLE ERRORS
        for (const arr of varManager._dev_showStorage()) {
            if (value == arr['varValue']) {
                return "existing var";
            };
        };
    */

    return "unknown";
};