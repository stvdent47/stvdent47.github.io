const createTask = () => {
    //alert('You have successfylly created a task!');

    const newLi = document.createElement('li');
    const inputText = document.getElementById('taskInput').value;
    newLi.innerHTML = inputText;
    
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'deleteBtn';
    deleteBtn.innerHTML = 'delete';
    
    //newLi.remove();
    
    newLi.append(deleteBtn);
    
    myList.append(newLi);
}