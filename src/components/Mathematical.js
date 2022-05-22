import React,{useState} from 'react'
import {useSelector,useDispatch} from 'react-redux';
import {add,sub,mul,div,clear} from '../redux/actions/index';
import Keypad from './Keypad';
import Scientific from './Scientific';
import '../style/Mathematics.css';

function Mathematical() {
  const myState=useSelector((state)=>state.operate);
  const [scientific,setScientific]=useState(false);
  const [x,setX]=useState("");
  const [y, setY] = useState("");
  const [operator,setOperator]=useState("+");
  const operators=["+","-","*","/"];
  const [ind,setInd]=useState(0);
  const dispatch = useDispatch();
  const handleClick=()=>{
    switch (operator) {
      case "+":
        return dispatch(add(x, y));
      case "-":
        return dispatch(sub(x, y));
      case "*":
        return dispatch(mul(x, y));
      case "/":
        return dispatch(div(x, y));
      default:
        console.log("wrong values")
    }
    dispatch(add(x, y));
  }
  const handleClear=()=>{
    setX("");
    setY("");
    setOperator("");
    setInd(0);
    dispatch(clear());
  }
  return (
    <div>
      <div className="math__calculator">
      <h2 className="heading">CALCULATOR</h2>
        <input value={x} onChange={(e) => setX(e.target.value)} />

        <div className="operators">
          <button
            onClick={() => {
              let i = ind - 1;
              if (i < 0) {
                i = 3;
              }
              setInd(i);
              //console.log(i,ind);
              setOperator(operators[i]);
              //console.log(operator);
            }}
          >
            {"<"}
          </button>
          <p>{operators[ind]}</p>
          <button
            onClick={() => {
              let i = ind + 1;
              if (i > 3) {
                i = 0;
              }
              setInd(i);
              setOperator(operators[i]);
            }}
          >
            {">"}
          </button>
        </div>
        <input value={y} onChange={(e) => setY(e.target.value)} />
        {scientific && <Scientific x={x} y={y} />}
        <p className="answer">= {myState}</p>
        <button
          className="calculate"
          onClick={() => setScientific(!scientific)}
        >
          Scientific
        </button>
        <button className="calculate" onClick={() => handleClick()}>
          Calculate
        </button>
        <button className="calculate" onClick={()=>handleClear()}>
          Clear
        </button>
      </div>
      {/* <Keypad /> */}
    </div>
  );
}

export default Mathematical