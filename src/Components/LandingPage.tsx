import { Link } from "react-router-dom";

import '../styles/landingPage.css'


const LandingPage = () => {
    return (
        <div className="landing-page">
            <div className="landing-page-content">
                <h1>Welcome to To-Do-Task-App</h1>
              <Link to='app'><h4>Get IN</h4></Link>
            </div>
        </div>
    )
}
export default LandingPage;