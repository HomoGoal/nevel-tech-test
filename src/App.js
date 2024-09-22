import './App.css';
import './styles/main.scss';

import Header from './sections/Header';
import Hero from './sections/Hero';
import Body from './sections/Body';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
