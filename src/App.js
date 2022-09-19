import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Breadcrumb from './components/Breadcrumb';
import Imgbackground from './components/bg';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
function App() {
  return (
  <>
    <Header />
    <Nav />
    <Breadcrumb />
    <Imgbackground />
    {/* <Banner /> */}
    <ProductList />
    <ProductList />
     <ProductList />
     <Footer />
    </>
  );
}

export default App;
