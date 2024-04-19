#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let wordstore = [];
let answer = async () => {
    let words = await inquirer.prompt([
        {
            name: "wordcount",
            type: "input",
            message: "TYPE ENTER YOUR SCRIPT SENTNCE"
        }
    ]);
    let fullwords = await inquirer.prompt([
        {
            name: "fullcount",
            type: "list",
            message: "Choice which type of count",
            choices: ["sentence", "words"]
        }
    ]);
    if (fullwords.fullcount === "sentence") {
        wordstore = words.wordcount.trim().split(" ");
        console.log(chalk.yellow(wordstore));
        console.log(`you sentnce words count is = ${chalk.yellow(wordstore.length)}`);
    }
    else if (fullwords.fullcount === "words") {
        wordstore = words.wordcount.trim();
        console.log(chalk.yellow(wordstore));
        console.log(`you words count is = ${chalk.yellow(wordstore.length)}`);
    }
    else {
        if (wordstore < [1]) {
            console.log(chalk.bgGreenBright(`you todo list is empty`));
        }
        console.log(chalk.yellow(`your words is empty plz enter something`));
    }
};
answer();
