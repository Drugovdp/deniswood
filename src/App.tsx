import React from 'react';
import './App.scss';
import { Header } from './Component/Header/Header';
import { Catalog } from './Component/Catalog/Catalog';

function App() {
  return (
    <div className='app'>
      <Header />
      <Catalog />
    </div>
  );
}

export default App;
