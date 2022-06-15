import React from "react";

class AddComponent extends React.Component {
    state = {
        title: '',
        salary: '',
    }

    handleChangeJobTitle = (event) => {
        this.setState(
            { title: event.target.value }
        )

    }

    handleChangeSalary = (event) => {
        this.setState(
            { salary: event.target.value }
        )

    }

    handleOnclickButton = (event) => {
        event.preventDefault()
        if (!this.state.title || !this.state.salary) {
            alert('Require parametter')
            return
        }
        console.log(`check data input: `, this.state)
        this.props.addNewJobs(
            {
                id: Math.floor(Math.random() * 1000),
                title: this.state.title,
                salary: this.state.salary
            }

        )
        this.setState({
            title: "",
            salary: ''
        })
    }
    render() {
        return (
            <form>
                <label htmlFor="fname">Title:</label><br />
                <input
                    type="text"
                    value={this.state.title}
                    onChange={(event) => this.handleChangeJobTitle(event)}
                /><br />
                <label htmlFor="lname">salary:</label><br />
                <input
                    type="text"
                    value={this.state.salary}
                    onChange={(event) => this.handleChangeSalary(event)}
                /><br /><br />
                <input
                    type="button"
                    value="Submit"
                    onClick={(event) => this.handleOnclickButton(event)}
                />
            </form>
        )

    }
}

export default AddComponent;