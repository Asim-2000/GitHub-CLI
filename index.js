#!/usr/local/bin/node

//Shebang

const { default: axios } = require('axios');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout
})

rl.question('What is you GitHub Handle? ', async function (answer) {
    
    const porfileInfo = await axios.get(`https://api.github.com/users/${answer}`)
    
    console.log(porfileInfo.data)
    //close the stream so that it doesn't keep executing
    rl.close();
})

// use axios for CRUD opeations and api calls

