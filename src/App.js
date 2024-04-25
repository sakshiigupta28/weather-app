import "./App.css";
import Weather from "./components/Weather.jsx";
import nature from '../src/assets/nature.jpg'

function App() {
  return (
    <div className="App">
    <img className="nature" src={nature}/>
     <Weather/>
    </div>
  );
}

export default App;
