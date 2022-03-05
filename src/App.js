import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import About from './pages/about/About';
import Career from './pages/career/Career';
import ContactUS from './pages/contactUs/ContactUS';
// import Portfolio from './pages/portfolio/Portfolio';

function App() {
  return (
    <div>
        <About/>
        <Career/>
        <ContactUS/>
        {/* <Portfolio/> */}
    <Services/>
    </div>
  );
}

export default App;
