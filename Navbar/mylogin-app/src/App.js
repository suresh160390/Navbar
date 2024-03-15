import './App.css';
import { BrowserRouter as Router, Routes,Route,Navigate} from 'react-router-dom';
import LoginForm from './login.js';
import Sigin from './Sigin/sigin.js';
import Forgot from './Forgot/forgot.js';
import Navbar from './Home/Navbar.js';

import Home from './Pages/Home.js'
import About from './Pages/About.js'
import Contactus from './Pages/Contactus.js'
import Services from './Pages/Services.js'
import Product from './Pages/Product.js'
import Notfound from './Pages/Notfound.js'


function App() {  
  // const isLoginFormVisible = window.location.pathname === '/';
  return (
    // <>
    //   <Router>
    //     <Routes>
    //       <Route path="/" element={<LoginForm />} />
    //       {/* <Route path="/" element={isLoggedIn ? <Navigate to="/home" /> : <LoginForm onLogin={handleLogin} />} /> */}
    //       <Route path="/home" element={<Navbar />} />
    //       {/* <Route path="/home" element={<About />} /> */}
    //       <Route path="*" element={<main style={{padding: "1rem"}}><p>There's nothing here!</p></main> }/>            
    //     </Routes>
    //   </Router>
    // </>
    
    <Router>
      {/* <div style={isLoginFormVisible ? { background: 'linear-gradient(120deg, #2980b9, #8e44ad)' } : {}}></div> */}
      <Routes>        
        <Route path="/" element={<LoginForm />} />
        <Route path="/Sigin" element={<Sigin />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/home/*" element={<ProtectedRoutes />} />
      </Routes>
    </Router>

    // <>     
    //   <Router>
    //     <Routes>
    //       <Route path="/" element={<LoginForm />} />
    //       <Route path="/" element={<Navbar />}>
    //         <Route path="/home" element={<Home />} />
    //         <Route path="/home/about" element={<About />} />
    //         <Route path="/home/services" element={<Services />} />
    //         <Route path="/home/product" element={<Product />} />
    //         <Route path="/home/contactus" element={<Contactus />} />
    //         <Route path="/home/signout" element={<LoginForm />} />
    //         <Route path="*" element={<Notfound />} />
    //       </Route>
    //     </Routes>
    //   </Router>    
    // </>   

    // <>
    //   <Router>
    //     <Routes>
    //       <Route path="/" element={isAuthenticated ? (<Navigate to="/home" />) : ( <LoginForm onLogin={() => setAuthenticated(true)} />) } />
    //       <Route  path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/" />}  />         
    //     </Routes>
    //   </Router>
    // </>
  );
}

function ProtectedRoutes() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="product" element={<Product />} />
        <Route path="contactus" element={<Contactus />} />
        <Route path="signout" element={<Navigate to="/" />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
