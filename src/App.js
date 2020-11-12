import React from 'react';

class App extends React.Component {
  componentDidMount() {
    fetch('http://localhost:3000/exercises')
    .then(res => res.json())
    .then(data => console.log(data))
  }
  render() {
    return (
      <div className="App">
        app
      </div>
  );
}
}
export default App;
