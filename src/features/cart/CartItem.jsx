import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { deleteItem } from "./cartSlice";
import UpdateItemButton from "../menu/UpdateItemButton";
function CartItem({ item }) {
  const { pizzaId, name, quantity, unitPrice } = item;

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(deleteItem(pizzaId));
  };
  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between gap-4">
        <p>{formatCurrency(unitPrice)}</p>
        <UpdateItemButton id={pizzaId} quantity={quantity} />
        <Button type={"small"} handleClick={handleClick}>
          Delete
        </Button>
      </div>
    </li>
  );
}

export default CartItem;
