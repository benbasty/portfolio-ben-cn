import './App.css';
import Nav from './Nav';
import Header from './Header';
import About from './About';
import Portfolio from './portfolio';
import Contact from './contact';
// import MainPage from './MainPage';
import Footer from './Footer';
import ScrollUp from './ScrollUp';
// import { Routes, Route } from 'react-router-dom';
// import Cn from './Cn';

function App() {
  return (
      <>
        <Nav />
        <Header />
        <About />
        <Portfolio />
        <Contact />
        {/* <MainPage /> */}
        <Footer />
        <ScrollUp />
        {/* <Routes>
          <Route path="/main" element={<MainPage />}/>
          <Route path="/cn" element={<Cn/>}/>
        </Routes> */}
      </>
  );
}

export default App;
