import Home from './Pages/Home/Home.page';
import Header from './Pages/Header';
import { Route, Routes } from 'react-router-dom';
import DrSanjeetRana from './Pages/DrSanjeetRana/DrSanjeetRana.component';
import Features from './Pages/Features';
import Reviews from './Pages/Reviews';
import Plans from './Pages/Plans';
import Footer from './Pages/Footer';

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
            </div>
          }
        />
        <Route path='/doctor' element={<DrSanjeetRana />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
