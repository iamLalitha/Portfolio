import React from 'react';
import RecipeApp from '../RecipeApp.PNG';
import projecturl from '../projecturl.PNG';
import qrcodegenerator from '../qrcodegenerator.PNG';
import './Projects.css';

function Projects() {
  const projects = [
    {
      title: 'Kitchen Recipe Management',
      image: RecipeApp,
      description: 'I have crafted a MERN-based Recipe Management application, named RecipeFinder. This enables the users to discover, create, and save recipes seamlessly with its user-friendly interface. Elevating culinary exploration, it also offers personalized profile tracking. Experience culinary delight with my RecipeFinder.',
      liveUrl: 'https://animated-mandazi-ef27ca.netlify.app/',
      githubUrl: 'https://github.com/iamLalitha/Recipe-Management-frontend',
    },
    {
      title: 'ShortLinkr',
      image: projecturl, 
      description: 'I have developed a streamlined URL Shortener application using the MERN stack, named ShortLinkr. This innovative tool empowers users to effortlessly condense lengthy URLs into concise, shareable links. Enhance your online experience with ShortLinkr, the ultimate solution for efficient link management.',
      liveUrl: 'https://gilded-heliotrope-6bfcfd.netlify.app/',
      githubUrl: 'https://github.com/iamLalitha/Urlshortener-Frontend',
    },
    {
      title: 'QR Code Generator',
      image: qrcodegenerator, 
      description: 'I have developed a QR code generator which helps to create custom QR codes effortlessly with its user-friendly interface. Input your data, adjust dimensions and colors, select the output format, and download your QR code. A live preview ensures you get the desired result. Bootstrap-based design ensures a clean and responsive user interface. ',
      liveUrl: 'https://stellar-mousse-fa6f7f.netlify.app/',
      githubUrl: 'https://github.com/iamLalitha/QR-code-generator',
    },
  ];

  return (
    <div className='d-flex flex-wrap justify-content-center'>
      <div className='container'>
        <div className='fade-in-text'>
        <h2 className='center' style={{color:"#6b85db"}}>Recent Projects</h2>
        </div>
        <div className='row justify-content-center'>
          {projects.map((project, index) => (
            <div className='col-mb-3 mr-3'style={{ maxWidth: '400px' }} key={index}>

              <div className='card ' >
                <img src={project.image} className='card-img-top' alt={project.title} />
                <div className='card-body'>
                  <h5 className='card-title'>{project.title}</h5>
                  <p className='card-text'>{project.description}</p>
                  <div className='d-flex justify-content-between'>
                    <a href={project.liveUrl} className='btn btn-primary' style={{ backgroundColor: '#6b85db' }}  target='_blank'
                      rel='noreferrer' >
                      Live URL
                    </a>
                    <a href={project.githubUrl} className='btn btn-dark' style={{ backgroundColor: '#6b85db' }}  target='_blank'
                      rel='noreferrer' >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    
  );
}

export default Projects;
