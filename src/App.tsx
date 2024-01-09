import React from 'react';
import './App.scss';
import { Header } from './Component/Header/Header';
import { Catalog } from './Component/Catalog/Catalog';
import { Order } from './Component/Order/Order';
import { Answers } from './Component/Answers/Answers';
import { Footer } from './Component/Footer/Footer';
import { SectionForm } from './Component/SectionForm/SectionForm';
import { MobileMenu } from './Component/MobileMenu/MobileMenu';

function App() {
  return (
    <div className='app'>
      <Header />
      <Catalog />
      <SectionForm />
      <Order />
      <Answers />
      <Footer />
      <MobileMenu />
    </div>
  );
}

export default App;
