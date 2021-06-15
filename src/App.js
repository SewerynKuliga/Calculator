import React, { useState } from 'react';
import './App.css';
import styled from 'styled-components';
import Modifiers from './Modifiers';
import Operations from './Operations';

const Wrapper = styled.div`
  max-width: 420px;
  min-width: 300px;
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

function App() {
  const [data, setData] = useState('');

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
      <Modifiers data={data} setData={setData} />
      <Operations data={data} setData={setData} />
    </Wrapper>
  );
}

export default App;
