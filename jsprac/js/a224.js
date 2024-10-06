var addForm = document.querySelector('#form');

var list = document.querySelector('#todos');

var search = document.querySelector('#search');

var addNewToDoRecord = (input) => {
	console.log(input);

	list.innerHTML += `
		<li class="rec">
			<span>${input}</span>
			<img src="images/del.png"  class="delete">
		</li>
	  `;

	addForm.reset();
};

addForm.addEventListener('submit', e => {
	e.preventDefault();	
	
	var input = addForm.add.value.trim();
	
	
	addNewToDoRecord(input);
});

list.addEventListener('click',e=>{
	//console.log(e.target)
	//console.log(e.target.classList)
	//console.log(e.target.classList.contains('delete'))

	if(e.target.classList.contains('delete')){
		//console.log(e.target.parentElement);
		e.target.parentElement.remove();
	}
});

search.addEventListener('keyup', (e)=>{
	//console.log(search.value);
	var key = search.value;
	
	searchToDo(key);
});

var searchToDo = (key)=>{
	//console.log(list.children);
	//console.log(Array.from(list.children));

	//console.log(todo.textContent);
		//console.log(todo.textContent.includes(key));

	Array.from(list.children)
		.filter(todo=>!todo.textContent.toLowerCase().includes(key.toLowerCase()))
		.forEach(todo=> todo.classList.add('hide'));

	Array.from(list.children)
		.filter(todo=>todo.textContent.toLowerCase().includes(key.toLowerCase()))
		.forEach(todo=> todo.classList.remove('hide'));
};
