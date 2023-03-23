import React from 'react';
import about from "./photos/About.png";


function About() {
  return (
    <div className='flex justify-between align-center h-screen' id='about'>
      <div className='w-[50%] h-[6rem]'><img src={about}/></div>
      <div>
          <div>
              <p>
                  I have over 5 years of experience as a software engineer and have worked at both startups and large companies.
                  While i'm a proficient fullstack developer, my expertice is in building highly scalable backend services and also with much proficiency in the client-side i build using react as my major frontend technology.
              </p>
          </div>
          <div><img/></div>
      </div>
    </div>
  )
}

export default About