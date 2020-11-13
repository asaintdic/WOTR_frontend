import React from 'react';
import {connect} from 'react-redux';
import ExercisesContainer from './containers/ExercisesContainer'


class App extends React.Component {
  


  render() {
    return (
      <div className="App">
        <ExercisesContainer/>
      </div>
  );
}
}


export default App;
