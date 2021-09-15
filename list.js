import TodoForm from "./form";
import { useState } from "react";

const todoList = [
    {
        id: 0,
        todo: '5am wake up',
    },
    {
        id: 1,
        todo: '5:30 shower',
    }, 
    {
        id: 2,
        todo: '6am yoga',
    }, 
    {
        id: 3,
        todo: '7am breakfast',
    },
];

function List() {
    const [todo, setTodo] = useState(todoList);
    const [complete, setComplete] = useState(false);

    const addToDoHandler = (newToDoItems) => {
        const newItem = {
            ...newToDoItems,
            
        };
        setTodo((prevToDoItem) => {
           return [newToDoItems, ...prevToDoItem];
        }); 
    };

    const checkInputHandler = (e) => {
        if (e.target.checked) {
            setComplete(true);
        } else {
            setComplete(false);
        }
    };

    return (
        <div>
            <TodoForm onSaveTodo={addToDoHandler} />
            {todo.map((List) => {
                return (
                    <div key={List.id} className="todo-item">
                        <input
                            id="input"
                            type="checkbox"
                            checked={complete}
                            onChange={checkInputHandler}
                        />
                        <div style={{ textDecoration: complete ? "underline" : "none" }}>
                            {List.todo}
                        </div>
                        
                        
                    </div>
                );
            })}
        </div>
    );
}

export default List;
