export const deleteExercise = (exerciseId) => {
    
    return (dispatch) => {
        return fetch(`http://localhost:3000/exercises/${exerciseId}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(workout => dispatch({type: 'DELETE_EXERCISE', payload: workout}))
    }
}