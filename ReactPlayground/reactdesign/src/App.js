import React, { Fragment } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <Fragment>
              <Header/>
              <Home />
              <Footer />
            </Fragment>
          } />

          <Route path='/about' element={
            <Fragment>
              <Header />
              <About />
              <Footer />
            </Fragment>
          } />

          <Route path='/contact' element={
            <Fragment>
              <Header />
              <Contact />
              <Footer />
            </Fragment>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
