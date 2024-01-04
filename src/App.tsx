import React from 'react';
import './App.scss';
import { Header } from './Component/Header/Header';
import { Catalog } from './Component/Catalog/Catalog';
import { Form } from './Component/Form/Form';
import { Order } from './Component/Order/Order';
import { Answers } from './Component/Answers/Answers';

function App() {
  return (
    <div className='app'>
      <Header />
      <Catalog />
      <Form />
      <Order />
      <Answers />
    </div>
  );
}

export default App;
