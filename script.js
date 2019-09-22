const createTask = () => {
    alert('You have successfylly created a task!');

    

    var newItem = document.createElement("li");
    var newText = document.createTextNode("text4");
    newItem.appendChild(newText);
    document.getElementById("myList").appendChild(newItem);

    
    var button = document.createElement("button");
    button.innerHTML = "delete";
    document.body.appendChild(button);
}