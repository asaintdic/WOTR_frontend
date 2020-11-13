import React from 'react'


const Exercises = (props) => {

    
        return (
            <div>
               {props.exercises.map(exercise => 
               <li> {exercise.attributes.category} - {exercise.attributes.exercise_name}</li>
               )}
            </div>
        )
    

}

export default Exercises