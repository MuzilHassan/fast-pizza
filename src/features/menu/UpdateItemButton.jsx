import { useDispatch } from "react-redux";
import { decreaseItemQuantity, increaseItemQuantity } from "../cart/cartSlice";

const UpdateItemButton = ({ id, quantity }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-1 sm:gap-3">
      <button
        onClick={() => dispatch(increaseItemQuantity(id))}
        className="h-6 w-6 rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-yellow-200"
      >
        +
      </button>
      <p className="text-sm font-semibold">{quantity}</p>
      <button
        onClick={() => dispatch(decreaseItemQuantity(id))}
        className="h-6 w-6 rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-yellow-200"
      >
        -
      </button>
    </div>
  );
};

export default UpdateItemButton;
