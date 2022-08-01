// const amount = 1
// if (amount < 10) {
//     console.log("small number")
// } else {
//     console.log("large number");
// }
// const names = require('./names')
// const sayHi = require('./Utils')
// const data = require('./alternate')
// require('./addvalues')
// sayHi('susan')
// sayHi(names.john)
// sayHi(names.peter)


// const os = require('os')
// const user = os.userInfo()
// console.log(user)
// console.log(`The system uptime is ${os.uptime()} seconds`)
// const currentOS = {
//     name: os.type(),
//     release: os.release(),
//     totalMem: os.totalmem(),
//     freeMem: os.freemem()
// }
// console.log(currentOS);

// const path = require('path')
// console.log(path.sep);

// const filePath = path.join('/content/', 'subfolder', 'test.txt')
// console.log(filePath)

// const base = path.basename(filePath)
// console.log(base)

// const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
// console.log(absolute)

// const { readFileSync, writeFileSync } = require('fs')
// console.log('start');
// const first = readFileSync('./content/first.txt', 'utf8')
// const second = readFileSync('./content/second.txt', 'utf8')
// writeFileSync(
//     './content/write-test-sync.txt',
//     `This your write file test result: ${first}, ${second}`, { flag: 'a' }
// )
// console.log('done');

// console.log(first, second);

// const { readFile, writeFile } = require('fs')

// console.log('start');
// readFile('./content/first.txt', 'utf8', (err, result) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     const first = result;

//     readFile('./content/second.txt', 'utf8', (err, result) => {
//         if (err) {
//             console.log(err);
//             return;
//         }
//         const second = result;
//         writeFile(
//             './content/write-test-async.txt',
//             `This your write file test result: ${first}, ${second}`, (err, result) => {
//                 if (err) {
//                     console.log(err);
//                     return
//                 }
//                 console.log('done');
//             }
//         )
//     })
// })
// console.log('starting next');