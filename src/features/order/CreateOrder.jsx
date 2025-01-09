// import { useState } from "react";

import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import store from "../../store";
import { clearCart } from "../cart/cartSlice";
import { setAddress } from "../user/userSlice";
import EmptyCart from "../cart/EmptyCart";
// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

function CreateOrder() {
  // const [withPriority, setWithPriority] = useState(false);
  const cart = useSelector((state) => state.cart.cart);
  let errors = useActionData();
  const {
    userName,
    error: addresError,
    address,
    position,
    status,
  } = useSelector((state) => state.user);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(setAddress());
  };
  if (cart.length == 0) return <EmptyCart />;
  return (
    <div className="px-4 py-6">
      <h2 className="mb-4 text-xl font-semibold">Ready to order? Lets go!</h2>

      <Form method="POST">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">First Name</label>
          <input
            type="text"
            name="customer"
            required
            className="input grow"
            defaultValue={userName}
          />
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Phone number</label>
          <div className="grow">
            <input type="tel" name="phone" required className="input w-full" />
            {errors?.phone && (
              <p className="mt-2 rounded-full bg-red-300 px-2 py-2 text-sm text-red-700">
                {errors?.phone}
              </p>
            )}
          </div>
        </div>

        <div className="relative mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <input
              type="text"
              name="address"
              required
              className="input w-full"
              defaultValue={address}
            />
            {!address && (
              <span className="absolute right-2 top-2">
                <Button
                  type={"small"}
                  handleClick={handleClick}
                  disabled={status == "loading"}
                >
                  Set Address
                </Button>
              </span>
            )}
            {addresError && (
              <p className="mt-2 rounded-full bg-red-300 px-2 py-2 text-xs text-red-700">
                {addresError}
              </p>
            )}
          </div>
        </div>
        <div>
          <input name="cart" hidden value={JSON.stringify(cart)} />
        </div>
        <div>
          <input
            name="position"
            hidden
            defaultValue={
              position?.latitude && position?.longitude
                ? JSON.stringify(position)
                : ""
            }
          />
        </div>

        <div className="flex items-center gap-4">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            className="h-6 w-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-1"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority" className="font-semibold">
            Want to yo give your order priority?
          </label>
        </div>

        <div className="mt-4">
          <Button disabled={navigation.state === "submitting"} type={"primary"}>
            Order now
          </Button>
        </div>
      </Form>
    </div>
  );
}

export const Action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const position =
    data.position === ""
      ? "Position is not provided"
      : `Latitude:${JSON.parse(data.position).latitude}, Longitude:${JSON.parse(data.position).longitude}`;

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority == "on",
    position,
  };

  let errors = {};

  if (!isValidPhone(data.phone))
    errors.phone = "Please enter correct phone number";

  if (Object.keys(errors).length > 0) return errors;
  store.dispatch(clearCart());
  const newOrder = await createOrder(order);
  return redirect(`/order/${newOrder.id}`);
};

export default CreateOrder;
