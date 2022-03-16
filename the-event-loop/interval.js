let count = 3;
const launch = setInterval(() => {
  if (count > 0) {
    console.log(count--);
  } else {
    console.log('Blast off!');
    clearInterval(launch);
  }
}, 1000);
