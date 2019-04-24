function Todolist(){

    const todos = [
        {
            id: 0,
            text : 'Go shopping',
            completed : false
        },
        {
            id: 0,
            text : 'Go to school',
            completed : false
        },
        {
            id: 0,
            text : 'do homework',
            completed : true
        },
    ];
   const createLi = (todoObj) => {
       const li = document.createElement('li');

       const spancheck = document.createElement('span');
       
       spancheck.classList.add(todoObj.completed ? 'completed' : 'uncomplete');

       const spancross = document.createElement('span');
       spancross.classList.add('cross');

       const text = document.createTextNode(todoObj.text);

       li.appendChild(spancheck);
       li.appendChild(text);
       li.appendChild(spancross);
       return li;

    /*
    <li class="completed">
            <span class="completed"></span>
            Todo1
            <span class="cross"></span>
        </li>
     */
   };

    const renderTodos = () => {
      
        let ultodo = document.querySelector('ul#todolist');
        if(!ultodo){
            ultodo = document.createElement('ul');
            ultodo.id = 'todolist';
            document.body.appendChild(ultodo);
        }
        //const lis = todos.map( todo => createLi(todo));
        todos.map( todo => createLi(todo))
        .forEach( li => ultodo.appendChild(li));
    };
    
  return {
      getTodos : function(){
          return todos;
      },
      init : function(){
        renderTodos();
      }

  }
}
//renderTodos();
const myTodo = Todolist();
myTodo.init();
console.log(myTodo.getTodos());
console.log(myTodo);