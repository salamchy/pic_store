import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import SellerDashboard from "./pages/SellerDashboard";
import BuyerDashBoard from "./pages/BuyerDashBoard";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/seller/profile" element={<SellerDashboard />} />
          <Route path="/buyer/profile" element={<BuyerDashBoard />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App