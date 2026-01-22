import './App.css';
import { Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import AddItem from './pages/addItem.jsx';

import ForgotPassword from './pages/ForgotPassword';
import { AuthProvider } from './hooks/Auth.jsx';
import NavBar from './pages/navBar.jsx';
import Home from './pages/Home.jsx';
import ItemBox from './pages/itemBox.jsx';
import MainLayout from './pages/MainLayout.jsx';
export const serverUrl = "http://localhost:5000";

function App() {
  return (
    
    <AuthProvider>
      <Routes element={<MainLayout />}>
        <Route path="/addItem" element={<AddItem />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/forgot-page" element={<ForgotPassword />} />
        <Route path="/item/:name" element={<ItemBox />} />
      </Routes>
     </AuthProvider>
  );
}

export default App;
