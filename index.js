#!/usr/local/bin/node

//Shebang

//using cli-table for table format

const { default: axios } = require('axios');
const readline = require('readline');
const table = require('cli-table');
const { profile } = require('console');

const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout
})

rl.question('What is you GitHub Handle? ', async function (answer) {

    try {
        var porfileInfo = await axios.get(`https://api.github.com/users/${answer}`)
    } catch (error) {
        console.log('Something went wrong')

        
    }
    
    

   //destructuring
    const { name, company, location, followers, following } = porfileInfo.data;
    
    // console.log(name,company,location,followers,following )


    const porfileTable = new table();
    
    
    porfileTable.push(
        { Name: name || "" },
        { Company: company ||"" },
        { Location: location || "" },
        { Followers: followers || "" },
        {Following:following || ""}
    )


    console.log(porfileTable.toString())
    //close the stream so that it doesn't keep executing


    rl.close();
})

// use axios for CRUD opeations and api calls



