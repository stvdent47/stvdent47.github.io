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

	const saveToLocalStorage = (data) => {
		const json = JSON.stringify(data);
		return localStorage.setItem('todo', json);
	};

	const refresh = (inArray) => {
		saveToLocalStorage(inArray);
		setTimeout(() => {
			render(inArray)
		}, 0);
	};

	todoList = loadData(todoList);
	
	const render = (renderArray) => {
		let forCleaning = document.getElementById('myList');
		while (forCleaning.firstChild) {
			forCleaning.removeChild(forCleaning.firstChild);
		};
		
		let todoMap = renderArray.map(function(item, i, renderArray) {
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
			
			return newLi;
		});

		myList.append(...todoMap);
    };
    render(todoList);
    
    document.getElementById('createBtn').addEventListener('click', function () {
		const inputText = document.getElementById('taskInput').value;
		todoList.push(inputText);
		refresh(todoList);
		document.getElementById('taskInput').value = '';
	});
});