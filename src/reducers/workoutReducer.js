export default function workoutReducer(state = {workouts: []}, action) {
    switch (action.type) {
      case 'FETCH_WORKOUTS':
         return {workouts: action.payload}
      case 'ADD_WORKOUT':
         //  debugger
         return {...state, workouts: [...state.workouts, action.payload]}
      case 'ADD_EXERCISE':
         let workouts = state.workouts.map(workout => {
            if (workout.id === action.payload.id) {
               return action.payload
            }else{
               return workout
            }
         })
            return {...state, workouts: workouts }
      // case 'DELETE_EXERCISE':
      //     let currentWorkouts = state.workouts.map(workout => {
      //       if (workout.id === action.payload.id) {
      //          return action.payload
      //       }else{
      //          return workout
      //       }
      //    })
      //       return {...state, workouts: currentWorkouts }
         // I want to delte the item then return the state with that partibular item deleted
        
      default:
         return state
              
        
    }
}