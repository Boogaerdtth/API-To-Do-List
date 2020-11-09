const addButton = document.querySelector('.add-button')
const deleteButton = document.querySelector('.delete-button')
const ul = document.querySelector('.ul')
let li = document.createElement("Li");
const toDoInputField = document.querySelector('.textfield')
const clearList = () => ul.innerHTML = "";

// De todo die toegevoegd moet worden, 
//wordt te laat pas toegevoegd!!

addButton.addEventListener('click', () => {
    clearList();
    li.innerHTML = toDoInputField.value;
    postToDoList();
    getToDoList();

});



const deleteTodoData = async id => {
    const result = await fetch(`${apiUrl} ${id}`, {
        method: "DELETE",
    });
    // console.log(result)
    const json = await result.json()
    return json

}
// console.log(deleteTodoData())

let taskButton = document.getElementsByTagName('button')

taskButton.addEventListener('click', () => {
    clearList();
    const removeDivFromUl = ul.removeChild(div);
    deleteTodoData(removeDivFromUl)
        .then(getToDoList());
})