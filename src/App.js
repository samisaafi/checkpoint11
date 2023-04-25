import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './composant/Header';
import HeroSection from './composant/Herosection';
import FeaturedSection from './Featured/FeaturedSection';
import Product from './Featured/Product';
function App() {
  return (
   <>
   <Header/> 
   <HeroSection/>
   <FeaturedSection/>
   <Product/>


   
   </>
  );
}

export default App;
