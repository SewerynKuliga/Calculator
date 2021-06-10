import React, { useState } from 'react';
import './App.css';
import styled from 'styled-components';

const Input = styled.div`
  grid-area: total;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 3rem;
`
const CalcButtons = styled.div`
grid-area: digit;
display: flex;
flex-wrap: wrap;
`


function App() {
  const [data, setData] = useState("");
  const calcButtons = [];
  [9, 8, 7, 6, 5, 4, 3, 2, 1, ".", ",", "%"].forEach(item => {
    calcButtons.push(
      <button onClick={e => {
        setData(data + e.target.value)
      }}
        value={item}
        key={item}
      >
        {item}
      </button>
    )
  })

  return (
    <div className="wrapper">
      <Input> {data} </Input>
      <CalcButtons className="digits"> {calcButtons} </CalcButtons>
      <div className="modifiers subgrid">
        <button onClick={() => setData(data.substr(0, data.length - 1))}>
          Clear
        </button>
        <button onClick={() => setData("")}>AC</button>
      </div>

      <div className="operations subgrid">
        <button onClick={e => setData(data + e.target.value)} value="+">
          +
        </button>
        <button onClick={e => setData(data + e.target.value)} value="-">
          -
        </button>
        <button onClick={e => setData(data + e.target.value)} value="*">
          *
        </button>
        <button onClick={e => setData(data + e.target.value)} value="/">
          /
        </button>
        <button onClick={e => {
          try {
            setData(
              String(eval(data)).length > 3 &&
                String(eval(data)).includes(".")
                ? String(eval(data).toFixed(4))
                : String(eval(data))
            )
          }
          catch (err) {
            console.log(err)
          }

        }} value="=">
          =
        </button>
      </div>
    </div>
  );
}

export default App;
