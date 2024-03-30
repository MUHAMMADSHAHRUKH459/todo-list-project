#! /usr/bin/env node

import inquirer from "inquirer";

let todoList = [];
let condition = true;

while (condition) {
    const addTask = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "What you want to add in your todo"
        },
        {
            name: "addMore",
            type: "confirm",
            message: "Do you want to add more?",
            default: false
        }
    ]);

    todoList.push(addTask.todo);
    condition = addTask.addMore;
    console.log(todoList);
}