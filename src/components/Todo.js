import React, {useState} from 'react';

const todo = props => {
    // const inputState = useState('');
    const [todoName, setTodoName] = useState('');
    const [todoList, setTodoList] = useState([]);

    const inputChangedHandler = (event) => {
        setTodoName(event.target.value)
    };

    const todoAddHandler = () => {
        setTodoList(todoList.concat(todoName));
    };
    return (
        <React.Fragment>
            <input type="text"
                   placeholder="Todo"
                   onChange={inputChangedHandler}
                   value={todoName}/>
            <button type="button" onClick={todoAddHandler}>Add</button>
            {todoName}
            <ul>
                {todoList.map(todo => <li key={todo}>{todo}</li>)}
            </ul>
        </React.Fragment>
    );

    /*const [todoState, setTodoState] = useState({userInput: '', todoList: []});

    const inputChangedHandler = (event) => {
        setTodoState({userInput: event.target.value, todoList: todoState.todoList})
    };

    const todoAddHandler = () => {
        setTodoState({userInput: todoState.userInput, todoList: todoState.todoList.concat(todoState.userInput)})
    };
    return (
        <React.Fragment>
            <input type="text"
                   placeholder="Todo"
                   onChange={inputChangedHandler}
                   value={todoState.userInput}/>
            <button type="button" onClick={todoAddHandler}>Add</button>
            {todoState.userInput}
            <ul>
                {todoState.todoList.map(todo => <li key={todo}>{todo}</li>)}
            </ul>
        </React.Fragment>
    );*/
};

export default todo;