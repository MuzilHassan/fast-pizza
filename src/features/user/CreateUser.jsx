import { useState } from "react";
import Button from "../../ui/Button";
import { updateName } from "./userSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

function CreateUser() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const nav = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!username) return;
    dispatch(updateName(username));
    nav("/menu");
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4 text-lg text-stone-700">
        👋 Welcome! Please start by telling us your name:
      </p>
      {}
      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input mb-8 w-72"
      />

      {username !== "" && (
        <div>
          <Button type="primary">Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
