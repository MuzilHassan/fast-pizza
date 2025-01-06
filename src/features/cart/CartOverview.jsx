import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function CartOverview() {
  const cart = useSelector((state) => state.cart.cart);
  return (
    <div className="flex items-center justify-between bg-stone-800 p-4 uppercase text-stone-200">
      <p className="space-x-4 font-semibold">
        <span>{cart.length} pizzas</span>
        <span>
          {cart.reduce((acc, cur) => {
            return acc + cur.unitPrice * cur.quantity;
          }, 0)}
          $
        </span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
