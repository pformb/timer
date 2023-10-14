const timer = () => {
  for (let j = 2; j < process.argv.length; j++) {
    if (process.argv[j] < 0 || process.argv[j] === NaN) {
      continue;
    }
    let dingTime = process.argv[j] * 1000;
    setTimeout(() => {
      process.stdout.write("\x07");
    }, dingTime);
  }
};

timer();
