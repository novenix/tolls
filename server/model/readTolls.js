const fs=require('fs');
const data=fs.readFileSync('entrada.txt',{encoding:'utf8'});
console.log('entra',data)
module.exports=data;
// const readline=require('readline');
// const rl=readline.createInterface(process.stdin,process.stdout);
// console.log('entra',data)
// module.exports=data;