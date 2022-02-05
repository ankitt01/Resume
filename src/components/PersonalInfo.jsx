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
            <i class="fas fa-chevron-down"></i>
        </div>

        <div className='contacts-container'>
            {clicked && <div className={`contacts`}>
                <div className="tiles">
                    <div className="contact">
                        <div className="icon">
                            <i class="far fa-envelope"></i>
                        </div>
                        <div>
                            <h3 className="label">EMAIL</h3>
                            <p className='value'>ankitrawat0102@gmail.com</p>
                        </div>
                    </div>
                    <div className="contact">
                        <div className="icon">
                            <i class="fas fa-phone-alt"></i>
                        </div>
                        <div>
                            <h3 className="label">PHONE</h3>
                            <p className='value'>+91 8077904377</p>
                        </div>
                    </div>
                    <div className="contact">
                        <div className="icon">
                            <i class="fas fa-map-marker-alt"></i>                
                        </div>
                        <div>
                            <h3 className="label">LOCATION</h3>
                            <p className='value'>Haridwar, Uttarakhand, India</p>
                        </div>
                    </div>
                </div>
                
                <div className="social-icons">
                    <i class="fab fa-facebook-f"></i>
                    <i class="fab fa-instagram"></i>
                    <i class="fab fa-github"></i>
                </div>
            </div>}
            
        </div>

    </div>
  )
}

export default PersonalInfo;
