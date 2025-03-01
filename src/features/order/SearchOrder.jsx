import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchOrder = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Searxh order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-28 rounded-full bg-yellow-100 px-3 py-2 text-sm transition-all duration-500 placeholder:text-slate-400 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-5 sm:w-64 sm:focus:w-72"
      />
    </form>
  );
};

export default SearchOrder;
