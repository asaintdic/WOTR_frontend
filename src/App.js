import React from 'react';
import Navbar from './components/Navbar';
import WorkoutsContainer from './containers/WorkoutsContainer';


class App extends React.Component {
  
  // App is the mom, she is the parent component.we imported all of the neccessary files for the app, then we create a class method, then we render everythiing that we want to show on the screen and returning it. we're importing it and writing it out.


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
// we export it so we can import it into index