import react from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Footer from './components/Footer';
import SignUpPage from './components/SignUp'
import ForgetPass from './components/pages/ForgetPass';
import Services from './components/pages/Services';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <switch>
          <Route path='/' exact component={Home} />
          <Route path='/SignUp' component={SignUpPage} />
          <Route path='/pages/ForgetPass' component={ForgetPass} />
          <Route path='/pages/Services' component={Services} />
        </switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
