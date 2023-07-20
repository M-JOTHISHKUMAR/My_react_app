import { useEffect } from 'react';
import { ResumeProvider } from './Context';
import './App.css';
import Header from './components/Layouts/Header';
import Navbar from './components/Layouts/Navbar';
import Footer from './components/Layouts/Footer';
import Main from './components/Main';
import WebFont from 'webfontloader';
// import SignUp from './components/Layouts/signup';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import SignUp from './signup';
// import SignUp from './components/signup';

function App() {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Pacifico', 'Poppins']
      }
    });
  }, []);

  return (
    <div>
    <BrowserRouter>
    <Routes>
    <Route path='/login' element={<SignUp/>}/>
    </Routes>
    </BrowserRouter>
      <ResumeProvider>
        <Navbar />
        <Header />
        <Main />
        <Footer />
      </ResumeProvider>

    </div>
  );
}

export default App;
