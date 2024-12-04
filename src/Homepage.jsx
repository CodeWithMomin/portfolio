import React from 'react'
import Header from './Header'

const Homepage = () => {
  return (
    <div><Header/>
    <div className="infoContainer">
    <div className='one'>
      <p>I'M <strong> MOMIN ZAHOOR</strong></p>
      
      <p>MERN STACK Developer</p>
      <div className="btndiv">
        <button>Contact Me</button>
      </div>
    </div>
    <div className='two'>
      <div> 
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <i className="fa fa-facebook"></i> 
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <i className="fa fa-twitter"></i> 
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <i className="fa fa-instagram"></i> 
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <i className="fa fa-linkedin"></i> 
      </a>
    </div>
    </div>
    </div>
      <div className="aboutcontainer" id='abt'>
        <p className='heading'>About</p>
        <p>I am a passionate MERN stack developer with expertise in building full-stack web applications. With proficiency in MongoDB, Express.js, React.js, and Node.js, I specialize in creating <span>efficient, scalable, and user-centric</span> solutions. I thrive on solving complex problems, integrating front-end and back-end seamlessly, and delivering high-quality applications tailored to user needs. With a strong foundation in responsive design, API development, and secure authentication, I aim to create robust and intuitive platforms that enhance user experience. Constantly driven by a desire to innovate, I stay updated with the latest trends and technologies in web development to ensure my work remains cutting-edge. Let's connect and bring innovative ideas to life!</p>
      </div>
<div className="skillscontainer">
  <h3>My Skills</h3>
  <div className="box">
    <div className="layer1">
      <div>
        <div className="imgdiv">
          <img src="./src/icons/html-5.png" className="htmlimg" alt="" width="100%" height="100%" />
          <span>HTML</span>
        </div>
      </div>
      <div>
        <div className="imgdiv">
          <img src="./src/icons/css-3.png" className="htmlimg" alt="" width="100%" height="100%" />
          <span>CSS</span>
        </div>
      </div>
      <div>
        <div className="imgdiv">
          <img src="./src/icons/java-script.png" className="htmlimg" alt="" width="100%" height="100%" />
          <span>JavaScript</span>
        </div>
      </div>
      <div>
        <div className="imgdiv">
          <img src="./src/icons/atom.png" className="htmlimg" alt="" width="100%" height="100%" />
          <span>React</span>
        </div>
      </div>
    </div>
    <div className="layer1">
      <div>
        <div className="imgdiv">
          <img src="src/icons/icons8-tailwind-css-48.png" className="htmlimg" alt="" width="100%" height="100%" />
          <span>Tailwind</span>
        </div>
      </div>
      <div>
        <div className="imgdiv">
          <img src="src/icons/node-js.png" className="htmlimg" alt="" width="100%" height="100%" />
          <span>Node</span>
        </div>
      </div>
      <div>
        <div className="imgdiv">
          <img src="src/icons/Express.png" className="htmlimg" alt="" width="100%" height="100%" />
          <span>Express</span>
        </div>
      </div>
      <div>
        <div className="imgdiv">
          <img src="src/icons/social.png" className="htmlimg" alt="" width="100%" height="100%" />
          <span>Git</span>
        </div>
      </div>
    </div>
    <div className="layer1">
      <div>
        <div className="imgdiv">
          <img src="src/icons/icons8-mongo-db-48.png" className="htmlimg" alt="" width="100%" height="100%" />
          <span>Mongo DB</span>
        </div>
      </div>
      <div>
        <div className="imgdiv">
          <img src="src/icons/Postman.png" className="htmlimg" alt="" width="100%" height="100%" />
          <span>Postman</span>
        </div>
      </div>
    </div>
  </div>
 
 </div>
 <div className="expcontainer">
    <h3>Projects</h3>
    <div className="boxproject">
      <div className="player1">
        <div className="projectdiv">
        <div className="imgdiv">
          <img src="https://cdn-icons-png.flaticon.com/128/18477/18477249.png" className="htmlimg" alt="" width="100%" height="100%" />
          <a href="https://github.com/CodeWithMomin/Birju-AI">ChatBot</a>
        </div>
        </div>
        <div className="projectdiv">
        <div className="imgdiv">
          <img src="src/icons/note-sticky-solid (1) (2).svg" className="htmlimg" alt="" width="100%" height="100%" />
          <a href="#">Educational WebSIte</a>
        </div>
        </div>
        <div className="projectdiv">
          <div className="imgdiv">
          <img src="src/icons/newspaper-solid.svg" className="htmlimg" alt="" width="100%" height="100%" />
          <a href="https://github.com/CodeWithMomin/QuickRead">News WebApp</a>
          </div>
        </div>
      </div>
      <div className="player1">
        <div className="projectdiv">
        <div className="imgdiv">
          <img src="src/icons/cloud-solid.svg" className="htmlimg" alt="" width="100%" height="100%" />
         <a href="https://github.com/CodeWithMomin/WeatherApp">Weather App</a>
        </div>
        </div>
        
      </div>
    </div>
  </div>
</div>
  )
}

export default Homepage