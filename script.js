function Todolist() {
    let ultodo, input;

    let todos = [{
            id: 0,
            text: 'Go shopping',
            completed: false
        },
        {
            id: 1,
            text: 'Go to school',
            completed: false
        },
        {
            id: 2,
            text: 'do homework',
            completed: true
        },
    ];
    const removeTodo = id => {
        todos = todos.filter(todo => todo.id !== id);
        console.log(todos);
        ultodo.removeChild(ultodo.querySelector('#todo-' + id));
    };

    const toggleTodo = (id, ele) => {

        todos = todos.map(ele => {
            if (ele.id === id) {
                ele.completed = !ele.completed;
            }
            return ele;
        });
        console.log(todos);
        const oldClass = ele.classList.contains('completed') ? 'completed' : 'uncomplete';
        const newClass = oldClass === 'completed' ? 'uncomplete' : 'completed';

        ele.classList.replace(oldClass, newClass);

        ele.parentNode.classList.toggle('completed');

    };
    const createLi = ({ text, completed, id }) => {

        const li = document.createElement('li');
        li.id = 'todo-' + id;
        if (completed) {
            li.classList.add('completed');
        }
        const spancheck = document.createElement('span');

        spancheck.classList.add(completed ? 'completed' : 'uncomplete');

        spancheck.addEventListener('click', (e) => {
            toggleTodo(id, e.target);
        });
        const spancross = document.createElement('span');
        spancross.classList.add('cross');

        spancross.addEventListener('click', (e) => {
            removeTodo(id);
        });

        const textNode = document.createTextNode(text);

        li.appendChild(spancheck);
        li.appendChild(textNode);
        li.appendChild(spancross);
        return li;


    };
    const addNewTodo = (todo) => {
        todos.push(todo);
        const li = createLi(todo);
        const firstLi = ultodo.firstChild;
        if (!firstLi) {
            ultodo.appendChild(li);
        } else {
            ultodo.insertBefore(li, firstLi);
        }


    }
    const addTodo = (e) => {
        const key = e.keyCode,
            ele = e.target;
        // 13 = ENTER KEY
        if (key === 13 && ele.value.trim().length > 2) {
            const todo = {
                text: ele.value.trim(),
                id: todos.length,
                completed: false
            };

            addNewTodo(todo);
            ele.value = '';
        }
    }
    const renderTodos = () => {

        ultodo = document.querySelector('ul#todolist');
        if (!ultodo) {
            ultodo = document.createElement('ul');
            ultodo.id = 'todolist';
            document.body.appendChild(ultodo);
        }
        //const lis = todos.map( todo => createLi(todo));
        todos.map(todo => createLi(todo))
            .forEach(li => ultodo.appendChild(li));

        input = document.querySelector('#todo');
        if (!input) {
            input = document.createElement('input');
            input.id = 'todo';
            input.name = 'todo';
            input.placeholder = ' Add new todo';
            ultodo.parentNode.insertBefore(input, ultodo);
        }
        input.addEventListener('keyup', addTodo);
    };

    return {
        getTodos: function() {
            return todos;
        },
        init: function() {
            renderTodos();
        }

    }
}
//renderTodos();
const myTodo = Todolist();
myTodo.init();
console.log(myTodo.getTodos());
console.log(myTodo);