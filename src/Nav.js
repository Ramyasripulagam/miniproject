import "./Nav.css";
import { faSignInAlt, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Nav(){
    return(
    <div>
        <nav>
          <div className="image">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBc01kPmgxpQwhWfr2wqmJkDUPe3TSNI97xg&s"
              alt="LOGO"
            ></img>
          </div>
          <div className="right-nav">
            <Link to="/loginandsignup" className="links">
              <FontAwesomeIcon
                icon={faSignInAlt}
                style={{ color: "white", marginRight: "8px" }}
              />
              Login / Signup
              <FontAwesomeIcon
                icon={faUserPlus}
                style={{ color: "white", marginLeft: "8px" }}
              />
            </Link>
          </div>
        </nav>
    </div>
    )
}
export default Nav;