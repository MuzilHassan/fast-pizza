import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";
const Applayout = () => {
  const { state: isLoading } = useNavigation();
  console.log(isLoading);
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto] overflow-auto">
      {isLoading === "loading" && <Loader />}
      <Header />
      <div className="overflow-auto">
        <main className="mx-auto max-w-3xl">
          <Outlet />
        </main>
      </div>
      <CartOverview />
    </div>
  );
};

export default Applayout;
