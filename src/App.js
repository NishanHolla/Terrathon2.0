import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import PatientsPage from './PatientsPage';
import RegistrationPage from './RegistrationPage';
import LoginPage from './LoginPage';
import WearAble from './WearAble';

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token'));

  // const PrivateRoute = ({ ...rest }) => {
  //   const navigate = useNavigate();
  //   return (
  //     <Route
  //       {...rest}
  //       render={(props) =>
  //         !token ? (
  //           navigate('/login', { replace: true, state: { from: props.location?.state } })
  //         ) : (
  //           <PatientsPage {...props} />
  //         )
  //       }
  //     />
  //   );
  // };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken(null);
  };

  return (
    <Router>
      <Container>
      <div className="navbar">
        <Link to="/" className='link'><b><i>CaringConnections</i></b></Link>
        <Link to="/patients" className='link'>Patients</Link>
        <Link to="/wearable" className='link'>Wearable</Link>
        <Link to="/about" className='link'>Our Goal</Link>
        {token ? (
          <button onClick={handleLogout} className='logout'>Logout</button>
        ) : (
          <Link to="/login" className='login'>Login</Link>
        )}
      </div>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route
            path="/login"
            element={<LoginPage setToken={(token) => { setToken(token); localStorage.setItem('token', token); }} />}
          />
          <Route path="/patients" element={<PatientsPage />} />
          <Route path="/wearable" element={<WearAble />} />
        </Routes>
        {token && (
          <div style={{ marginTop: '20px' }}>
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}
      </Container>
    </Router>
  );
};

export default App;
