export const deleteExercise = (exerciseId) => {
    
    return (dispatch) => {
        return fetch('http://localhost:3000/exercises', {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(res => dispatch({type: 'DELETE_EXERCISE', payload: exerciseId}))
    }
}