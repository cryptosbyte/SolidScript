# SolidScript Programming Language

SolidScript is a simplistic programming language, based on Python2 syntax. This is repository contains the source code of the **tokeniser**, **executor**, **interpreter** and the **file reader**.

## Executor
The executor calls in all of the files/functions to run the parts of code that interprets the code and runs it, tokenises the lines, etc.

## Tokeniser/Tokenizer
The tokeniser converts each line of the `.solid` file into arrays and then calls the interpreter to split each of the lines into arrays; similar to splitting paragraphs to sentences to words and then characters.  
Once one line is split, the interpreter is then called.

## Interpreter
The interpreter is essentially the core part of SolidScript. Once the tokeniser does it's thing, the interpreter requires all of those "words" into arguments as an array and is then read.  

For example, this could be one line:
```s
println "SolidScript Is Awesome!"
```
..and then it's split by spaces.
```json
[ "println", "\"SolidScript Is Awesome!\"" ]
```
Once it's split, the interpreter checks the first index of the array (0), which is "println". The code checks if that is part of the language, if so then execute what it's supposed to do.  
However the interpreter has a problem, it has a second index of the array (`\"SolidScript Is Awesome!\"`) so what should it do with it? It removes the first and last quotes (by confirming if the first and last char are equal quotes) and is then written to the output, which the console/terminal.

### INSTALLATION GUIDE IS COMING SOON!
### SOLIDSCRIPT IS WORK IN PROGRESS!
### NEXT UPDATE WILL BE COOL AS HECK!