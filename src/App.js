import Card from "./components/Card";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import Section01 from "./components/Section01";
import Section02 from "./components/Section02";
import Section03 from "./components/Section03";
import Section04 from "./components/Section04";
import Section05 from "./components/Section05";
import Swipers from "./components/Swipper";


function App() {
  return (
   <>
     <Navbar />
     <LandingPage />
     <Card />
     <Section01 />
     <Section02 />
     <Section03 />
     <Section04 />
     <Swipers />
     <Section05 />
     <Footer />
   </>
  );
}

export default App;



