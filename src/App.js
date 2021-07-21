import "./styles.css";

export default function App() {
  let equation = "";
  const handleClear = () => {
    let newEquation = equation.current.value;
    if (!newEquation) return;
    equation.current.newEquation = "";
  };
  const handleNumber = (e) => {
    let number = e.target.innerText;
    number = number.toString();
    let newEquation = equation.current.value;
    if (!newEquation) return;
    newEquation.onAdd(number);
    equation.current.newEquation = "";
  };
  const handleSymbol = (e) => {
    let symbol = e.target.innerText;
    equation + symbol;
  };
  const handleEqual = (e) => {
    alert(e.target.innerText);
  };
  return (
    <div className="App">
      <input className="output"></input>
      <button className="miscellaneous" onClick={handleClear}>
        AC
      </button>
      <button className="miscellaneous">+/</button>
      <button className="miscellaneous">%</button>
      <button className="symbols" onClick={handleSymbol}>
        ÷
      </button>
      <button className="numbers" onClick={handleNumber}>
        7
      </button>
      <button className="numbers">8</button>
      <button className="numbers">9</button>
      <button className="symbols" onClick={handleSymbol}>
        x
      </button>
      <button className="numbers">4</button>
      <button className="numbers">5</button>
      <button className="numbers">6</button>
      <button className="symbols" onClick={handleSymbol}>
        -
      </button>
      <button className="numbers" onClick={handleNumber}>
        1
      </button>
      <button className="numbers">2</button>
      <button className="numbers">3</button>
      <button className="symbols" onClick={handleSymbol}>
        +
      </button>
      <button className="numbers0">0</button>
      <button className="numbers">.</button>
      <button className="symbols" onClick={handleEqual}>
        =
      </button>
    </div>
  );
}
