async function greet() {
  return "Hello";
}

greet().then(function (message) {
  console.log(message); // "Hello"
});

// ----------------------------------------

function waitTwoSeconds() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve("Waited for 2 seconds");
    }, 2000);
  });
}

async function runTask() {
  console.log("Start");

  const result = await waitTwoSeconds();
  console.log(result);

  console.log("End");
}

runTask();


// ----------------------------------------

function fakeTask(fail) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (fail) {
        reject("Something went wrong");
      } else {
        resolve("Task completed");
      }
    }, 1000);
  });
}

async function run() {
  try {
    const result = await fakeTask(false);
    console.log(result);
  } catch (error) {
    console.log("Caught error:", error);
  }
}

run();