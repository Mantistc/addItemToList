var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li")

function inputLength() {
    return input.value.length;
}

var addItemToList = function () {
    //create li Item
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    li.addEventListener("click", toggleClass);
    ul.appendChild(li);
    input.value = "";

    //create botton delete item
    var butt = document.createElement("button")
    butt.appendChild(document.createTextNode("Delete"));
    butt.classList.add("aBlue");
    li.appendChild(butt);

    /// add class to li
function toggleClass() {
    li.classList.toggle("done");
}
// delete item event
butt.addEventListener("click", deleteItem)
}

//function to Delete
function deleteItem (){
    this.parentNode.remove();
}


function clickToAdd() {
    if (inputLength() > 0) {
        addItemToList();
    }
}

function enterToAdd(event) {
    if (inputLength() > 0 && event.which === 13) {
        addItemToList();
    }
}
button.addEventListener("click", clickToAdd);
input.addEventListener("keypress", enterToAdd)




