// covert int to hex and back again
for(let i = 0;i < 20; ++i ){
    let h = (i.toString(16))
    let d = parseInt(h, 16);
    console.log(`int: ${i} hex: ${h} int: ${d}`)
}

 