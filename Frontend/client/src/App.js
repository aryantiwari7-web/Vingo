// App.jsx
import './App.css';
import { Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Footer from './pages/footer.jsx';
import ForgotPassword from './pages/ForgotPassword';
import NavBar from './pages/navBar.jsx';
import useGetCurrentUser from './hooks/useGetCurrentUser.jsx';
export const serverUrl="http://localhost:5000"; 

function App() {
  const user = useGetCurrentUser();
  return (
    <Routes>
      <Route path="/" element={<NavBar user={user}/>} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/forgot-page" element={<ForgotPassword />} />
    </Routes>
  );
}

export default App;
