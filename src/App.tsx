import Home from './Pages/Home/Home.page';
import Header from './Pages/Header';
import { lazy } from 'react';
import {  Route, Routes } from 'react-router-dom';
import DrSanjeetRana from './Pages/DrSanjeetRana/DrSanjeetRana.component';

const Plans = lazy(() => import('./Pages/Plans'));
const Footer = lazy(() => import('./Pages/Footer'));
const Reviews = lazy(() => import('./Pages/Reviews'));
const Features = lazy(() => import('./Pages/Features'));

const App = () => {
  return (
    <div className='md:container md:mx-auto '>
      <div className='progress'></div>
      <Header />
      <Routes>
        <Route
          path='/'
          index
          element={
            <div className='flex flex-col'>
              <Home />
              <Features />
              <Reviews />
              <Plans />
              <Footer />
            </div>
          }
        />
        <Route path='/drsanjeetrana' element={<DrSanjeetRana />} />
      </Routes>
    </div>
  );
};

export default App;
