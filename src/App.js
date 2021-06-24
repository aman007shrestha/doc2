import logo from './logo.svg';
import './App.css';
import './styles/splitPane.css';
//import Calculator from './components/BoilingVerdict';
import TemperatureInput, {Calculator} from './components/TemperatureInput';
import WelcomeDialog, {Spliter, SignUpDialog} from './components/Composition';

function App() {
  return (
    <div className="App">
      
      {/*<TemperatureInput scale="f" />
      <TemperatureInput scale="c" />*/}
      <Calculator />
      <p>Composition vs Inheritance</p>
      <WelcomeDialog />
      <Spliter />
      <SignUpDialog />
    </div>
  );
}

export default App;
