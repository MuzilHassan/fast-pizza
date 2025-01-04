import { Link } from "react-router-dom";

const Button = ({ children, disabled, type, to }) => {
  const className =
    "rounded-full bg-yellow-400 px-3 py-2 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:outline-none    focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-yellow-200 ";
  const styles = {
    primary: className + " sm:px-6 sm:py-4 px-3 py-2 ",
    small: className + " px-2 py-1 md:py-2 px-4 text-xs",
  };
  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
};

export default Button;
