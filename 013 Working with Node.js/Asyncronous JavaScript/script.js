console.log("A");

setTimeout(() => {
  console.log("B");
}, 1000);

console.log("C");

// Output:
// A
// C
// B (after about 1 second)

console.log("Start");

setTimeout(() => {
  console.log("Waiting over");
}, 2000);

console.log("End");

// Output:
// Start
// End
// Waiting over (after ~2 seconds)