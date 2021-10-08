const fetch = (url) => {
  return new Promise((resolve) => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', url)
    xhr.send(null)
    xhr.timeout = 10000
    xhr.ontimeout = () => {
      alert('请求超时')
    }
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        resolve(xhr.responseText)
      }
    }
  })
}
let num = 0
const request = () => {
  fetch(`http://localhost:3000/selectToken?num=${num++}`).then((res) => {
    self.postMessage(res)
    if (+res !== 200) {
      request()
    }
  })
}

request()
