import React from 'react';
import Navbar from './components/Navbar/Navbar.js';
import WorkoutsContainer from './containers/WorkoutsContainer';
import Home from './components/Home.js'
import { GlobalStyle } from "./components/FormComponents";

class App extends React.Component {
  
  

  render() {
    return (
      
      <div className="App">
        {/* <GlobalStyle/> */}
        <Navbar />
        <Home />
        {/* <WorkoutsContainer/> */}
      </div>
  );
}
}


export default App;
