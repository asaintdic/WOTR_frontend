import React from 'react';
import {connect} from 'react-redux';

import Navbar from './components/Navbar';
import WorkoutsContainer from './containers/WorkoutsContainer'


class App extends React.Component {
  


  render() {
    return (
      <div className="App">
        <Navbar />
        <WorkoutsContainer/>
      </div>
  );
}
}


export default App;
