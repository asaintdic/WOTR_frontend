import React from 'react';
import {connect} from 'react-redux';
import {fetchExercises} from './actions/fetchExercises'


class App extends React.Component {
  
  componentDidMount() {
    this.props.fetchExercises({type: 'FETCH_EXERCISES', payload: {name: "Squat"}})
    // fetch('http://localhost:3000/exercises')
    // .then(res => res.json())
    // .then(data => console.log(data))
  }

  render() {
    return (
      <div className="App">
        app
      </div>
  );
}
}
// const mapStateToProps = (state) => {
//   return {
//     exercises: state.exercises
//   }
// }

export default connect(null, {fetchExercises}) (App);
