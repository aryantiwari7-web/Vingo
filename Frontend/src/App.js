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
import ShowItemBlock from './pages/showItemBlock.jsx';
import SlidingMenuBar from './pages/slidingMenuBar.jsx';
import CustomerFeedback from './pages/customerFeedback.jsx';
import { CartProvider } from './hooks/Cart.jsx';
import CartPage from './pages/cartPage.jsx';


export const serverUrl =  process.env.REACT_APP_SERVER_URL;


function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nav" element={<NavBar />} />
          <Route path="/sld" element={<SlidingMenuBar />} />
          <Route path="/cf" element={<CustomerFeedback />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-page" element={<ForgotPassword />} />
          <Route path="/addItem" element={<AddItem />} />
          <Route path="/cartPage" element={<CartPage />} />
          <Route path="/item/:name" element={<ItemBox />} />
          <Route path="/showItem/:itemId" element={<ShowItemBlock />} />
        </Routes>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
