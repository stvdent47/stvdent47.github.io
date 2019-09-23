const createTask = () => {
    //alert('You have successfylly created a task!');

    const newLi = document.createElement('li');
    newLi.innerHTML = 'text4';
    
    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = 'delete';
    
    newLi.append(deleteBtn);
    
    myList.append(newLi);
}