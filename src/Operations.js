import React, { useState } from 'react';
import './App.css';
import styled from 'styled-components';
import App from './App';

const OperationsGrid = styled.div`
  display: grid;
  grid-area: oper;
`
const OperBtn = styled.button`
  background-color: rgb(250, 119, 11);
  width: 100px;
`

function Operations({data, setData}){
    return(
        <OperationsGrid>
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
      </OperationsGrid>
    )
}

export default Operations;