window.addEventListener('load', () => {
    let todoList = [];
	
	const loadData = () => {
		try {
		const json = localStorage.getItem('todo');
		const data = JSON.parse(json);
		
		if (Array.isArray(data)) {
			return data;
		} else {
			return [];
		}
		} catch (e) {
			return [];
			};
	}

	const saveData = (data) => {
		const json = JSON.stringify(data);
		return localStorage.setItem('todo', json);
	};

	const refresh = (inArray) => {
		saveData(inArray);
		setTimeout(() => {
			render(inArray)
			}, 0);
	};
	
	todoList = loadData(todoList);
	
    const render = (renderArray) => {
        if (renderArray != undefined) {
        	let forCleaning = document.getElementById('myList');
			while (forCleaning.firstChild) {
				forCleaning.removeChild(forCleaning.firstChild);
			};
				
			for (let i = 0; i < renderArray.length; i++) {
				const newLi = document.createElement('li');
				newLi.innerHTML = renderArray[i];
				
				const deleteBtn = document.createElement('button');
				deleteBtn.className = 'deleteBtn';
				deleteBtn.innerHTML = 'delete';

				deleteBtn.addEventListener('click', function() {
					renderArray.splice(i, 1);
					refresh(renderArray);
				});

				newLi.append(deleteBtn);
				myList.append(newLi);
				}
            
        }
    }
    render(todoList);
    
    document.getElementById('createBtn').addEventListener('click', function () {
		const inputText = document.getElementById('taskInput').value;
		todoList.push(inputText);
		refresh(todoList);
		document.getElementById('taskInput').value = '';
	});
});