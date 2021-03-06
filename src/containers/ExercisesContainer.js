import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import Exercises from '../components/Exercises'
import ExerciseInput from '../components/ExerciseInput'





class ExercisesContainer extends React.Component {

  
    render() {
      
        return(
            <div>
             <ExerciseInput workout={this.props.workout}/>
             <Exercises exercises={this.props.workout && this.props.workout}/>
            </div>

        )
    }
}

export default ExercisesContainer