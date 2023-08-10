const myForm = document.querySelector('#myForm')
const div = document.querySelector('.div')
myForm.addEventListener('submit', (event) =>{
    event.preventDefault()
    let text = event.target.elements.text.value
    let category = event.target.elements.category.value
    createElement( text,category)
})
function createElement(text , category){
let create = document.createElement("li");
let create2 = document.createElement("li");
create.textContent = text;
create2.textContent = category;
div.append(create);
div.append(create2)
}
