import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

const Header = () => {
  return (
    <div>
      <Link to={"/"}>fast faster fastest Pizza</Link>
      <SearchOrder />
    </div>
  );
};

export default Header;
