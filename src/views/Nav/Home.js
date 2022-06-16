import React from "react";
import Color from "../HOC/Color";
import './Home.scss'
import { connect } from "react-redux";


class Home extends React.Component {

    handleDeleteTitle = (user) => {
        console.log('Check user delete', user)
        this.props.deleteUserRedux(user)
    }
    handleAddTitle = () => {
        let title = { id: Math.floor(Math.random() * 1000), name: 'nothing more' }
        this.props.addUserRedux()
    }
    render() {
        let ListTitle = this.props.dataRedux
        console.log('>>>check props:', this.props.dataRedux)
        return (
            <>
                <div> WELCOME TO DT_19's PROJECT

                    <div className="Home-content">
                        {ListTitle && ListTitle.length > 0 ?
                            ListTitle.map((item, index) => {
                                return (
                                    <div key={item.id}>
                                        {index + 1}. {item.name} <span onClick={() => this.handleDeleteTitle(item)}>x</span>
                                    </div>
                                )
                            })
                            : {}
                        }
                    </div>
                </div>
                &nbsp;<button type='button' onClick={() => this.handleAddTitle()}>Add</button>

            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dataRedux: state.titles
    }
}

const mapDispatchtoProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => dispatch({ type: 'DELETE_USER', payload: userDelete }),
        addUserRedux: () => dispatch({ type: 'CREAT_USER' }),

    }
}
export default connect(mapStateToProps, mapDispatchtoProps)(Color(Home));