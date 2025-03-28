import { Routes, Route, Navigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import userAtom from './atoms/userAtom';
import Login from './components/Login';
import HomePage from './components/HomePage';
import SignupCard from './components/SignUpCard';
import AllUsers from './components/AllUsers';
import EmployeePage from './components/EmployeePage';
import EmployeePerPage from './components/EmployeePerPage';
import EditPage from './components/EditPage';
import ServicesPage from './components/ServicePage';

function App() {
  const user = useRecoilValue(userAtom);

  return (
    <Routes>
      <Route path='/' element={user ? <HomePage /> : <Navigate to="/login" />} />
      <Route path='/login' element={!user ? <Login /> : <div>Logout first!</div>} />
      <Route path='/register' element={user?.firstName === 'Neethu' && user?.lastName === 'Doe' ? <SignupCard /> : <div>Page not found !!</div>} />
      <Route path='/all' element={user?.firstName === 'Neethu' && user?.lastName === 'Doe' ? <AllUsers /> : <div>Page not found !!</div>} />
      <Route path='/personal/:id' element={<EmployeePage />} />
      <Route path='/performance/:id' element={<EmployeePerPage />} />
      <Route path='/edit/:id' element={<EditPage />} />
      <Route path="/services" element={<ServicesPage/>} />
    </Routes>
  );
}

export default App;
