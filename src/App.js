import "./styles.css";

let fruits = ["apple", "pear", "banana", "melon"];

export default function App() {
  return (
    <div className="App">
      <input className="output"></input>
      <br />
      <button className="miscellaneous">AC</button>
      <button className="miscellaneous">+/</button>
      <button className="miscellaneous">%</button>
      <button className="symbols">÷</button>
      <br />
      <button className="numbers">7</button>
      <button className="numbers">8</button>
      <button className="numbers">9</button>
      <button className="symbols">x</button>
      <br />
      <button className="numbers">4</button>
      <button className="numbers">5</button>
      <button className="numbers">6</button>
      <button className="minus">-</button>
      <br />
      <button className="numbers">1</button>
      <button className="numbers">2</button>
      <button className="numbers">3</button>
      <button className="symbols">+</button>
      <br />
      <button className="numbers0">0</button>
      <button className="numbers">.</button>
      <button className="symbols">=</button>
    </div>
  );
}
function FruitList(props) {
  return (
    <ol>
      {fruits.map(function (fruit, k) {
        return <li key={k}>{fruit}</li>;
      })}
    </ol>
  );
}
