import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";
const Applayout = () => {
  const { state: isLoading } = useNavigation();
  console.log(isLoading);
  return (
    <div className="layout">
      {isLoading === "loading" && <Loader />}
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
