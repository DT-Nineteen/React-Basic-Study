import React from "react";
import axios from "axios";
import { withRouter } from 'react-router-dom'
import './User.scss'

class User extends React.Component {
    state = {
        ListUsers: []
    }

    async componentDidMount() {
        let res = await axios.get('https://reqres.in/api/users?page=2')
        this.setState({
            ListUsers: res && res.data && res.data.data ? res.data.data : []
        })
    }

    handleDetailUser = (user) => {
        this.props.history.push(`/user/${user.id}`)
    }
    render() {
        let { ListUsers } = this.state
        return (
            < div className="user-container" >
                <div className='user-title'>
                    List Users
                </div>
                <div className="list-users">
                    {ListUsers && ListUsers.length > 0 ?
                        ListUsers.map((item, index) => {
                            return (
                                <div className="single-user" key={item.id} onClick={() => this.handleDetailUser(item)}>
                                    {index + 1}. {item.first_name} {item.last_name}
                                </div>
                            )
                        })
                        : []
                    }
                </div>
            </div>
        )
    }
}

export default withRouter(User);