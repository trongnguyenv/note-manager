import s from "./style.module.css";

export function ButtonPrimary({ children, onClick, isDisabled }) {
  return (
    <button
      type="button"
      disabled={isDisabled}
      onClick={onClick}
      className={`btn btn-primary ${s.button}`}
    >
      {children}
    </button>
  );
}
