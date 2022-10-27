import React from 'react';
import 'normalize.css';
import './App.css';
import {Main} from '../features/Pages/Main/Main';
import {ElonMaskCms} from '../features/Pages/ElonMaskCMS/ElonMaskCMS';

function App() {
  return (
    <div className="App">
        <Main/>
        <ElonMaskCms/>
    </div>
  );
}

export default App;