import React from 'react';
import {SiExpress, SiHtml5, SiJavascript,SiNetlify,SiMysql,SiPostman,SiRender} from "react-icons/si";
import {  DiMongodb,DiCss3 } from "react-icons/di"
import { FaAws, FaReact, FaNodeJs } from "react-icons/fa";
import { BsBootstrap } from "react-icons/bs";
import { VscGithub } from "react-icons/vsc";
import './Skills.css';
function Skills() {
  return (
    
    <div className='card w-75 mh-100 shadow p-3 mb-5 bg-body rounded' >
        <div className='card-body'>
        
        <div className='fade-in-text'>
        <h1 className='card-title mobile ' style={{color:"#6b85db"}}>Skills</h1>
        </div>
        <div className='content' >
        <div>
            <SiJavascript style={{ color: '#6b85db' }}/>
            <h5>Javascript</h5>
          </div>
        <div>
            <SiHtml5 style={{ color: '#6b85db' }} />
            <h5>HTML</h5>
          </div>
          <div>
            <DiCss3 style={{ color: '#6b85db' }}/>
            <h5>CSS</h5>
          </div>
        <div>
            <FaReact style={{ color: '#6b85db' }}/>
            <h5>React</h5>
          </div>
          <div>
            <FaNodeJs style={{ color: '#6b85db' }}/>
            <h5>Nodejs</h5>
          </div>
        <div>
            <BsBootstrap style={{ color: '#6b85db' }}/>
            <h5>Bootstrap</h5>
          </div>
        <div>
            <SiExpress style={{ color: '#6b85db' }}/>
            <h5>Expressjs</h5>
        </div>
        <div>
            <DiMongodb style={{ color: '#6b85db' }}/>
            <h5>MongoDB</h5>
        </div>
        <div>
            <SiMysql style={{ color: '#6b85db' }}/>
            <h5>MySql</h5>
          </div>
          <div>
            <VscGithub style={{ color: '#6b85db' }}/>
            <h5>Github</h5>
          </div>
          <div>
            <FaAws style={{ color: '#6b85db' }}/>
           <h5>AWS</h5>
          </div>
          <div>
            <SiNetlify style={{ color: '#6b85db' }}/>
            <h5>Netlify</h5>
          </div>
          <div>
            <SiPostman style={{ color: '#6b85db' }}/>
            <h5>Postman</h5>
          </div>
          <div>
            <SiRender style={{ color: '#6b85db' }}/>
            <h5>Render</h5>
          </div>
        </div>
    

    </div>
    </div>
    
  )
}

export default Skills