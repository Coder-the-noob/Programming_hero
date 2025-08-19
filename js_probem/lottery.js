function getLotteryNumbers(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

for (var i = 0; i <= 5; i++) {
  console.log(getLotteryNumbers(1, 20))
}