import React from 'react'
import {Link} from 'react-router-dom'
// import {connect} from 'react-redux'
// import {deleteWorkout} from '../actions/deleteWorkout'

class  WorkoutSearch extends React.Component {
    
    state = {
        text: ''
    }

    handleEvent =(event) => {
    
      
      this.setState({
          text: event.target.value
      })
       
    
    }



    render() {
        let filteredList = this.props.workouts.filter((workout) => {
            return workout.title.includes(this.state.text)
        })
        return (
            <div>
                <form>
                    <input type="text" value={this.state.text}  onChange={this.handleEvent}/>
                    {filteredList.map(workout =>
                    <div key={workout.id}>
                        <Link to={`/workouts/${workout.id}`}> {workout.title}</Link>
                    </div>)}
                </form>
            </div>
        )
    }
}

export default WorkoutSearch