/** 让work在一个页面内容  */
// const createWorker = (fn) => {
//   const blob = new Blob(['(' + fn.toString() + ')()'])
//   const url = window.URL.createObjectURL(blob)
//   const work = new Worker(url)
//   return work
// }

const main = () => {
  const worker = new Worker('./worker.js')
  worker.onmessage = (e) => {
    if (+e.data === 200) {
      console.log('查询数据轮询成功')
      worker.terminate()
    }
  }
}

main()
