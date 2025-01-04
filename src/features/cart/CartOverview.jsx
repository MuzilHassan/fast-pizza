function CartOverview() {
  return (
    <div className=" p-4 uppercase  bg-stone-800 text-stone-200 flex items-center justify-between">
      <p className=" font-semibold space-x-4">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <a href="#">Open cart &rarr;</a>
    </div>
  );
}

export default CartOverview;
