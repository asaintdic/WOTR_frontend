import React from 'react'
import {connect} from 'react-redux'
import {addWorkout} from '../actions/addWorkout'
import {Redirect} from 'react-router-dom'

class WorkoutInput extends React.Component {

    state = {
        redirect: null,
        title: '', 
        note: '' 
        
        
    }

    handleChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value
      })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addWorkout(this.state)
        this.setState({
            redirect: '/workouts',
            title: '', 
            note: '' 
            
        })
    }
    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
          }
        return(
            <div>
            <form onSubmit={this.handleSubmit}>
            <label> Title: </label>
            <input type="text" placeholder="Title" value={this.state.title} name="title" onChange={this.handleChange}/><br/>
            <label> Note: </label>
            <input type="text" placeholder="Note" value={this.state.note} name="note" onChange={this.handleChange} /><br/>
            <input type='submit' />
            </form>
        </div>

       
        )
    }
}

export default connect(null, {addWorkout}) (WorkoutInput)