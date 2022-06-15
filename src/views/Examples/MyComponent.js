import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {

    state = {
        arrJobs: [
            { id: 'job1', title: 'Front_end', salary: '1000' },
            { id: 'job2', title: 'HR', salary: '400' },
            { id: 'job3', title: 'Tester', salary: '500' }
        ]
    }

    addNewJobs = (job) => {
        console.log('check job form parent ', job)
        this.setState(
            {
                arrJobs: [...this.state.arrJobs, job]
            }
        )
    }

    deleteJobs = (jobhere) => {
        let currentJobs = this.state.arrJobs;
        currentJobs = currentJobs.filter(item => item.id !== jobhere.id)
        this.setState({
            arrJobs: currentJobs
        })
    }


    render() {
        return (
            <>
                <AddComponent
                    addNewJobs={this.addNewJobs}
                />
                <ChildComponent
                    listJobs={this.state.arrJobs}
                    deleteJobs={this.deleteJobs}
                />

            </>
        )
    }
}

export default MyComponent;