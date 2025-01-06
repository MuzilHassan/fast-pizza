import { Link } from "react-router-dom";

function EmptyCart() {
  return (
    <div className="p-4">
      <Link
        to="/menu"
        className="text-blue-600 hover:text-blue-500 hover:underline"
      >
        &larr; Back to menu
      </Link>

      <p className="mt-2 font-semibold">
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;
