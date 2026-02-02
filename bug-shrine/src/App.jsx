import './styles/App.css'
import Daycalc from './components/welcometext';
import Mainicon from '/home/tom-bombadil/cherrybrookcodes/testing/bug-shrine/bug-shrine/src/assets/bug-main.png'

function App() {
return (
    <div className="App">
        <img src={Mainicon} className='icon'/>
        <div className = "welcomecont">
            <Daycalc/>
        </div>
    </div>
);
}

export default App;