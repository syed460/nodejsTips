const { performance } = require('perf_hooks')

var startTime = performance.now(
)

console.log("Hi Mohamad")

console.log("Testing the function")

var endTime = performance.now()

console.log(`call took ${endTime - startTime} in milliseconds`)

/** Output
Hi Mohamad
Testing the function
call took 3.0486000000382774 in milliseconds
 */

