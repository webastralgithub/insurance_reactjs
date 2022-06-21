
import Navigation from '../components/navigation';
import Footer from '../components/footer';
import './insurance.css';
import About from '../components/about';
import HeroSection from '../components/heroSection';
import Services from '../components/services';
import QuoteForm from '../components/quoteForm';
function Insurance() {
  return (
    <div>
      <div>
        <Navigation />
        <HeroSection />
        <About />
      <Services />
      <QuoteForm />
      <Footer />
  
      </div>
    </div>



  );
}
  
  export default Insurance;