export default function Button({
  children,
  className = "",
  onClick,
  type = "button",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        px-4 py-2 rounded-md border 
        transition-all duration-200 
        hover:opacity-80 active:scale-95
        ${className}
      `}
    >
      {children}
    </button>
  );
}
