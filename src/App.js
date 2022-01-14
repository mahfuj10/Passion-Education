import './App.css';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Courses from './components/Courses/Courses';
import Footer from './components/Footer/Footer';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Service from './components/Service/Service';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import OurTeam from './components/OurTeam/OurTeam';
import NoFound from './components/NoFound/NoFound';
import LoginSign from './components/Login_Sign/Login_Sign';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Nav from './components/Header/Nav';


function App() {

  return (

  
<AuthProvider>

  <BrowserRouter>
   
    <Switch>
        

<Route exact path="/">
        <Header />
        <Courses />
        <Footer />
</Route>

<Route path="/home">
        <Header />
        <Courses />
        <Footer />
</Route>

<Route path="/login">
        <Nav></Nav>
        <LoginSign></LoginSign>
</Route>

<PrivateRoute path="/service">
        <Header />
        <Service />
        <Footer />
</PrivateRoute>

<Route path="/about">
        <Header />
        <About />
        <Footer />
</Route>

<Route path="/contact">
        <Header />
        <Contact />
        <Footer />
</Route>

<Route path="/team">
        <Header />
        <OurTeam></OurTeam>
        <Footer />

</Route>

<Route exact path="*">
        <NoFound></NoFound>
</Route>

    </Switch>
  </BrowserRouter>  

</AuthProvider>
    );
}

export default App;
