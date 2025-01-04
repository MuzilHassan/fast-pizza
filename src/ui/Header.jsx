import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import UserName from "../features/user/UserName";

const Header = () => {
  return (
    <div className="flex items-center justify-between border-b border-stone-200 bg-yellow-400 px-4 py-3">
      <Link to={"/"} className="uppercase tracking-widest">
        fast faster fastest Pizza
      </Link>
      <SearchOrder />
      <UserName />
    </div>
  );
};

export default Header;
