import { formatCurrency } from "../../utils/helpers";

function OrderItem({ item, isLoadingIngredients, ingredients = [] }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="">
      <div className="flex items-center justify-between py-3">
        <p>
          <span className="font-medium">{quantity}&times;</span> {name}
        </p>
        <p className="font-medium">{formatCurrency(totalPrice)}</p>
      </div>
      <p>{isLoadingIngredients ? "Loading..." : ingredients.join(", ")}</p>
    </li>
  );
}

export default OrderItem;
