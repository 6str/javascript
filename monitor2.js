// this was written as a stack answer about monitoring addresses for non-zero balances/ funds being sent to an address

require("dotenv").config();
const NODE_URL = process.env.NODE_URL
var ethers = require('ethers');
var url = NODE_URL;
var provider = new ethers.providers.JsonRpcProvider(url);

const TARGET_ADDRESS1 = "0x3C283D39436c8F5B48E84740e938C745a45c2Ab1";
const TARGET_ADDRESS2 = "0x0eE4A43F8E4eaf59886E1118f61c919F9815f59B";
const TARGET_ADDRESS3 = "0x97ed92E744C10FdD5D403A756239C4069e415e79";
const addresses = [TARGET_ADDRESS1, TARGET_ADDRESS2, TARGET_ADDRESS3];

for(let address of addresses) getBalance(address);

async function getBalance(address) {
    const balance = await provider.getBalance(address);
    console.log(`balance at ${address}: ${balance}`);

    if(balance > 0) {
        console.log(`deploying contract to : ${address}`)
        // pseudo code
        // run deploy script passing address
    }
}
