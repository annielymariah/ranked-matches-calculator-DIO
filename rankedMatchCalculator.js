const prompt = require('prompt-sync')();

function insertVictoriesOrDefeats(type) {
    let value = prompt("How much " + type + " do you have? ")
    if (isNaN(value) || value.trim() === '' || Number(value) <= 0) {
        console.log("Invalid input. Please enter a valid number.");
        return insertVictoriesOrDefeats(value, type);
    }
    else {
        return Number(value);
    }
}

function rankedMatchCalculator(victories, defeats) {
    let balance = victories - defeats;
    return balance;
}

function rankSearch(balance) {
    let playerRank;

    if (balance <= 10) {
        playerRank = 'Silver';
    }
    else if (balance > 10 && balance <= 20) {
        playerRank = 'Bronze';
    }
    else if (balance > 20 && balance <= 50) {
        playerRank = 'Silver';
    }
    else if (balance > 50 && balance <= 80) {
        playerRank = 'Gold';
    }
    else if (balance > 80 && balance <= 90) {
        playerRank = 'Diamond';
    }
    else if (balance > 90 && balance <= 100) {
        playerRank = 'Legendary';
    }
    else {
        playerRank = 'Imortal';
    }
    return playerRank;
}

let playerName = 'Akarui, the cat';
let victories = insertVictoriesOrDefeats('victories');
let defeats = insertVictoriesOrDefeats('defeats');
let balance = rankedMatchCalculator(victories, defeats);
let playerRank = rankSearch(balance);

if (balance > 0) {
    console.log("The player named " + playerName + " has " + balance + " PDL, and her/his rank is " + playerRank)
}
else {
    console.log("The player named " + playerName + " don't have any PDL, and her/his rank is " + playerRank)
}