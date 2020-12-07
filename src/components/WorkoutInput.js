import React from 'react'
import {connect} from 'react-redux'
import {addWorkout} from '../actions/addWorkout'
import {Redirect} from 'react-router-dom'
import {Label, StyledForm, StyledFormWrapper, StyledInput} from './FormComponents'

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
            <StyledFormWrapper>
                <StyledForm>
                    <form onSubmit={this.handleSubmit}>
                        <Label> Create New Workout: </Label>
                            <StyledInput type="text" placeholder="Title" value={this.state.title} name="title" onChange={this.handleChange}/><br/>
                        <Label> Note: </Label>
                            <StyledInput type="text" placeholder="Note" value={this.state.note} name="note" onChange={this.handleChange} /><br/>
                        <input type='submit' />
                    </form>
                </StyledForm>
            </StyledFormWrapper>
        </div>

       
        )
    }
}

export default connect(null, {addWorkout}) (WorkoutInput)