// an anemic promise only to wait the time in miliseconds
export async function delay(ms) {
  return await new Promise((resolve) => setTimeout(resolve, ms));
}

// a promise that return the result of the condition after the time in miliseconds
export async function delay(ms, condition) {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve(condition);
    }, ms);
  });
}
