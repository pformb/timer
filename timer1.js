const timer = () => {
  for (let j = 2; j < process.argv.length; j++) { // loop through process.argv array
    if (process.argv[j] < 0 || process.argv[j] === NaN) { // if = neg num or NaN, skip
      continue;
    }
    let dingTime = process.argv[j] * 1000; // dingTime = nums input into terminal x 1000 (ex 1 = 1000 ms)
    setTimeout(() => {
      process.stdout.write("\x07"); // timer set to ding every dingTime 
    }, dingTime);
  }
};

timer(); // call timer 
