import React from 'react';
import './App.scss';
import { Header } from './Component/Header/Header';
import { Catalog } from './Component/Catalog/Catalog';
import { Form } from './Component/Form/Form';

function App() {
  return (
    <div className='app'>
      <Header />
      <Catalog />
      <Form />
    </div>
  );
}

export default App;
