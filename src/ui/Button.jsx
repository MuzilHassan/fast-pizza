import { Link } from "react-router-dom";

const Button = ({ children, disabled, type, to, handleClick }) => {
  const className =
    "rounded-full bg-yellow-400 px-3 py-2 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:outline-none    focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-yellow-200 ";
  const styles = {
    primary: className + " sm:px-6 sm:py-4 px-3 py-2 ",
    small: className + " px-2 py-1 md:py-2 px-4 text-xs",
    secondary:
      "rounded-full border-2 border-stone-300 bg-transparent px-3 py-2 font-semibold uppercase tracking-wide text-stone-500 transition-colors duration-300 hover:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-300 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-stone-200 px-2 py-1 md:py-2 px-4 text-xs",
  };
  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  if (handleClick)
    return (
      <button
        disabled={disabled}
        className={styles[type]}
        onClick={handleClick}
      >
        {children}
      </button>
    );
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
};

export default Button;
