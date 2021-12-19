import React from 'react';

import './App.css';

import ChildOne from "./components/ChildOne"   




function App() {
  return (
    <div>
      <ChildOne title="title"  body="body">
        this is child element
      </ChildOne> 
    </div>
  );
}                                             

export default App;
