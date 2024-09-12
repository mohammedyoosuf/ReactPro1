 /*
 import './App.css';
 import React from "react";
 import ReactDOM from "react-dom/client";
 import { useState } from 'react';

// import { useState } from 'react';
////// 013 CHALLENGE ////////////////

export default function App() {
  return (
    <div className='App'  >
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date("June 21 2017");
  date.setDate(date.getDate() + count);

  return (
    <div>
      <div>
       <input
       type="range"
       min="0"
       max="10"
       value={step}
      onChange={(e)=>setStep(e.target.value)}



       />



        <button onClick={() => setStep((c) => c - 1)}>-</button>
        <span>Step: {step}</span>
        <button onClick={() => setStep((c) => c + 1)}>+</button>
      </div>

      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <span>Count: {count}</span>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>

      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today `
            : `${Math.abs(count)} days ago `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
}

*/


////////////////////////////////////////////////////////////////////////////////////  
 
import './App.css';
import React from "react";
import { useState } from 'react';

const initialItems=[
{ id:1, description:"passport",

},{}

];