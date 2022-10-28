import React from 'react';
import 'normalize.css';
import './App.css';
import {Main} from '../features/Pages/Main/Main';
import {ElonMaskCms} from '../features/Pages/ElonMaskCMS/ElonMaskCMS';
import {Header} from '../features/Pages/Header/Header';

function App() {
  return (
    <div className="App">
        <Header/>
        <Main/>
        <ElonMaskCms/>
    </div>
  );
}

export default App;