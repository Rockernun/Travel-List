import React from 'react';
import TravelList from './TravelList';
import './App.css';
import {RecoilRoot} from "recoil";

function App() {
  return (
    <>
      <RecoilRoot>
        <TravelList />
      </RecoilRoot>
    </>
  );
}

export default App;
