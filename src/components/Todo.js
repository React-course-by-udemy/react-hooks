import React, {useState, useEffect} from 'react';
import axios from 'axios';

const todo = props => {
    // const inputState = useState('');
    const [todoName, setTodoName] = useState('');
    const [todoList, setTodoList] = useState([]);

    useEffect(() => {
        axios.get('https://reacthooks-69e5d.firebaseio.com/todos.json')
            .then(result => {
                console.log(result);
                const todoData = result.data;
                let todos = [];
                for (const key in todoData) {
                    todos.push({id: key, name: todoData[key].name})
                }
                setTodoList(todos);
            })
            .catch(error => console.log(error));

        return () => {
            console.log('cleanup');
        };
    }, [todoName]);

    const inputChangedHandler = (event) => {
        setTodoName(event.target.value)
    };

    const todoAddHandler = () => {
        setTodoList(todoList.concat(todoName));
        axios.post('https://reacthooks-69e5d.firebaseio.com/todos.json', {name: todoName})
            .then(res => console.log(res))
            .catch(error => console.log(error));
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
                {todoList.map(todo => <li key={todo.id}>{todo.name}</li>)}
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