import React from 'react'
import Header from './Header'

const Homepage = () => {
  return (
    <div><Header/>
    <div className="infoContainer">
    <div className='one'>
      <p>I'M <strong> MOMIN ZAHOOR</strong></p>
      
      <p>MERN STACK Developer & ML Engineer</p>
      <div className="btndiv">
      <a href="#contact">  <button>Contact Me</button></a>
      </div>
    </div>
    <div className='two'>
      <div> 
      <a href="https://github.com/CodeWithMomin" target="_blank" rel="noopener noreferrer">
        <i className="fa fa-github"></i> 
      </a>
      <a href="https://x.com/_mominzahoor?s=21" target="_blank" rel="noopener noreferrer">
        <i className="fa fa-twitter"></i> 
      </a>
      <a href="https://instagram.com/_mominzahoor_" target="_blank" rel="noopener noreferrer">
        <i className="fa fa-instagram"></i> 
      </a>
      <a href="https://www.linkedin.com/in/momin-zahoor-502b97222?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
        <i className="fa fa-linkedin"></i> 
      </a>
    </div>
    </div>
    </div>
      <div className="aboutcontainer" id='abt'>
        <p className='heading'>About</p>
        <p>I am a Machine Learning Engineer and MERN Stack Developer with expertise in building intelligent, scalable, and user-centric web applications. Proficient in MongoDB, Express.js, React.js, Node.js, and machine learning, I seamlessly integrate AI-powered features into web solutions. Passionate about problem-solving, performance optimization, and secure authentication, I develop robust, intuitive, and future-ready applications while staying updated with the latest trends in AI and web development to drive innovation. </p>
      </div>
<div className="skillscontainer">
  <h3>My Skills</h3>
  <div className="box">
    <div className="layer1">
      <div>
        <div className="imgdiv">
          <img src="/icons/html-5.png" className="htmlimg" alt="" width="100%" height="100%" />
          <span>HTML</span>
        </div>
      </div>
      <div>
        <div className="imgdiv">
          <img src="/icons/css-3.png" className="htmlimg" alt="" width="100%" height="100%" />
          <span>CSS</span>
        </div>
      </div>
      <div>
        <div className="imgdiv">
          <img src="/icons/java-script.png" className="htmlimg" alt="" width="100%" height="100%" />
          <span>JavaScript</span>
        </div>
      </div>
      <div>
        <div className="imgdiv">
          <img src="/icons/atom.png" className="htmlimg" alt="" width="100%" height="100%" />
          <span>React</span>
        </div>
      </div>
    </div>
    <div className="layer1">
      <div>
        <div className="imgdiv">
          <img src="/icons/icons8-tailwind-css-48.png" className="htmlimg" alt="" width="100%" height="100%" />
          <span>Tailwind</span>
        </div>
      </div>
      <div>
        <div className="imgdiv">
          <img src="/icons/node-js.png" className="htmlimg" alt="" width="100%" height="100%" />
          <span>Node</span>
        </div>
      </div>
      <div>
        <div className="imgdiv">
          <img src="/icons/Express.png" className="htmlimg" alt="" width="100%" height="100%" />
          <span>Express</span>
        </div>
      </div>
      <div>
        <div className="imgdiv">
          <img src="/icons/social.png" className="htmlimg" alt="" width="100%" height="100%" />
          <span>Git</span>
        </div>
      </div>
    </div>
    <div className="layer1">
      <div>
        <div className="imgdiv">
          <img src="/icons/icons8-mongo-db-48.png" className="htmlimg" alt="" width="100%" height="100%" />
          <span>Mongo DB</span>
        </div>
      </div>
      <div>
        <div className="imgdiv">
          <img src="/icons/Postman.png" className="htmlimg" alt="" width="100%" height="100%" />
          <span>Postman</span>
        </div>
      </div>
      <div>
        <div className="imgdiv">
          <img src="https://pandas.pydata.org/static/img/pandas_white.svg" className="htmlimg" alt="" width="100%" height="100%" />
          <span>Pandas</span>
        </div>
      </div>
      <div>
        <div className="imgdiv">
          <img src="https://matplotlib.org/stable/_static/logo_dark.svg" className="htmlimg" alt="" width="100%" height="100%" />
          <span>Matplotlib</span>
        </div>
      </div>
      
    </div>

    <div className="layer1">
    <div>
        <div className="imgdiv">
          <img src="https://numpy.org/doc/_static/numpylogo.svg" className="htmlimg" alt="" width="100%" height="100%" />
          <span>NumPY</span>
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
          <img src="/icons/note-sticky-solid (1) (2).svg" className="htmlimg" alt="" width="100%" height="100%" />
          <a href="#">Educational WebSIte</a>
        </div>
        </div>
        <div className="projectdiv">
          <div className="imgdiv">
          <img src="/icons/newspaper-solid.svg" className="htmlimg" alt="" width="100%" height="100%" />
          <a href="https://github.com/CodeWithMomin/QuickRead">News WebApp</a>
          </div>
        </div>
      </div>
      <div className="player1">
        <div className="projectdiv">
        <div className="imgdiv">
          <img src="/icons/cloud-solid.svg" className="htmlimg" alt="" width="100%" height="100%" />
         <a href="https://github.com/CodeWithMomin/WeatherApp">Weather App</a>
        </div>
        </div>
        
      </div>
    </div>
  </div>

  <div style={{ borderTop: "3px solid rgb(255, 196, 0)", margin: "20px 0" }}></div>
 <div className="letsconnect" id='contact'>
  <span>"Thanks for Scrolling"</span>
 </div>




</div>
  )
}

export default Homepage