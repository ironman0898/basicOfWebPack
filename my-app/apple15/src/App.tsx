import './App.css';
import Highlights from './components/Highlights';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import './output.css'

const App = () => {
  return (
    <main >
      <Navbar />
      <Hero />
      <Highlights />
    </main>
  );
};

export default App;
