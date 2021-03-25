import React from 'react';
import Navbar from './components/Navbar/Navbar.js';
import WorkoutsContainer from './containers/WorkoutsContainer';
import { GlobalStyle } from "./components/FormComponents";

class App extends React.Component {
  
  

  render() {
    return (
      
      <div className="App">
        {/* <GlobalStyle/> */}
        <Navbar />
        <WorkoutsContainer/>
      </div>
  );
}
}


export default App;
