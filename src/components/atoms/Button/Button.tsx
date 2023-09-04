import { IButton } from "./Button.type";

export const Button: React.FC<IButton> = ({
  children,
  className = "",
  disabled = false,
  onClick,
  ...props
}) => {
  return (
    <button
      className={className}
      {...props}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
