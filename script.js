var todoList = {
	todos: [],
	displayTodos: function() {
		if (this.todos.length === 0) {
			console.log('Your todo list is empty!');
		} 	
		else {
			console.log('My todos:');
			for (var idx = 0; idx < this.todos.length; idx++) {
				if (this.todos[idx].completed === true) {
					console.log('(x)', this.todos[idx].todoText);
				} else {
					console.log('( )', this.todos[idx].todoText);
				}	
			}
		}
	},
	addTodo: function(todoText) {
		this.todos.push({
			todoText: todoText,
			completed: false
		});
		this.displayTodos();
	},
	changeTodo: function(position, todoText) {
		this.todos[position].todoText = todoText;
		this.displayTodos();
	},
	deleteTodo: function(position) {
		this.todos.splice(position, 1);
		this.displayTodos();
	},
	toggleCompleted: function(position) {
		var todo = this.todos[position];
		todo.completed = !todo.completed;
		this.displayTodos();
	},
	toggleAll: function() {
		var todos = this.todos;
		var totalTodos = this.todos.length;
		var completedTodos = 0;

		var toggle = function(val) {
			for (var i = 0; i < totalTodos; i++) {
				todos[i].completed = val;
			}
		};
		// Get completed todos
		for (var idx = 0; idx < totalTodos; idx++) {
			if (this.todos[idx].completed === true) {
				completedTodos++;
			}
		}

		if (completedTodos === totalTodos) {
			toggle(false);
		} else {
			toggle(true);
		}
		this.displayTodos();
	}
};

var handlers = {
	displayTodos: function() {
		todoList.displayTodos();
	},
	addTodo: function() {
		var addTodoTextInput = document.getElementById('addTodoTextInput');
		todoList.addTodo(addTodoTextInput.value);
		addTodoTextInput.value = '';
	},
	changeTodo: function() {
		var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
		var changeTodoTextInput = document.getElementById('changeTodoTextInput');
		todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
		changeTodoPositionInput.value = '';
		changeTodoTextInput.value = '';
	},
	deleteTodo: function() {
		var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
		todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
		deleteTodoPositionInput.value = '';
	},
	toggleCompleted: function() {
		var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
		todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
		toggleCompletedPositionInput.value = '';
	},
	toggleAll: function() {
		todoList.toggleAll();
	}
};






























