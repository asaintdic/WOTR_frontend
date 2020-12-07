import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import {fetchWorkouts} from '../actions/fetchWorkouts'
import Exercise from '../components/Exercise'
import Exercises from '../components/Exercises'
import ExerciseInput from '../components/ExerciseInput'
import WorkoutsContainer from '../containers/WorkoutsContainer'




class ExercisesContainer extends React.Component {

    // componentDidMount() {
    //   this.props.fetchWorkouts()

    // }

    render() {
      
        return(
            <div>
             <ExerciseInput workout={this.props.workout}/>
             <Exercises exercises={this.props.workout && this.props.workout}/>
                {/*<Switch>relationships.exercises.data
                    <Route path='/exercises/new' component={ExerciseInput} />
                    <Route path='/exercises/:id' render={(routerProps) => <Exercise {...routerProps} exercises={this.props.exercises}/>}/>
                    <Route path='/exercises' render={(routerProps) => <Exercises {...routerProps} exercises={this.props.exercises}/>}/>
                </Switch>*/}
                
            </div>

        )
    }
}

export default ExercisesContainer