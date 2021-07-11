function delayToEcho (msg, cb) {
  setTimeout(() => {
    const err = Date.now() % 2 === 0 ? null : new Error();
    cb(err, msg);
  }, 1000);
}

// 正常调用
delayToEcho('msg', (err, msg) => {});

function promisify (fn) {
  return (msg)=>{
    // 请把这个函数实现，能够让第 #15 行开始的代码能够成功运行
    return new Promise((resolve,reject)=>{
      fn(msg,(err,msg)=>{
        if(err){
          reject(err)
        }else{
          resolve(msg)
        }
      })
    })
  }
}

// console.log('promisify',promisify(delayToEcho)('dddd'))
promisify(delayToEcho)('msg')
.then(msg => {
  console.log('msg',msg);
})
.catch((err) => {
  console.log('err',err);
});