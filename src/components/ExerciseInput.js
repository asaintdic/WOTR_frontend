import React from 'react'
import {connect} from 'react-redux'
import {addExercise} from '../actions/addExercise'
import {StyledButton, Label, StyledForm, StyledFormWrapper, StyledInput} from './FormComponents'


class ExerciseInput extends React.Component {

    state = {
            category: 'Legs', 
            exercise_name: '', 
            equipment: 'Body Weight', 
            reps: '5'
            
        }

        handleChange = (event) => {
          this.setState({
            [event.target.name]: event.target.value
          })
        }

        handleSubmit = (event) => {
            event.preventDefault()
            this.props.addExercise(this.state, this.props.workout.id)
            
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
                        <h4> Add New Exercise To Workout</h4>
                        <label> Category</label>
                            <select value={this.state.category} name="category" onChange={this.handleChange}>
                            <option>Legs</option>
                                <option>Arms</option>
                                <option>Back</option>
                                <option>Shoulders</option>
                                <option>Chest</option>
                                <option>Mobility</option>
                                <option>Cardio</option>
                            </select>
                        <label> Exercise Name: </label>
                            <input type="text" value={this.state.exercise_name} name="exercise_name" onChange={this.handleChange}/>
                        <label> Reps: </label>
                            <select value={this.state.reps} name="reps" onChange={this.handleChange}>
                            <option>5</option>
                                <option>8</option>
                                <option>12</option>
                                <option>15 +</option>
                            </select>
                        <label> Equipment: </label>
                            <select value={this.state.equipment} name="equipment" onChange={this.handleChange}>
                            <option>Body Weight</option>
                                <option>Barbell</option>
                                <option>Machine</option>
                                <option>Cable</option>
                            </select>
                            <input type="submit"/>
                    
                    </form>
            </div>
        )
    }

}

export default connect(null, {addExercise})(ExerciseInput)
