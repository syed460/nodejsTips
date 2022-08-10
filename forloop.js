
const names = ['mark', 'james', 'jeen', 'andrew']

// for (let i = 0; i < names.length; i++ ) {
//     console.log(`${names[i]} in for loop`)
// }

// 
// for (const index in names) {
//     console.log(`${names[index]} is at position ${index}`)
// }

// another method

// for (const name of names) {
//     console.log(`Name is ${name}`)
// }

// foreach method
// Node: foreach method will not work in asyn scripts...

// names.forEach(async function(name) {
//     console.log(`foreach name is: ${name}`)
// })


//async for each tried, but not working...
// function asyncForEach(names, cb){
//     names.forEach(function () {
//         setTimeout(cb,0)
//     })
// }

// asyncForEach(names, function (name) {
//     console.log(name)
//     console.log("hi")
// })