import logo from './logo.svg';
import './App.css';
import Calculator from './components/BoilingVerdict';
import TemperatureInput from './components/TemperatureInput';


function App() {
  return (
    <div className="App">
      <Calculator />
      <TemperatureInput scale="f" />
      <TemperatureInput scale="c" />
    </div>
  );
}

export default App;
