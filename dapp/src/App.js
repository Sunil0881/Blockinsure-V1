import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '../src/contexts/AuthContext.js';
import Home from "../src/pages/client/Home";
import Policy from "../src/pages/client/Policy";
import Claim from "../src/pages/client/Claim";
import Login from '../src/pages/Login.js';
import ProtectedRoute from '../src/components/ProtectedRoute';

import AdminHome from "../src/pages/admin/AdminHome";


function App() {
  return (  
    <AuthProvider>
    <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/policy" element={<Policy />} />
              <Route path="/claim" element={<Claim />} />
              <Route path="/login" element={<Login />} />
              <Route path="/admin" element={<ProtectedRoute><AdminHome /></ProtectedRoute>} />
              
            </Routes>
     </Router>
     </AuthProvider>

  );
}

export default App;
