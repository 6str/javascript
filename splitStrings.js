let message = `cannot estimate gas; transaction may fail or may require manual gas limit (error={"code":-32603,"message":"execution reverted: Wait 15m","data":{"originalError":{"code":3,"data":"0x08c379a000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000008576169742031356d000000000000000000000000000000000000000000000000","message":"execution reverted: Wait 15m"}}}, method="estimateGas", transaction={"from":"0x4686F132f1E6B1547bcE8516D1931C595ed30E45","to":"0xBbE43AeeF858C7b7DB6351bc719B9429BB9D72B1","data":"0x449d46c000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000000","accessList":null}, code=UNPREDICTABLE_GAS_LIMIT, version=providers/5.5.0)`;
let message2 =`transaction failed (transactionHash="0x46e4d74c6c60dabd8dfebcdeb69712e633f67d3683da41d201e00217c2ad0d0e", transaction={"hash":"0x46e4d74c6c60dabd8dfebcdeb69712e633f67d3683da41d201e00217c2ad0d0e","type":2,"accessList":null,"blockHash":null,"blockNumber":null,"transactionIndex":null,"confirmations":0,"from":"0x4686F132f1E6B1547bcE8516D1931C595ed30E45","gasPrice":{"type":"BigNumber","hex":"0x59682f25"},"maxPriorityFeePerGas":{"type":"BigNumber","hex":"0x59682f00"},"maxFeePerGas":{"type":"BigNumber","hex":"0x59682f25"},"gasLimit":{"type":"BigNumber","hex":"0x0493e0"},"to":"0xDec9d98C00ed54dB6DB3C9775Be52b62b6e80fA6","value":{"type":"BigNumber","hex":"0x00"},"nonce":78,"data":"0x449d46c00000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000001b746573743a2073696e676c65206576656e74206c697374656e65720000000000","r":"0x82a398279f895a7df4f6d30faf3411eda7e89c728a3d066efbecf18ae43aa849","s":"0x52322e092a878194146166c40da3093cfb5e04c2bcc44587243c1db2c50e6a75","v":1,"creates":null,"chainId":0}, receipt={"to":"0xDec9d98C00ed54dB6DB3C9775Be52b62b6e80fA6","from":"0x4686F132f1E6B1547bcE8516D1931C595ed30E45","contractAddress":null,"transactionIndex":28,"gasUsed":{"type":"BigNumber","hex":"0x6287"},"logsBloom":"0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000","blockHash":"0x67bf5a77ca6788feac1c99f98c1ca6fa4af73652e23f86029a37b93e160c6dcf","transactionHash":"0x46e4d74c6c60dabd8dfebcdeb69712e633f67d3683da41d201e00217c2ad0d0e","logs":[],"blockNumber":10599944,"confirmations":1,"cumulativeGasUsed":{"type":"BigNumber","hex":"0x440610"},"effectiveGasPrice":{"type":"BigNumber","hex":"0x59682f1c"},"status":0,"type":2,"byzantium":true}, code=CALL_EXCEPTION, version=providers/5.5.0)`


function extractMsg (msg) {
    // contract require messages with have both start and end sigs
    // if it doesn't have both as expected, return an empty string
    
    let startSig = `message":`;
    let endSig = `",`
    
    let startPos = msg.indexOf(startSig);
    console.log(startPos);
    if(startPos < 0) {return null};
    startPos = startPos + startSig.length + 1;  //remove startSig and before text
    msg = msg.substring(startPos);

    let endPos = msg.indexOf(endSig);
    if(endPos < 0){ 
        return null;
    } else {
        console.log(endPos);
        msg = msg.substring(0, endPos) //rest of message text upto endSig
    }
    return msg;
}

// test message with matching sigs
console.log("test msg with matching sigs")
message = extractMsg(message);
if(message){
    console.log(`extractMessage:= ${message}`);
};
console.log("done");

// test message without matching sigs
console.log("test msg with matching withoug sigs")
message = extractMsg(message2);
if(message){
    console.log(`extractMessage:= ${message}`);
};
console.log("done");

console.log('test this string'.indexOf('test'));   // index of 0 is valid
