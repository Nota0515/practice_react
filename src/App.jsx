import Header from './components/Header';
import ButtonGradient from "./assets/svg/ButtonGradient";
import Hero from './components/Hero';

const App = () => {
  return (
    <>
      <div className="pt-[7.5rem] lg:overflow-hidden">
        <Header />
        <Hero />
        <ButtonGradient />
      </div>
    </>
  );
};

export default App; // This should be present
