import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";
function Home() {
  const userName = useSelector((state) => state.user.userName);
  return (
    <div className="my-10 text-center text-xl font-semibold">
      <h1 className="mb-8 text-yellow-500">
        The best pizza.
        <br />
        <span className="text-stone-700">
          {" "}
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {!userName ? (
        <CreateUser />
      ) : (
        <Button to={"/menu"} type={"primary"}>
          Start ordering {userName}
        </Button>
      )}
    </div>
  );
}

export default Home;
