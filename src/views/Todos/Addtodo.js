import React from "react";
import { toast } from 'react-toastify';

class Addtodo extends React.Component {
    state = {
        title: ''
    }
    handleOnchangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }


    handleOnClickAdd = () => {
        if (!this.state.title) {
            toast.error("Add Todo plz");
            // alert("Plz fill the space")
            return
        }
        let todo = {
            id: Math.floor(Math.random() * 1000),
            title: this.state.title
        }
        this.props.addNewTodo(todo)
        toast.success("Wow so easy!");
        this.setState({
            title: "",
        })

    }
    render() {
        let { title } = this.state
        return (
            <>
                <div className='List-Todo-addDOC'>
                    <input
                        value={title} type='span'
                        onChange={(event) => this.handleOnchangeTitle(event)}
                    />
                    <button type='button'
                        onClick={() => this.handleOnClickAdd()}
                    > ADD </button>
                </div>
            </>

        )
    }
}

export default Addtodo;