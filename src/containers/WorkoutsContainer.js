import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import {fetchWorkouts} from '../actions/fetchWorkouts'
import Workout from '../components/Workout'
import Workouts from '../components/Workouts'
import WorkoutInput from '../components/WorkoutInput'


class WorkoutsContainer extends React.Component {

    componentDidMount() {
      // react function that is called after a component is mounted and added to the page, if you need to request data remotely this is a good place to make that call
        this.props.fetchWorkouts()
  
      }
    render() {
        return(
            <div>
              <Switch>
                {/* switch allows different routes to render separately. If switch isnt there, all the components render together */}
                <Route path='/workouts/new' component={WorkoutInput} />
                <Route path='/workouts/:id' render={(routerProps) => <Workout {...routerProps} workouts={this.props.workouts}/>}/>
                <Route path='/workouts' render={(routerProps) => <Workouts {...routerProps} workouts={this.props.workouts}/>}/>
                {/* routerProps are used to keep info that helps you navigate through the site. like sessions */}
              </Switch>
           </div>
        )
    }
}

const mapStateToProps = state => {
  // turn information into a usable object
    return {
      workouts: state.workouts
      
    }
  }
export default connect(mapStateToProps, {fetchWorkouts}) (WorkoutsContainer)
// connect connects a React component to a Redux store, it provides the component wit data from the store and functiins to dispatch actions to the store