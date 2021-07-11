// const defers = {aaa:{}}
// function defer(id,fn){
//   return new Promise((r,j)=>{
//     defers[id].resolve = r
//   }).then(fn)
// }
// defer('aaa',()=>console.log('ddd'))
// defers['aaa'].resolve(true)

// const test = new Promise((resolve,reject)=>{
//   setTimeout(() => {
//     resolve()
//   }, 2000);
// }).then(()=>{
//   return '2222'
// })
// console.log('test',test)

Promise.resolve(setTimeout(() => {
  
}, 3000)).then(()=>{
  console.log('okok',)
})