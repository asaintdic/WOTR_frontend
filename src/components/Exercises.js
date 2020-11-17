import React from 'react'
import Exercise from './Exercise'

const Exercises = (props) => {

    
        return (
            <div>
               {props.exercises.map(exercise => 
               <div key={exercise.id}><Exercise exercise={exercise}/></div>
               )}
            </div>
        )
    

}

export default Exercises