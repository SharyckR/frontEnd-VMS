import { Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import MyShopping from "./pages/MyShopping"
import Sell from "./pages/Sell";
import Buy from "./pages/Buy";
import Compare from "./pages/Compare";
import Purchase from "./pages/Purchase";
import BuyerInformation from "./pages/BuyerInformation";
import Payment from "./pages/Payment";
import PurchaseConfirm from "./pages/PurchaseConfirm";
import DeliveryTracking from "./pages/DeliveryTracking";

function App() {
  return (
      <>
        <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/myshopping" element={<MyShopping />} />
            <Route path="/sell" element={<Sell />} />
            <Route path="/buy" element={<Buy />} />
            <Route path="/buyerinformation/:id" element={<BuyerInformation />} />
            <Route path="/compare" element={<Compare />} />
            <Route path="/purchase/:id" element={<Purchase />} />
            <Route path="/payment/:id" element={<Payment />} />
            <Route path="/purchaseconfirm/:id" element={<PurchaseConfirm />} />
            <Route path="/deliverytracking" element={<DeliveryTracking />} />
            <Route path="/sell" element={<sell />} />
          </Routes>

      </>
  )
}

export default App
