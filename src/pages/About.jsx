import React from 'react';
import about from "./photos/About.png";


function About() {
  return (
    <div className='flex justify-center h-screen p-4' id='about'>
      <div className='w-[35%] h-[4rem]'><img src={about}/></div>
      
      <div className='w-[50%] h-screen flex justify-center pt-10' id='box-about'>
          <div >
            <div className='headisc mb-20'><h3 className='text-lg '>About</h3></div>
            <div className='shadow hover:shadow-2xl p-4 border rounded-lg'>
              <p className='flex items-center  text-left font-medium  indent-8' id='desc'>
                I have over 3 years of experience as a software engineer and have worked at both startups and large companies.
                While i'm a proficient fullstack developer, my expertice is in building highly scalable backend services and also with much proficiency in the client-side i build using react as my major frontend technology.
              </p>
            </div>
          </div>
      </div>
      
    </div>
  )
}

export default About