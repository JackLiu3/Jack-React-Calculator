import "./styles.css";
import { useState } from "react";
export default function App() {
  const [leftVal, setLeftVal] = useState("0");
  const [rightVal, setRightVal] = useState("0");
  const [symbol, setSymbol] = useState("");
  const [showVal, setShowVal] = useState("0");
  const [pressedSymbol, setPressedSymbol] = useState("");
  const handleClear = (e) => {
    let k = e.target.innerText;
    if (k === "AC") {
      setLeftVal("0");
      setPressedSymbol("");
      setRightVal("0");
      setShowVal("0");
      setSymbol("");
    } else {
      setShowVal("0");
      setRightVal("0");
    }
  };
  const handleNumber = (e) => {
    let n = e.target.innerText;
    if (showVal.indexOf(".") >= 0 && n === ".") {
      return;
    } else {
      if (pressedSymbol === "") {
        if (showVal === "0") {
          setShowVal(n);
          setRightVal(n);
        } else {
          let t = showVal + n;
          setShowVal(t);
          setRightVal(t);
        }
      } else {
        setShowVal(n);
        setRightVal(n);
        setPressedSymbol("");
        document.getElementById(pressedSymbol).style.backgroundColor = "yellow";
      }
    }
  };
  const handleSymbol = (e) => {
    let s = e.target.innerText;
    setLeftVal(showVal);
    setRightVal(showVal);
    setSymbol(s);
    setPressedSymbol(s);
    document.getElementById(s).style.backgroundColor = "white";
  };
  const handleEqual = (e) => {
    let result;
    if (symbol === "+") {
      result = parseFloat(leftVal) + parseFloat(rightVal);
    } else if (symbol === "-") {
      result = parseFloat(leftVal) - parseFloat(rightVal);
    } else if (symbol === "x") {
      result = parseFloat(leftVal) * parseFloat(rightVal);
    } else if (symbol === "÷") {
      result = parseFloat(leftVal) / parseFloat(rightVal);
    } else {
      return;
    }
    result = result + "";
    setShowVal(result);
    setLeftVal(result);
    setPressedSymbol("=");
  };
  const handleMis = (e) => {
    let sy = e.target.innerText;
    let result;
    if (sy === "+/-") {
      result = showVal * -1;
    } else {
      result = showVal / 100;
    }
    setShowVal(result);
    setRightVal(result);
    setPressedSymbol(sy);
  };
  return (
    <div className="App">
      <div className="output">{showVal}</div>
      <button className="miscellaneous" onClick={handleClear}>
        AC
      </button>
      <button className="miscellaneous" onClick={handleMis}>
        +/-
      </button>
      <button className="miscellaneous" onClick={handleMis}>
        %
      </button>
      <button className="symbols" onClick={handleSymbol} id="÷">
        ÷
      </button>
      <button className="numbers" onClick={handleNumber}>
        7
      </button>
      <button className="numbers" onClick={handleNumber}>
        8
      </button>
      <button className="numbers" onClick={handleNumber}>
        9
      </button>
      <button className="symbols" onClick={handleSymbol} id="x">
        x
      </button>
      <button className="numbers" onClick={handleNumber}>
        4
      </button>
      <button className="numbers" onClick={handleNumber}>
        5
      </button>
      <button className="numbers" onClick={handleNumber}>
        6
      </button>
      <button className="symbols" onClick={handleSymbol} id="-">
        -
      </button>
      <button className="numbers" onClick={handleNumber}>
        1
      </button>
      <button className="numbers" onClick={handleNumber}>
        2
      </button>
      <button className="numbers" onClick={handleNumber}>
        3
      </button>
      <button className="symbols" onClick={handleSymbol} id="+">
        +
      </button>
      <button className="numbers0" onClick={handleNumber}>
        0
      </button>
      <button className="numbers" onClick={handleNumber}>
        .
      </button>
      <button className="symbols" onClick={handleEqual} id="=">
        =
      </button>
    </div>
  );
}
