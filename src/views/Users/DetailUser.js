import React from "react";
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import './User.scss'


class DetailUser extends React.Component {
    state = {
        user: {}
    }

    handleBackToListUser = () => {
        this.props.history.push('/user')
    }
    async componentDidMount() {
        if (this.props.match && this.props.match.params) {
            let id = this.props.match.params.id
            let res = await axios.get(`https://reqres.in/api/users/${id}`)
            this.setState({
                user: res && res.data && res.data.data ? res.data.data
                    : {}
            })
        }
    }
    render() {
        let { user } = this.state
        let isEmpty = Object.keys(user).length === 0;
        return (
            console.log('Checkk Props ', this.props),
            <>
                <div> [USER DETAIL]</div>
                {isEmpty === false &&
                    <>
                        <div>Name: {user.first_name} - {user.last_name}</div>
                        <div>Email: {user.email}</div>
                        <div>
                            <img src={user.avatar} />
                        </div>
                        <div>
                            <button type="button" onClick={() => this.handleBackToListUser()} > Back</button>
                        </div>
                    </>
                }
            </>
        )
    }
}

export default withRouter(DetailUser);