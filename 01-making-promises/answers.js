/**
 *
 * EXERCISE 1
 *
 * @returns {Promise<3>}
 */
function makePromiseResolveWith3() {
  /* IMPLEMENT ME! */
  return Promise.resolve(3);
}

/**
 *
 * EXERCISE 2
 *
 * @returns {Promise<,"Boo!">}
 */
function makePromiseRejectWithBoo() {
  /* IMPLEMENT ME! */
  // return new Promise((resolve, reject) => {
  //   reject('Boo');
  // });
  return Promise.reject('Boo!');
}

/**
 *
 * EXERCISE 3
 *
 * @param {true} itShouldResolve - Whether the promise should resolve or reject
 * @returns {Promise<undefined, undefined>}
 */

function makePromiseWithConstructor(itShouldResolve) {
  return new Promise((resolve, reject) => {
    itShouldResolve ? resolve('Promise resolved') : reject('Promise rejected');
    /* If itShouldResolve is true, call resolve */
    /* If itShouldResolve is false, call reject */
  });
}

/**
 *
 * EXERCISE 4
 *
 * @param {300} value
 * @param {2000} delayInMs
 * @return {Promise<any>} - A promise that will resolve with the value after delayInMs milliseconds
 */
function makeDelayPromise(value, delayInMs) {
  /* Return a promise that resolves with the value after delayInMs */
  return new Promise((resolve) => setTimeout(() => resolve(value), delayInMs));
}

module.exports = {
  makePromiseResolveWith3,
  makePromiseRejectWithBoo,
  makePromiseWithConstructor,
  makeDelayPromise,
};
