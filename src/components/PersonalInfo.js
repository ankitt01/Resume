import React, {useState, useEffect} from 'react';
import './styles/PersonalInfo.scss'
import img from '../img/my-avatar.png'
function PersonalInfo() {
    const [clicked,setClicked] = useState(false);
    function toggleContacts(){
        if(clicked === false) {
            setClicked(true);
        }
        else {
            setClicked(false);
        }
    }

    useEffect(() => {
        function handleResize() {
          if (window.innerWidth > 1000) {
            setClicked(true);
          } else {
            setClicked(false);
          }
        }
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);
  return (
    <div className='personal-info'>
        <div className="detail">
            <div className="image-container">
                <img src={img} alt="" />
            </div>
            <div>
                <div className="desc-container">
                    <h2 className="name">Ankit Singh Rawat</h2>
                    <p className="desc">Web Developer</p>
                </div>
            </div>
        </div>
        
        <div className="down-arrow" onClick={toggleContacts}>
            <i className="fas fa-chevron-down"></i>
        </div>

        <div className='contacts-container'>
            {clicked && <div className={`contacts`}>
                <div className="tiles">
                    <div className="contact">
                        <div className="icon">
                            <i className="far fa-envelope"></i>
                        </div>
                        <div>
                            <h3 className="label">EMAIL</h3>
                            <p className='value'>ankitrawat0102@gmail.com</p>
                        </div>
                    </div>
                    <div className="contact">
                        <div className="icon">
                            <i className="fas fa-phone-alt"></i>
                        </div>
                        <div>
                            <h3 className="label">PHONE</h3>
                            <p className='value'>+91 8077904377</p>
                        </div>
                    </div>
                    <div className="contact">
                        <div className="icon">
                            <i className="fas fa-map-marker-alt"></i>                
                        </div>
                        <div>
                            <h3 className="label">LOCATION</h3>
                            <p className='value'>Haridwar, Uttarakhand, India</p>
                        </div>
                    </div>
                </div>
                
                <div className="social-icons">
                <a target="_blank" href="https://www.linkedin.com/in/ankit-singh-rawat-7aa399190/"><i className="fa-brands fa-linkedin-in"></i></a>
                <a target="_blank" href="https://www.instagram.com/an.kitt_"><i className="fab fa-instagram"></i></a>
                <a target="_blank" href="https://github.com/ankitt01"><i className="fab fa-github"></i></a>
                </div>
            </div>}
            
        </div>

    </div>
  )
}

export default PersonalInfo;
