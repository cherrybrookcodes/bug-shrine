import './styles/App.css';
import Daycalc from './components/welcometext';
import Mainicon from './assets/bug-main.png';
import { Link } from "react-router";
import Abouticon from './assets/bug-about.svg' ;
import Homeicon from './assets/bug-home.svg' ;
import Testingicon from './assets/bug-testing.svg' ;

const About= () => {
  return (
    <div className = "App">
             <div className = "navbar">
            <div><img src={Abouticon} className='navicon' /> </div>
            <div><img src={Homeicon} className='navicon' /> </div>
            <div><img src={Testingicon} className='navicon' /> </div>
            <div className='welcome1'><Link to="About">About</Link></div>
            <div className='welcome1'><Link to="/">Home</Link></div>
            <div className='welcome1'>Testing</div>
        </div>

        <div className = 'welcomecont'>
            <div className = "welcome">
            I made this page to test out React Router, Publishing, using SVGs and using JSX. And also to tell my girlfriend i love her.
            </div>
        </div>
    </div>
  );
};


export default About;