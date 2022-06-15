import React from "react";

class ChildComponent extends React.Component {
    state = {
        jobState: false
    }

    handleShowHide = () => {
        this.setState(
            { jobState: !this.state.jobState }
        )

    }
    handleClickDelete = (item) => {
        this.props.deleteJobs(item)
    }

    render() {
        let listJobs = this.props.listJobs
        let { jobState } = this.state

        return (

            <>
                {jobState === false ?
                    <div>
                        <button onClick={() => this.handleShowHide()} >SHOW </button>
                    </div>
                    :
                    <>
                        <div className="job-list">
                            {
                                listJobs.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.title} - {item.salary}$ <></>
                                            <span onClick={() => this.handleClickDelete(item)}> x</span>
                                        </div>
                                    )
                                }
                                )
                            }
                        </div>
                        <div>
                            <button onClick={() => this.handleShowHide()} >HIDE</button>
                        </div>

                    </>
                }



            </>

        )
    }
}

export default ChildComponent;