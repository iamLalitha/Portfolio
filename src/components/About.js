import React from 'react'
import PHOTO from '../PHOTO.jpeg';
import './About.css'

function About() {

  function scrollDownTo(elementId) {
    const element = document.getElementById(elementId);
  
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  return (
   
    <div className='about-container'>
    <div className='card w-75 mh-100 shadow p-3 mb-5 bg-body rounded' >
        <div className='card-body'>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img src={PHOTO} className= "rounded float-end  shadow p-3 mb-5 bg-body rounded"
        style={{ width: '33%', margin: '0 auto' }} alt="Profile"/>
        </div>
        <div className='fade-in-text'>
        <h1 className='card-title mobile ' style={{color:"#6b85db"}}>About me </h1>
        </div>
        &nbsp;

            <p style={{fontSize:'17px'}}>
            I'm a recent engineering grad with a passion for web development, proficient in the MERN stack. Eager to contribute my skills, I thrive in crafting captivating web experiences. I love building tools that are user-friendly, simple and delightful. Beyond code, I'm an adventurer seeking inspiration everywhere. Let's connect and create digital wonders together! 
        </p>
        &nbsp;

        <p><span style={{color:"#6b85db", fontSize:'20px'}}>Professional Skills</span></p>
        <li >Problem Solving</li>
        <li>Collaborative</li>
        <li>Adaptability</li>
        <li>Time Management</li>
       
    </div>
    </div>


    <div className='scroll-down-arrow arrow-right' onClick={() => scrollDownTo('educational-background')}>
       <i className='fa fa-chevron-down'></i>
    </div>


{/* creating another card for educational background */}
      <div className='card w-75 mh-100 shadow p-3 mb-5 bg-body rounded' id='educational-background'>
      <div className='card-body'>
      <div className='fade-in-text'>
        <h1 className='card-title mobile ' style={{color:"#6b85db"}}> Education </h1>
      </div>
       
      <div>
        <p><span style={{fontSize:"19px", fontWeight:'bold'}}>Intern at GUVI Geek Network (Mar 2023 - Present)</span></p>
        <p><span style={{fontSize:"15px",fontWeight:'bold'}}> -Chennai(IITM Research Park)</span></p>
        <p>
          <li>Contributed to a MERN-based project, demonstrating proficiency in modern web development technologies and creating dynamic, responsive web applications. </li>
        </p>
        <p><a
              href='https://www.guvi.in/verify-certificate?id=eg6fFt2Kr4390414J2'
              className='btn btn-dark'
              style={{ backgroundColor: '#6b85db' }}
            >
              View Certificate
            </a></p>
        
      </div>

      <div>
        <p><span style={{fontSize:"19px", fontWeight:'bold'}}>Bachelor of Engineering (2019-2023)</span></p>
        <p><span style={{fontSize:"15px",fontWeight:'bold'}}> -Dr. NGP Institute of Technology, Coimbatore.</span></p>
        <p>
          <li>Graduated with an 9.1 CGPA</li>
        </p>
      </div>

      <div>
        <p><span style={{fontSize:"19px", fontWeight:'bold'}}>HSC (2016-2017)</span></p>
        <p><span style={{fontSize:"15px",fontWeight:'bold'}}> -R G Matric higher secondary School, Udumalpet.</span></p>
        <p>
          <li>Graduated with 88%</li>
        </p>
      </div>

        </div>
      </div>

  </div>
 
  )
}

export default About