import { formatCurrency } from "../../utils/helpers";

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li>
      <div className="flex items-center justify-between py-3">
        <p>
          <span className="font-medium">{quantity}&times;</span> {name}
        </p>
        <p className="font-medium">{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default OrderItem;
