import './styles/App.css';
import Daycalc from './components/welcometext';
import Mainicon from './assets/bug-main.png';
import { Link } from "react-router";
import Abouticon from './assets/bug-about.svg' ;
import Homeicon from './assets/bug-home.svg' ;
import Testingicon from './assets/bug-testing.svg' ;

function App() {
return (
    <div className="App">
    
        <div className = "navbar">
            <div><img src={Abouticon} className='navicon' /> </div>
            <div><img src={Homeicon} className='navicon' /> </div>
            <div><img src={Testingicon} className='navicon' /> </div>
            <div className='welcome1'><Link to="About">About</Link></div>
            <div className='welcome1'><Link to="/">Home</Link></div>
            <div className='welcome1'>Testing</div>
        </div>

        <img src={Mainicon} className='icon'/>

        <div className = "welcomecont">
            <Daycalc/>
        </div>
    </div>
);
}

export default App;