window.addEventListener('load', () => {
    var todoList = [];

    if (localStorage.getItem('todo') != undefined) {
        todoList = JSON.parse(localStorage.getItem('todo'));
        for (let i = 0; i < todoList.length; i++) {
            const aNewLi = document.createElement('li');
            aNewLi.innerHTML = todoList[i];
            

            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'deleteBtn';
            deleteBtn.innerHTML = 'delete';

            deleteBtn.addEventListener('click', function() {
            aNewLi.remove();
            });

            aNewLi.append(deleteBtn);
            myList.append(aNewLi);
        }
    }

    document.getElementById('createBtn').addEventListener('click', function () {
    const inputText = document.getElementById('taskInput').value; 
    const newLi = document.createElement('li');
    newLi.innerHTML = inputText;

    todoList.push(inputText);
    console.log(todoList);
    localStorage.setItem('todo', JSON.stringify(todoList));
    
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'deleteBtn';
    deleteBtn.innerHTML = 'delete';

    deleteBtn.addEventListener('click', function() {
        newLi.remove();
    });

    newLi.append(deleteBtn);
    myList.append(newLi);

    document.getElementById('taskInput').value = '';
});
});