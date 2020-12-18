import React from 'react'
import {connect} from 'react-redux'
import {fetchWorkouts} from '../actions/fetchWorkouts'
import {Route, Switch} from 'react-router-dom'
import Workout from '../components/Workout'
import Workouts from '../components/Workouts'
import WorkoutInput from '../components/WorkoutInput'
import Home from '../components/Home'


class WorkoutsContainer extends React.Component {

    componentDidMount() {
      
        this.props.fetchWorkouts()
      
      }

    render() {
        return(
            <div>
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path='/workouts/new' component={WorkoutInput} />
                <Route path='/workouts/:id' render={(routerProps) => <Workout {...routerProps} workouts={this.props.workouts}/>}/>
                <Route path='/workouts' render={(routerProps) => <Workouts {...routerProps} workouts={this.props.workouts}/>}/>
                
              </Switch>
           </div>
        )
    }
}

const mapStateToProps = state => {
  
    return {
      workouts: state.workouts
      
    }
  }
export default connect(mapStateToProps, {fetchWorkouts}) (WorkoutsContainer)
