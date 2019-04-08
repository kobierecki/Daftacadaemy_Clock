var actualDate = new Date();
var hours = actualDate.getHours();
var minutes = actualDate.getMinutes();
var seconds = actualDate.getSeconds();

console.log(hours);
console.log(minutes);
console.log(seconds);

function* secGenerator() {
  let counter = seconds;
  for (let i = 0; i < 10; i++) {
    yield counter++;
  }
}

function* minGenerator() {
  let counter = minutes.value;
  for (let i = 0; i < 60; i++) {
    yield counter++;
  }
}

function* hourGenerator() {
  let counter = hours;
  for (let i = 0; i < 24; i++) {
    yield counter++;
  }
}

const gen = secGenerator();
const start = setInterval(() => {
  var next = gen.next();
  if (next.done) {
    clearInterval(start);
  } else {
    console.log(next.value);
  }
}, 1000);
