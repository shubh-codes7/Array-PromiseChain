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
                    res("API1 done")
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
                    res("API2 done")
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
                    res("API3 done")
                })
        }, 3000)
    })
}


btn.addEventListener("click", ()=>{
    PromiseAPI1()
        .then((msg1) => {
        console.log(msg1);
        return PromiseAPI2();
      })
      .then((msg2) => {
        console.log(msg2);
        return PromiseAPI3();
      })
      .then((msg3) => {
        console.log(msg3);
        container.innerHTML += "<h2>✅ All APIs fetched!</h2>";
      })
      .catch((error) => {
        container.innerHTML += `<p style="color:red;">❌ Error: ${error}</p>`;
      });
})
