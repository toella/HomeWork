// import "./TodoForm.css";
import React, { useRef, useEffect } from "react";

function Todo(props) {
    let todoRef = useRef();

    useEffect(() => {
        todoRef.current.focus();
    }, []);

    const handleSumbit = (e) => {
        e.preventDefault();
        let todoList = {
            todo: todoRef.current.value,
        };
        if (todoRef.current.value === "") {
            return;
        } else {
            props.onSaveTodo(todoList);
            todoRef.current.value = "";
        }
    };

    return (
        <div>
            <form onSubmit={handleSumbit} >
                <input placeholder="To-Do" ref={todoRef} />
                <button>Add</button>
            </form>
        </div>
    );
}

export default Todo;