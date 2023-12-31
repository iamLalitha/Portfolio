import React from 'react'
import home from '../home.jpg'
function Home() {
  return (
    <div
    className='card w-75 mh-100 shadow p-3 mb-5 bg-body rounded'
    style={{ boxShadow: '0px 0px 10px #e9bfc8' }} // Add shadow color
  >
    <div className='card-body'>
      <div className='row'>
        <div className='col-md-6'>
          <div className='fade-in-text'>
            <h1 className='card-title'>Hey there! </h1>
            <h1>
              <span style={{ color: '#6b85db' }}>I'm lalitha,</span> a developer
              based in India
            </h1>
          </div>
          <p>
            <span style={{fontSize:'18px', fontWeight:'bold', color:'#6b85db'}}>I'm a MERN Stack & Frontend Developer. </span>
            I'm passionate about staying on the cutting edge of technology and tools.
            I thrive on tackling intricate problems and finding innovative solutions. 
            With a focus on sustainability and scalability, you can count on me to contribute to your company's success and help achieve its goals.
          </p>
          <div className='mt-4'>
            <a
              href='https://www.linkedin.com/in/lalithambiga-r-9b55941a2/'
              className='btn btn-dark me-3'
              style={{ backgroundColor: '#6b85db' }}
              target='_blank'
              rel='noreferrer'
            >
              View LinkedIn
            </a>
            <a
              href='https://github.com/iamLalitha'
              className='btn btn-dark'
              style={{ backgroundColor: '#6b85db' }}
              target='_blank'
              rel='noreferrer'
            >
              View GitHub
            </a>
            &nbsp;   &nbsp;    &nbsp;
              <a
                href='https://drive.google.com/file/d/1A4T5mS0iOeXAGifyCeYmMvOA1G8DyqDg/view?usp=sharing' 
                target='_blank' 
                className='btn btn-dark'
                style={{ backgroundColor: '#6b85db' }} 
                rel='noreferrer'
              >
                Resume
              </a>
          </div>
        </div>
        <div className='col-md-6'>
          <img
            src={home}
            alt='Your'
            className='img-fluid'
          />
        </div>
      </div>
    </div>
  </div>
);
}

export default Home