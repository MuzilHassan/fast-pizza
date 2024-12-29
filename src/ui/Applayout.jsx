import { Outlet } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
const Applayout = () => {
  return (
    <div>
      <Header />
      <main>
        <h1>main part</h1>
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
};

export default Applayout;
