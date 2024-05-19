import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard';
import Login from './components/Login';
import ProtectedRoute from './pages/ProtectedRoutes';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
