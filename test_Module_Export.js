const NETWORKS_LOOKUP = new Map([
    ["1", "Ethereum"],
    ["3", "Ropsten"],
    ["4", "Tinkeyby"],    
    ["5", "Goerli"],
    ["2a", "Kovan"],
    ["42", "Kovan"],
    ["137", "Polygon"],
    ["31337", "Hardhat"],
    ["80001", "Mumbai"]
]);

const NETWORKS_LOOKUP_too = new Map([
    ["1", "Ethereum"],
    ["3", "Ropsten"],
    ["4", "Tinkeyby"],    
    ["5", "Goerli"],
    ["2a", "Kovan"],
    ["42", "Kovan"],
    ["137", "Polygon"],
    ["31337", "Hardhat"],
    ["80001", "Mumbai"]
]);

// two exports to demonstrate that it's module.export object that is exported and why 
//destructuring is used/necessary with require, even if only exporting/requiring one object/var

module.exports = {
    NETWORKS_LOOKUP,
    NETWORKS_LOOKUP_too
}
