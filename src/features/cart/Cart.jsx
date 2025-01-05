import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import CartItem from "./CartItem";

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function Cart() {
  const cart = fakeCart;

  return (
    <div className="px-4 py-2">
      <Link
        to="/menu"
        className="text-blue-600 hover:text-blue-500 hover:underline"
      >
        &larr; Back to menu
      </Link>

      <h2 className="mt-6 text-lg font-semibold">Your cart, %NAME%</h2>
      <ol className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </ol>
      <div className="mt-4 space-x-2">
        <Button to="/order/new" type="small">
          Order pizzas
        </Button>
        <Button type={"secondary"}>Clear cart</Button>
      </div>
    </div>
  );
}

export default Cart;
