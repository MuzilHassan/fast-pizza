import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { addItem, deleteItem, getItemsQuantity } from "../cart/cartSlice";
import UpdateItemButton from "./UpdateItemButton";
function MenuItem({ pizza }) {
  const { name, unitPrice, ingredients, soldOut, imageUrl, id } = pizza;
  const dispatch = useDispatch();
  const quantity = useSelector(getItemsQuantity(id));
  const isInCart = quantity > 0;
  const handleDelete = () => {
    dispatch(deleteItem(id));
  };
  const handleClick = () => {
    dispatch(addItem({ pizzaId: id, unitPrice, name, quantity: 1 }));
  };
  console.log(isInCart, "pop");
  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? "opacity-70 grayscale" : ""}`}
      />
      <div className="flex grow flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-400">
              Sold out
            </p>
          )}
          {!soldOut && isInCart && (
            <div className="flex items-center gap-4 sm:gap-8">
              <UpdateItemButton id={id} quantity={quantity} />
              <Button type={"small"} handleClick={handleDelete}>
                Delete
              </Button>
            </div>
          )}
          {!soldOut && !isInCart && (
            <Button type="small" handleClick={handleClick}>
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
