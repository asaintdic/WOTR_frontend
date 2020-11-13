import React from 'react'
import {connect} from 'react-redux'

import {fetchExercises} from '../actions/fetchExercises'
import Exercises from '../components/Exercises'
import ExerciseInput from '../components/ExerciseInput'



class ExercisesContainer extends React.Component {

    componentDidMount() {
      this.props.fetchExercises()

    }

    render() {
        return(
            <div>
            <ExerciseInput/>
            <Exercises exercises={this.props.exercises}/>
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