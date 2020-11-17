import React from 'react'
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'
import {fetchExercises} from '../actions/fetchExercises'
import Exercise from '../components/Exercise'
import Exercises from '../components/Exercises'
import ExerciseInput from '../components/ExerciseInput'



class ExercisesContainer extends React.Component {

    componentDidMount() {
      this.props.fetchExercises()

    }

    render() {
        return(
            <div>
            <Route path='/exercises/new' component={ExerciseInput} /><br></br>
            <Route path='/exercises/:id' render={(routerProps) => <Exercise {...routerProps} exercises={this.props.exercises}/>}/>
            <Route exact path='/exercises' render={(routerProps) => <Exercises {...routerProps} exercises={this.props.exercises}/>}/>
           
            </div>

        )
    }
}

const mapStateToProps = state => {
  return {
    exercises: state.exercises
  }
}

export default connect(mapStateToProps, {fetchExercises})(ExercisesContainer)