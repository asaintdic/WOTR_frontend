import React from 'react';
import WorkoutImage from '../WorkoutImage.png';
import styled from 'styled-components'



const Home = () => {
  return (
     <div className="hero-image">
        {/* <img src={WorkoutImage} alt='WorkoutImage' className='center'/> */}
            <div className="hero-text">
               <h1 style="font-size:50px">Designed With You In Mind</h1>
               <h3>Workout on the Run</h3>
               <button>Start Building</button>
            </div>
    </div>
  );
}
export default Home

