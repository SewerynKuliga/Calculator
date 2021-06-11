import React, { useState } from 'react';
import './App.css';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 420px;
  min-height: 96vh;
  margin: 0 auto;
  display: grid;
  grid-template-areas:
    "total total total total"
    "modif modif modif oper"
    "digit digit digit oper"
    "digit digit digit oper"
    "digit digit digit oper"
    "digit digit digit oper";
  grid-auto-columns: 1fr;
`
const CalcBtn = styled.button`
  flex: 1 0 26%;
`
const Modifiers = styled.div`
  display: grid;
  grid-area: modif;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
`
const ModBtns = styled.button`
  background-color: rgb(196, 195, 195);
`
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
  background-color: #f1f1f1;
  flex: 1 0 26%;
`
const Operations = styled.div`
  display: grid;
  grid-area: oper;
`
const OperBtn = styled.button`
  background-color: rgb(250, 119, 11);
  width: 100px;
`

function App() {
  const [data, setData] = useState("");
  const calcButtons = [];
  [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, ".", "%"].forEach(item => {
    calcButtons.push(
      <CalcBtn onClick={e => {
        setData(data + e.target.value)
      }}
        value={item}
        key={item}
      >
        {item}
      </CalcBtn>
    )
  })

  return (
    <Wrapper>
      <Input> {data} </Input>
      <CalcButtons> {calcButtons} </CalcButtons>
      <Modifiers>
        <ModBtns onClick={() => setData(data.substr(0, data.length - 1))}>
          Clear
        </ModBtns>
        <ModBtns onClick={() => setData("")}>AC</ModBtns>
      </Modifiers>

      <Operations>
        <OperBtn onClick={e => setData(data + e.target.value)} value="+">
          +
        </OperBtn>
        <OperBtn onClick={e => setData(data + e.target.value)} value="-">
          -
        </OperBtn>
        <OperBtn onClick={e => setData(data + e.target.value)} value="*">
          *
        </OperBtn>
        <OperBtn onClick={e => setData(data + e.target.value)} value="/">
          /
        </OperBtn>
        <OperBtn onClick={e => {
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
        </OperBtn>
      </Operations>
    </Wrapper>
  );
}

export default App;
