#! /usr/bin/env node
import inquirer from "inquirer";
// first step: making the account balance.
let myBalance = Math.floor(Math.random() * 10000 + 1);
console.log("WELCOME ! To The Cli Based ATM.");
// second step: making the account PIN.
const myPin = 1234;
const pinAns = await inquirer.prompt([
    {
        name: "PIN",
        type: "number",
        message: "Enter Your PIN CODE!:",
    },
]);
if (pinAns.PIN === myPin) {
    console.log("Correct PIN CODE!.");
    //third step: Asking the First Question.
    let accountType = await inquirer.prompt([
        {
            name: "transaction",
            type: "list",
            message: "Cnoose The Option Which You Want.",
            choices: ["Withdrawl", "Check Balance", "FastCash"],
        },
    ]);
    // If User Selected Withdrawl.
    if (accountType.transaction === "Withdrawl") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter Your Amount.",
            },
        ]);
        myBalance -= amountAns.amount;
        if (myBalance < amountAns.amount) {
            console.log("Unsufficient Number!.");
        }
        else if (accountType.transaction === "Withdrawl") {
            console.log(`Your Remainning Balance Is = ${myBalance}.$`);
        }
    }
    //If User Selected Check Balance.
    if (accountType.transaction === "Check Balance") {
        console.log(`Your Current Balance Is = ${myBalance}.$`);
    }
    // If User Selected FastCash.
    if (accountType.transaction === "FastCash") {
        let operationAns = await inquirer.prompt([
            {
                name: "operation",
                type: "list",
                message: "Select The Amount Package!.",
                choices: [1500, 2500, 3500, 4500],
            },
        ]);
        myBalance -= operationAns.operation;
        if (myBalance < operationAns.operation) {
            console.log("You Dont Have Enough Balance In Your Account!.");
        }
        else if (operationAns.operation === 1500 || 2500 || 3500 || 4500) {
            console.log(`Your Remainning Balnce Is = ${myBalance}.$`);
        }
    }
}
// If PIN CODE Is Incorrect.
else {
    console.log("Incorrect PIN CODE!.");
}
