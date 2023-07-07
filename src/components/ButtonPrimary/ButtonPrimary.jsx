import s from "./style.module.css";

export function ButtonPrimary({
  className,
  type,
  children,
  onClick,
  isDisabled,
}) {
  return (
    <button
      type={type || "button"}
      disabled={isDisabled}
      onClick={onClick}
      className={`btn btn-primary ${s.button} ${className}`}
    >
      {children}
    </button>
  );
}
