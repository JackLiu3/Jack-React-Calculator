import "./styles.css";

export default function App() {
  const handleClear=()=>{
    alert("its working")
  }
  const handleNumber=(e)=>{
    alert(e.target.innerText)
  }
  return (
    <div className="App">
      <input className="output"></input>
      <button className="miscellaneous" onClick={handleClear}>AC</button>
      <button className="miscellaneous">+/</button>
      <button className="miscellaneous">%</button>
      <button className="symbols">÷</button>
      <button className="numbers" onClick={handleNumber}>7</button>
      <button className="numbers">8</button>
      <button className="numbers">9</button>
      <button className="symbols">x</button>
      <button className="numbers">4</button>
      <button className="numbers">5</button>
      <button className="numbers">6</button>
      <button className="symbols">-</button>
      <button className="numbers" onClick={handleNumber}>1</button>
      <button className="numbers">2</button>
      <button className="numbers">3</button>
      <button className="symbols">+</button>
      <button className="numbers0">0</button>
      <button className="numbers">.</button>
      <button className="symbols">=</button>
    </div>
  );
}