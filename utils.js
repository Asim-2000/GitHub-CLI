const axios = require ('axios')

async function APICall(url) {
     try {
        return await axios.get(url)
    } catch (error) {
         console.log('Something went wrong')
         process.exit(0)
    }
}

module.exports = {
    APICall,
}