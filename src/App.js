import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import Login from './components/Login/Login';
import AuthProvider from './components/Context/AuthProvider';
import Register from './components/Register/Register';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Services from './components/Services/Services';
import Doctores from './components/Doctors/Doctores';
import PatientCare from './components/Patient.care/PatientCare';
import HealthTips from './components/HealthTips/HealthTips';
import Header from './components/shared/Header/Header';
import Footer from './components/shared/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import AboutUs from './components/About/AboutUs';
import Contact from './components/Contact/Contact';


function App() {
  return (
    <div >

      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <PrivateRoute path="/doctor">
              <Doctores></Doctores>
            </PrivateRoute>
            <Route path="/patientcare">
              <PatientCare></PatientCare>
            </Route>
            <PrivateRoute path="/healthtips">
              <HealthTips></HealthTips>
            </PrivateRoute>
            <PrivateRoute path="/service/:id">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/aboutus">
              <AboutUs></AboutUs>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
