export default function exerciseReducer(state = {exercises: []}, action) {

    switch (action.type) {
      case 'FETCH_EXERCISES':
          return {exercises: action.payload}
      default:
              return state
              
        
    }
}

