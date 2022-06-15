import React, { Component } from 'react';
import './TodoApps.scss'
import Addtodo from './Addtodo';
import { toast } from 'react-toastify';


class ListTodo extends Component {
    state = {
        listTodos: [
            { id: 'todo1', title: 'Learing React' },
            { id: 'todo2', title: 'Learing Python' },
            { id: 'todo3', title: 'Complete Project' }
        ],
        editTodo: {}
    }


    addNewTodo = (todo) => {
        this.setState({
            listTodos: [...this.state.listTodos, todo]
        })

    }

    handleEditSaveTodo = (todo) => {
        let { editTodo, listTodos } = this.state;
        let isEmpty = Object.keys(editTodo).length === 0;
        if (isEmpty === false && editTodo.id === todo.id) {
            let listTodosCopy = [...listTodos]
            let objIndex = listTodosCopy.findIndex((item => item.id === todo.id));
            //Update object's name property.
            listTodosCopy[objIndex].title = editTodo.title
            //Log object to console again.
            this.setState({
                listTodos: listTodosCopy,
                editTodo: {}
            })
            toast.success("Update Sucess");
            return
        }
        this.setState({
            editTodo: todo
        })
    }

    handleEditSaveTodohandleOnChangeEditSaveTodo = (event) => {
        let editTodoCopy = { ...this.state.editTodo }
        editTodoCopy.title = event.target.value
        this.setState({
            editTodo: editTodoCopy
        })
    }
    handleClickDelete = (todo) => {
        let currentTodo = this.state.listTodos;
        currentTodo = currentTodo.filter(item => item.id !== todo.id)
        this.setState({
            listTodos: currentTodo
        })
        toast.success("Delete success");

    }
    render() {
        let { listTodos, editTodo } = this.state
        let isEmpty = Object.keys(editTodo).length === 0;
        return (
            <div className='List-Todo-Container'>
                <Addtodo
                    addNewTodo={this.addNewTodo}
                />
                <div className='List-Todo-Contents'>
                    {listTodos && listTodos.length > 0 &&
                        listTodos.map((item, index) => {
                            return (
                                <div className='Todo-Child' key={item.id}>
                                    {isEmpty === true ?
                                        <span className='Todo-Child-Content'>
                                            {index + 1}. {item.title}
                                        </span>
                                        :
                                        <>
                                            {editTodo.id === item.id ?
                                                <span>
                                                    {index + 1}. <input
                                                        onChange={(event) => this.handleEditSaveTodohandleOnChangeEditSaveTodo(event)}
                                                        value={editTodo.title}
                                                    />
                                                </span>
                                                :
                                                <span>{index + 1}. {item.title}</span>
                                            }
                                        </>
                                    }
                                    <div className='Todo-Child-Bbtn'>
                                        <button className='Todo-Child-Editbtn'
                                            onClick={() => this.handleEditSaveTodo(item)}
                                        >
                                            {isEmpty === false && editTodo.id === item.id ?
                                                'Save ' : 'Edit'
                                            }
                                        </button>
                                        <button className='Todo-Child-Deletebtn'
                                            onClick={() => this.handleClickDelete(item)}
                                        >Delete</button>
                                    </div>
                                </div>
                            )

                        })

                    }

                </div>
            </div>
        );
    }
}

export default (ListTodo);