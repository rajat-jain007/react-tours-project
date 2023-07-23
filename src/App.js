import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navabar from "./components/Navabar";
import Services from "./components/Services";
import Tours from "./components/Tours";

function App() {
  return (
    <>
      <Navabar />
      <Home />
      <About />
      <Services />
      <Tours />
      <Footer/>
    </>
  );
}

export default App;
