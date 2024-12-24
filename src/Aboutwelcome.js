import "./Aboutwelcome.css";

function Aboutwelcome(){
    return(
        //  About Us Section 
        <div className="about-us">
            <div className="design">
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUfGseyUeFbrqnsfw69fdx1OjgP5YiU226hg&s"
                alt="Design"
            ></img>
            </div>
            <div className="end-design">
            <img
                src="https://viralfission.s3.ap-south-1.amazonaws.com/static/assets/img/mockups/mockup3.png"
                alt="End Design"
            ></img>
            </div>
            <div className="about-body">
                <div className="about">
                <h1>
                    <span className="span1">ABOUT</span> <span className="span2">US</span>
                </h1>
                <p>
                    Cancer Detect is a health-tech platform dedicated to bridging the
                    gap between advanced cancer detection technologies and the
                    individuals who need them most, through early detection and
                    personalized healthcare solutions.
                    <br />
                    <br />
                    Born from the shared experiences of those impacted by cancer, our
                    growth is fueled by the passion of healthcare professionals,
                    researchers, and innovators coming together to make a difference.
                    <br />
                    <br />
                    <span>
                    We focus our efforts on empowering individuals with the tools for
                    early cancer detection, while partnering with healthcare providers
                    and tech companies to deliver innovative solutions that simplify
                    cancer care and improve outcomes for all.</span>
                </p>
                </div>
            </div>
        </div>
    )
}

export default Aboutwelcome;