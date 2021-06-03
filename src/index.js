const exec_name = "[SolidScript Execution]";
console.time(exec_name);

const fs = require("fs")
    , solidScriptFilePath = process.argv[2]
    , compileFile = require("./lib/readFile")
    , colors = require("colors");

if (fs.existsSync(solidScriptFilePath)) {
    console.log(`${"[SolidScript Execution]".green} Running "${solidScriptFilePath}"`)
    compileFile(solidScriptFilePath, "r", "utf-8");
    console.timeEnd(exec_name);
} else console.log(`${"[SolidScript Execution]".red} Cannot find SolidScript file in directory "${process.cwd()}"`);