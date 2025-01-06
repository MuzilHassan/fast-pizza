import { useSelector } from "react-redux";

const UserName = () => {
  const name = useSelector((state) => state.user.userName);

  if (!name) return null;
  return <h1 className="hidden text-sm font-semibold md:block">{name}</h1>;
};

export default UserName;
