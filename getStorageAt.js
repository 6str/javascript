// Ethernauts Vault level
// get private variable data - var 2
// 1st var is bool
// 2nd var is bytes32 password

require("dotenv").config();
const NODE_URL = process.env.NODE_URL
var ethers = require('ethers');
var url = NODE_URL;
var provider = new ethers.providers.JsonRpcProvider(url)

//const TARGET_ADDRESS = "0xB9f4b815c534CC6822C61C2eCC782dB5DDC1f47e"
const TARGET_ADDRESS = "0xD5935e39720113Ed860dc0a10c57c28002c6B802"
async function doThing(address) {
    for(i = 3; i <= 5; ++i){
        const data =  await provider.getStorageAt(TARGET_ADDRESS, i)

        console.log(data)
    }
}

doThing()

