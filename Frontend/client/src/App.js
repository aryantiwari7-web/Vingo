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
import ShowItemBlock from './pages/showItemBlock.jsx';

export const serverUrl = "http://localhost:5000";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-page" element={<ForgotPassword />} />
        <Route path="/addItem" element={<AddItem />} />
        <Route path="/item/:name" element={<ItemBox />} />
        <Route path="/showItem/:itemId" element={<ShowItemBlock />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
