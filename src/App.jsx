import Header from './components/Header';
import ButtonGradient from "./assets/svg/ButtonGradient";
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Roadmap from './components/Roadmap';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <div className="pt-[4.5rem] lg:pt-[5.25rem]  overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Roadmap />
        <ButtonGradient />
        <Footer />
      </div>
    </>
  );
};

export default App; // This should be present
