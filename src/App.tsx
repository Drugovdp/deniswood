import React from 'react';
import './App.scss';
import { Header } from './Component/Header/Header';
import { Catalog } from './Component/Catalog/Catalog';
import { Form } from './Component/Form/Form';
import { Order } from './Component/Order/Order';

function App() {
  return (
    <div className='app'>
      <Header />
      <Catalog />
      <Form />
      <Order />
    </div>
  );
}

export default App;
