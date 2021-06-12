import React, { useState } from 'react';
import styled from 'styled-components';
import './App.css';
import App from './App';

const ModifiersBtns = styled.div`
  display: grid;
  grid-area: modif;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
`
const ModBtns = styled.button`
  background-color: rgb(196, 195, 195);
`

function Modifiers({ data, setData }) {


    return (
        <ModifiersBtns>
            <ModBtns onClick={() => setData(data.substr(0, data.length - 1))}>
                Clear
            </ModBtns>
            <ModBtns onClick={() => setData("")}>AC</ModBtns>
        </ModifiersBtns>
    )
}

export default Modifiers;