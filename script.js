window.addEventListener('load', () => {
document.getElementById('createBtn').addEventListener('click', function() {
    const newLi = document.createElement('li');
    const inputText = document.getElementById('taskInput').value;
    newLi.innerHTML = inputText;

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'deleteBtn';
    deleteBtn.innerHTML = 'delete';

    deleteBtn.addEventListener('click', function() {
        newLi.remove();
    });

    newLi.append(deleteBtn);
    myList.append(newLi);
});
});