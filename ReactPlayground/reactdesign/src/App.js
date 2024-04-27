import React, { Fragment } from 'react';
import Create from './pages/Create';
import Read from './pages/Read';
import Update from './pages/Update';
import Delete from './pages/Delete';
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
              <Create />
              <Footer />
            </Fragment>
          } />

          <Route path='/read/' element={
            <Fragment>
              <Header />
              <Read />
              <Footer />
            </Fragment>
          } />

          <Route path='/update' element={
            <Fragment>
              <Header />
              <Update />
              <Footer />
            </Fragment>
          } />
            <Route path='/delete' element={
            <Fragment>
              <Header />
              <Delete />
              <Footer />
            </Fragment>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
