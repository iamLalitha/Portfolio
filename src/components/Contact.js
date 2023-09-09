import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { BsFillTelephoneFill} from "react-icons/bs";
import { GrMail} from "react-icons/gr";
import contact from '../contact.jpg';

function Contact () {
  const form = useRef();
  const [isEmailSent, setEmailSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7a26dpp', 'template_8284pkl', e.target, 'uq_F_y4Znk8LFRqwS')
      .then((result) => {
          console.log(result.text);
          setEmailSent(true);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="card w-75 mh-100 shadow p-3 mb-5 bg-body rounded">
      <div className="card-body">
        <div className='container'>
          <div className="row">
            <div className="col-md-6">
              <div className='fade-in-text'>
              <h4 className="card-title" style={{color:"#6b85db"}}>Contact me</h4>
              </div>
              <form ref={form} onSubmit={sendEmail}>
                <div className="mb-3">
                  <label htmlFor="name"  className="form-label">
                    Name
                  </label>
                  <input type="text" placeholder='Enter your name' className="form-control" id="name" name="name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder='Enter your email id'
                    className="form-control"
                    id="email"
                    name="email"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    placeholder='Type your message'
                    id="message"
                    name="message"
                    rows="4"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary"  style={{ backgroundColor: '#6b85db' }}>
                  Send
                </button>
              </form>
              {isEmailSent && (
                <div className="mt-3 text-success" >
                  Email sent successfully!
                </div>
              )}
            </div>
            <div className='col-md-6'>
              <img
                src={contact}
                alt='Your'
                className='img-fluid'
              />
              <div className="row mt-3">
            <div className="col-md-6">
              <div className='d-flex align-items-center mb-2'>
                <span>
                  <BsFillTelephoneFill className="phone" style={{ fontSize: '24px', color: '#6b85db' }}/>
                </span>
                <span> +91-7339477503</span>
              </div>
              <div className='d-flex align-items-center'>
                <span>
                  <GrMail className="email" style={{ fontSize: '24px', color: '#6b85db' }}/>
                </span>
                <span>lalithasans10@gmail.com</span>
              </div>
            </div>
          </div>
            </div>
          </div>

          
        </div>

      </div>
        {/* Footer */}
        <div className="text-center mt-4">
        <p>Made with 💜 by Lalitha</p>
      </div>
  
    </div>
  );
}
export default Contact;











// import React from 'react';
// import './Contact.css';
// import {AiFillLinkedin} from "react-icons/ai";
// import { BsFillTelephoneFill} from "react-icons/bs";
// import { GrMail} from "react-icons/gr";
// import { BsGithub } from 'react-icons/bs';
// import contact from '../contact.jpg';

// function Contact() {
//   return (
//     <div className='card w-75 mh-100 shadow p-3 mb-5 bg-body rounded' >
//         <div className='card-body'>
            
//         <div className='container'>
//           <div className='row'>
//             {/* Left Column for Contact Details */}
//             <div className='col-md-6'>



//             <div className='fade-in-text'>
//                 <h1 className='card-title mobile'>Get in touch</h1>
//             </div>

//             <div className='d-flex align-items-center mb-2'>
            
//                 <AiFillLinkedin 
//                 className='linkedin'  
//                 style={{ fontSize: '24px', color: '#6b85db' }}/>
//                 <a
//                  href="https://www.linkedin.com/in/lalitha-ramachandran-9b55941a2/"
//                  target="_blank"
//                  rel="noreferrer"
//                  className='contact-link'
//                  >
//                 Linkedin
//                 </a>
//             </div>
       
//             <div className='d-flex align-items-center mb-2'>
//                 <a
//                  href="https://github.com/iamLalitha"
//                 target="_blank"
//                 rel="noreferrer"
//                  >
//                 <BsGithub className="github" style={{ fontSize: '24px', color: '#6b85db' }} />
//                 </a>
//             </div>

//             <div className='d-flex align-items-center mb-2'>
//             <span>
//                 <BsFillTelephoneFill className="phone" style={{ fontSize: '24px', color: '#6b85db' }}/>
//             </span>
//             <span> +91-7339477503
//             </span>
//             </div>

//             <div className='d-flex align-items-center'>
//                 <span>
//                 <GrMail className="email" style={{ fontSize: '24px', color: '#6b85db' }}/>
//                 </span>
//                 <span>lalithasans10@gmail.com
//                 </span>   
//            </div>

           
//         </div>

//         <div className='col-md-6'>
             
//               <img
//                 src={contact}
//                 alt='Your'
//                 className='img-fluid'
//               />
//             </div>


//     </div>
//     </div>
//     </div>
//     </div>

//   )
// }

// export default Contact