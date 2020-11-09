const apiUrl = `https://jsonbox.io/box_b0b4e20ceaeca4d91882/`;

//GET
const getToDoList = async () => {
    const results = await fetch(apiUrl);
    const json = await results.json();
    const getDescription = json.forEach(object => {
        let li = document.createElement("Li");
        let div = document.createElement('div')
        let taskButton = document.createElement('button')
        li.innerHTML = object.description
        ul.appendChild(div);
        div.appendChild(li);
        li.appendChild(taskButton);
    })
}
getToDoList()


// forEach(element => {
//     const li = document.createElement("li");
//     const textnode = document.createTextNode(element);
//     li.appendChild(textnode);
//     results.appendChild(li);
// });
// }

// json.foreach((object) => {
//     li.addElement(object => object.description)
// })

// const description = async () => {
//     await get().data.description
//     console.log(description)
// }
// json data met forEach!!

//POST
const postToDoList = async () => {
    const data = { description: toDoInputField.value, done: false };
    fetch(apiUrl, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        }
    }).then(res => {
        return res.json()
    })
        .then(data => console.log(data))
        .catch(err => console.log('Error!'))
}






