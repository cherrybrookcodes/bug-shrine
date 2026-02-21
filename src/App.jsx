import './styles/App.css';
import Daycalc from './components/welcometext';
import Mainicon from './assets/bug-main.png';
import { Link } from "react-router";

function App() {
return (
    <div className="App">
    
        <div className = "navbar">
            <div><Link to="About">About</Link></div>
            <div><Link to="/">Home</Link></div>
            <div className = "navelement">Testing</div>
        </div>

        <img src={Mainicon} className='icon'/>

        <div className = "welcomecont">
            <Daycalc/>
        </div>
    </div>
);
}

export default App;