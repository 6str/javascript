  
  // sleep using a loop. probably spikes cpu and bad form but can be used outside of a function
  function sleepWithLoop(milliseconds) {
    let start = new Date().getTime();
    while (new Date().getTime() - start <= milliseconds){
    }
  }
 
  console.log("before sleepWithLoop");
  sleepWithLoop(2e3); //sleep for 2 seconds
  console.log("after sleepWithLoop");
  

  // sleep with promise and async / wait. must be called from inside an async function due to JavaScript being asynchronous, only the function code is waiting
  const sleepNow = ms => new Promise((resolve) => setTimeout(resolve, ms))

  let anonFunc = async () => {
    console.log("before sleepWithPromise async/wait")
    await sleepNow(2000);
    console.log("after sleepWithPromise async/wait")
  }

  anonFunc(); // execution will carry on from here straight after the function call, so might need the ugly sleep with loop solution
  console.log("the last line of code")  // this will be logged before the async/wait sleep is finished
  