import "./styles.css";

let fruits = ["apple", "pear", "banana", "melon"];

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <FruitList />
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
