const wavesCleaned = new Map([
    ['one', 1],
    ['two', 2],
    ['three', 3]
  ]);
  
  //const arr = Array.from(map1);
  //console.log(arr.reverse()); // 👉️ [['two', 2], ['one', 1] ]

  const wavesCleanedReverse = new Map([...wavesCleaned].reverse());
  console.log(wavesCleaned); // 👉️ {'two' => 2, 'one' => 1}
  console.log(wavesCleanedReverse); // 👉️ {'two' => 2, 'one' => 1}
