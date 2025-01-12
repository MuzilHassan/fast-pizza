import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button";
import { updateOrder } from "../../services/apiRestaurant";

function MakeOrderPriority() {
  const fetcher = useFetcher();
  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type={"primary"}>Make Priority</Button>
    </fetcher.Form>
  );
}

export const action = async ({ request, params }) => {
  const priority = { priority: true };
  await updateOrder(params.orderId, priority);

  return null;
};
export default MakeOrderPriority;
