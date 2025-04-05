let btn = document.querySelector("button")
let container = document.querySelector("#container")

function showData(data) {
    container.innerHTML += `
        <pre>${JSON.stringify(data, null, 2)}</pre>
    `    
}
  

const PromiseAPI1 = () => {
    return new Promise((res, rej) => {
        setTimeout(()=>{
            fetch("https://dummyjson.com/posts")
                .then(res => res.json())
                .then(data => {
                    showData(data.posts) 
                    res(true)
                })
        }, 1000)
    })
}


const PromiseAPI2 = () => {
    return new Promise((res, rej) => {
        setTimeout(()=>{
            fetch("https://dummyjson.com/products")
                .then(res => res.json())
                .then(data => {
                    showData(data.products) 
                    res(true)
                })
        }, 2000)
    })
}


const PromiseAPI3 = () => {
    return new Promise((res, rej) => {
        setTimeout(()=>{
            fetch("https://dummyjson.com/todos")
                .then(res => res.json())
                .then(data => {
                    showData(data.todos) 
                    res(true)
                })
        }, 3000)
    })
}


btn.addEventListener("click", ()=>{
    PromiseAPI1()
      .then((res1) => res1 && PromiseAPI2())
      .then((res2) => res2 && PromiseAPI3())
      .then((res3) => res3 && (container.innerHTML += "<h2>✅ All APIs fetched!</h2>"))
      .catch((error) => {
        container.innerHTML += `<p style="color:red;">❌ Error: ${error}</p>`;
      });
})
