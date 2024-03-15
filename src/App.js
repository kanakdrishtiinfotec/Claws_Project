import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import CardsDetails from './components/CardsDetails';
import Cards from './components/Cards';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Home from './components/Home';
import Footer from './components/Footer';
import Product_details from './components/Product_details';
import AboutUs from './components/AboutUs';
import TermsPolicies from './components/TermsPolicies';
import PaymentPolicies from './components/PaymentPolicies';
import PrivacyPolicy from './components/PrivacyPolicy';
import ReturnPolicy from './components/ReturnPolicy';
import ShippingPolicy from './components/ShippingPolicy';
import Forms from './components/Forms'


function App() {
  return (
  <>
  <Router basename='/Claws_Project'>

   <Header />
   <Routes>
   <Route path='/' element={<Home />} />
     <Route path='/product_details' element={<Cards />} />
     <Route path='/about-us' element={<AboutUs />} />
     <Route path='/terms-policies' element={<TermsPolicies />} />
     <Route path='/payment-policies' element={<PaymentPolicies />} />
     <Route path='/privacy-policy' element={<PrivacyPolicy />} />
     <Route path='/return-policy' element={<ReturnPolicy />} />
     <Route path='/shipping-policy' element={<ShippingPolicy />} />
     <Route path='/product_details/:id' element={<Product_details />} />
     <Route path='/forms' element={<Forms/>} />
     <Route path='/cart/:id' element={<CardsDetails />} />
   </Routes>
   <Footer />
  </Router>

   
  </>
  );
}

export default App;
