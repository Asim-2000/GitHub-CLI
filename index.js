#!/usr/bin/env node

//Shebang

//using cli-table for table format

const readline = require('readline');
const table = require('cli-table');
const {APICall} = require('./utils.js')

const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout
})

rl.question('What is you GitHub Handle? ', async function (answer) {

    // try {
    //     var porfileInfo = await axios.get(`https://api.github.com/users/${answer}`)
    // } catch (error) {
    //     console.log('Something went wrong')
    // }
  
    var porfileInfo = await APICall(`https://api.github.com/users/${answer}`)
    
   //destructuring
    const { name, company, location, followers, following } = porfileInfo.data;
    
    // console.log(name,company,location,followers,following )


    const porfileTable = new table();
    const orgTable = new table({
        head: ['Organization', 'Description']
    })
    
    
    porfileTable.push(
        { Name: name || "" },
        { Company: company ||"" },
        { Location: location || "" },
        { Followers: followers || "" },
        {Following:following || ""}
    )


      //for organizations
    //  try {
    //     var orgInfo = await axios.get(`https://api.github.com/users/${answer}/orgs`)
    // } catch (error) {
    //     console.log('Something went wrong')      
    //  }
    
    var orgInfo = await APICall(`https://api.github.com/users/${answer}/orgs`)

    orgInfo.data.forEach(org => {

        // console.log(org.login)
        orgTable.push([org.login,org.description.slice(0,50)+"..."])
        
    });

    console.log(porfileTable.toString());
    //close the stream so that it doesn't keep executing
    console.log(orgTable.toString());


    rl.close();
})

// use axios for CRUD opeations and api calls



