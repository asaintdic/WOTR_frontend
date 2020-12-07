import React from 'react';
import WorkoutImage from '../WorkoutImage.png';
import styled from 'styled-components'

const img = styled.div`
`
const Home = () => {
  return (
      <div>
      <img src={WorkoutImage} alt='WorkoutImage' className='center'/>
     </div>
  );
}
export default Home