import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaPills} from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FaUserMd, FaHeart, FaBrain, FaLungs, FaBone, FaFemale, FaSun, FaTint } from 'react-icons/fa';
import "./welcomepage.css";


function Welcomepage(){
    const [isArrowVisible, setIsArrowVisible] = useState(true);
    useEffect(() => {
        const handleScroll = () => {
            // Check if the scroll position is greater than 100px from the top
            if (window.scrollY > 100) {
                setIsArrowVisible(false);
            } else {
                setIsArrowVisible(true);
            }
        };

        // Add the scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToSection = () => {
        const aboutSection = document.querySelector(".about-us");
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: "smooth" }); 
            setIsArrowVisible(false); // Hide the arrow after scrolling
        }
    };
    return(
        <div className="main">

            <div class="background">
                {/* navigation bar */}
                <nav>
                    <div className="image"><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBc01kPmgxpQwhWfr2wqmJkDUPe3TSNI97xg&s' alt="LOGO" ></img></div>
                    <div className="right-nav">
                        <Link to="/loginandsignup" className="links">
                            <FontAwesomeIcon icon={faSignInAlt} style={{ color: 'white', marginRight: '8px' }} />
                            Login  /  Signup
                            <FontAwesomeIcon icon={faUserPlus} style={{ color: 'white', marginLeft: '8px' }} />
                        </Link>
                    </div>
                </nav>

                <div className="matter">
                    <h1>
                    <span className="span-txt">DETECT EARLY</span> 
                    <span className="span">SAVE LIVES</span> <br />
                    <span className="span-txt">ACT BEFORE</span>
                    <span className="span">IT'S LATE</span>
                    </h1>

                </div>
                {/* Down Arrow (conditionally rendered) */}
                {isArrowVisible && (
                    <div className="bottom-arrow" onClick={scrollToSection}>
                        <FaChevronDown size={30} />
                    </div>
                )}

            </div>

            <div className="about-us">
                <div className="design">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUfGseyUeFbrqnsfw69fdx1OjgP5YiU226hg&s" alt='image'></img>
                </div>
                <div className="end-design">
                    <img src="https://viralfission.s3.ap-south-1.amazonaws.com/static/assets/img/mockups/mockup3.png" alt="image"></img>
                </div>
                <div className="about">
                    <h1><span className="span1">ABOUT  </span> <span className="span2">US</span></h1>
                    <p>Cancer Detect is a health-tech platform dedicated to bridging the gap between advanced cancer detection technologies and the individuals who need them most, through early detection and personalized healthcare solutions.<br/><br/>

                            Born from the shared experiences of those impacted by cancer, our growth is fueled by the passion of healthcare professionals, researchers, and innovators coming together to make a difference.<br/><br/>

                            We focus our efforts on empowering individuals with the tools for early cancer detection, while partnering with healthcare providers and tech companies to deliver innovative solutions that simplify cancer care and improve outcomes for all.</p>
                </div>
            </div>


            <div className="cancers-types">
                <h1 className="heading">CAN<span className="cancer-span">CERS</span></h1>
                <div className="circle-con">
                <div className="con1">
                        <h1><FaUserMd size={40} /></h1>
                    </div>
                    <div className="con2">
                        <h1><FaHeart size={40}/></h1>
                    </div>
                    <div className="con3">
                        <h1><FaBrain size={40} />
                        </h1>
                    </div>
                    <div className="con4">
                        <h1> <FaLungs size={40} />
                        </h1>
                    </div>
                    <div className="con5">
                        <h1> <FaFemale size={40}  />
                        </h1>
                    </div>
                    <div className="con6">
                        <h1><FaSun size={40} />
                        </h1>
                    </div>
                    <div className="con7">
                        <h1> <FaTint size={40} />
                        </h1>
                    </div>
                </div>
                
            </div>
    
            <footer className="footer">
                <p className="footer-text">
                &copy; {new Date().getFullYear()} CancerDetect | Dedicated to Better Healthcare
                </p>
            </footer> 
                    

        </div>
    )
}
export default Welcomepage;