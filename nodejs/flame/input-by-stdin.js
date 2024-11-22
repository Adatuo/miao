// process.stdin.on('data',d=>{
//   console.log(d.toString());  
// })

process.stdin.pipe(process.stdout)