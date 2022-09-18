import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Box from '@mui/material/Box';
import Header from './components/Header';
import Nav from './components/Nav';
import Banner from './components/Banner';
import Breadcrumb from './components/Breadcrumb';
import Imgbackground from './components/bg';
function App() {
  return (
  <>
    <Header />
    <Nav />
    <Breadcrumb />
    <Imgbackground />
    {/* <Banner /> */}
    </>
  );
}

export default App;
