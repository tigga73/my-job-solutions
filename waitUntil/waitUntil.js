// callback is the function or block of code that you pass to resolve
// tick is the value in miliseconds that the function will repeat
export async function waitUntil(callback, tick = 50, attempts = 10) {
  let interval;
  let step = 0;
  await new Promise((resolve, reject) => {
    inteval = setInterval(() => {
      if (step === attempts) {
        clearInterval(interval);
        reject("Maximum attempts achieved");
      }
      callback(resolve);
      step = +1;
    }, tick);
  });
  clearInterval(interval);
}

// a simplest way to return the result of condition when she's true ou fullfilment
export async function waitUntil2(condition) {
  return await new Promise((resolve) => {
    const interval = setInterval(() => {
      if (condition) {
        resolve(condition);
        clearInterval(interval);
      }
    }, 1000);
  });
}
