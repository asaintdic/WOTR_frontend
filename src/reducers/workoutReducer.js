export default function workoutReducer(state = {workouts: []}, action) {

    switch (action.type) {
      case 'FETCH_WORKOUTS':
         return {workouts: action.payload}
      case 'ADD_WORKOUT':
         //  debugger
         return {...state, workouts: [...state.workouts, action.payload]}
      default:
         return state
              
        
    }
}