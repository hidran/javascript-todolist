function Todolist() {
    let ultodo, input;
    const todos = [{
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
    const createLi = ({ text, completed, id }) => {

        const li = document.createElement('li');
        li.id = id;
        const spancheck = document.createElement('span');

        spancheck.classList.add(completed ? 'completed' : 'uncomplete');

        const spancross = document.createElement('span');
        spancross.classList.add('cross');

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