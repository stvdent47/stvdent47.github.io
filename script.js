const createTask = () => {
    //alert('You have successfylly created a task!');

    const newLi = document.createElement('li');
    let inputText = document.getElementById('taskInput').value;
    newLi.innerHTML = inputText;
    
    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = 'delete';
    
    newLi.append(deleteBtn);
    
    myList.append(newLi);
}