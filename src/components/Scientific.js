import React from 'react'
import {useDispatch} from 'react-redux';
import {sin,cos,tan,pow,exp,log} from '../redux/actions/index'

function Scientific({x,y}) {
    const dispatch=useDispatch();
  return (
    <div className="scientific">
      <button onClick={() => dispatch(sin(x))}>sin</button>
      <button onClick={() => dispatch(cos(x))}>cos</button>
      <button onClick={() => dispatch(tan(x))}>tan</button>
      <button onClick={() => dispatch(pow(x,y))}>x^y</button>
      <button onClick={() => dispatch(log(x))}>log</button>
      <button onClick={() => dispatch(exp(x))}>e^x</button>
    </div>
  );
}

export default Scientific