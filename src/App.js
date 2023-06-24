import './App.css';
import Header from './components/Header';
import SectioDesc from './components/SectionDesc';
import SectionLinee from './components/SectionLine';
import SectionMe from './components/SectionMe';
import { Slider } from './components/slide';

function App() {
  return (
    <>
    <Header />
    <SectionMe />
    <SectionLinee />
    <SectioDesc />
    <SectionLinee />
    <Slider />
    <SectionLinee />
    </>
  );
}

export default App;
