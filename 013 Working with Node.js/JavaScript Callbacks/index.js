function greet(name) {
  console.log("Hello, " + name);
}

function processUser(callback) {
  const userName = "Harry";
  callback(userName);
}

processUser(greet);

function showMessage() {
  console.log("This runs after 2 seconds");
}

setTimeout(showMessage, 2000);

console.log("This runs first");

document.getElementById("btn").addEventListener("click", function () {
  console.log("Button clicked");
});