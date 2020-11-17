import React from 'react'
import {connect} from 'react-redux'
import {addExercise} from '../actions/addExercise'


class ExerciseInput extends React.Component {

    state = {
            category: '', 
            exercise_name: '', 
            equipment: '', 
            reps: ''
            
        }

        handleChange = (event) => {
          this.setState({
            [event.target.name]: event.target.value
          })
        }

        handleSubmit = (event) => {
            event.preventDefault()
            this.props.addExercise(this.state)
            this.setState({
                category: '', 
                exercise_name: '', 
                equipment: '', 
                reps: ''
            })
        }
    
        render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <label> Body Part: </label>
                <input type="text" placeholder="Body Part" value={this.state.category} name="category" onChange={this.handleChange}/><br/>
                <label> Exercise Name: </label>
                <input type="text" placeholder="Exercise" value={this.state.exercise_name} name="exercise_name" onChange={this.handleChange} /><br/>
                <label> Equipment Used: </label>
                <input type="text" placeholder="Equipment" value={this.state.equipment} name="equipment" onChange={this.handleChange} /><br/>
                <label> Reps: </label>
                <input type="text" placeholder="Reps" value={this.state.reps} name="reps" onChange={this.handleChange} /><br/>
                <input type='submit' />
                </form>
            </div>
        )
    }

}

export default connect(null, {addExercise})(ExerciseInput)