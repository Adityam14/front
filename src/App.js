
import './App.css';
import ParticlesComponent from "./components/Particles";

function App() {
    let logo;
    let linkedin;
    return (
        <div className="App">
            <div className="logo-linkedin-container">
                <div className="logo-container">
                    <div className="logo">
                        <img src={logo} alt="Company Logo"/>
                    </div>
                </div>
                <div className="linkedin-container">
                    <a href="https://www.linkedin.com/company/your-company-name/" target="_blank"
                       rel="noopener noreferrer">
                        <div className="linkedin">
                            <img src={linkedin} alt="LinkedIn"/>
                        </div>
                    </a>
                </div>
            </div>
            <ParticlesComponent id="particles"/>
            <div className="coming-soon-container">
                <h1 className="coming-soon-text">Coming Soon</h1>
                <button className="join-us-button">Join Us</button>
                <a href="https://www.example.com" className="link">
                </a>
            </div>
        </div>
    );
}

export default App;
