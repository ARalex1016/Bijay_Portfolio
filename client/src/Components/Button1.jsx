const Button1 = ({ onClick, className, children }) => {
  return (
    <>
      <button
        onClick={onClick}
        className={`group box-border bg-red-500 text-slate-50 text-xl font-semibold border-none rounded-md px-8 py-1 z-10 relative before:content-[''] before:absolute before:inset-0 before:rounded-[inherit] before:w-0 hover:before:w-full before:transition-[width] ease-in duration-1000 before:h-full before:bg-darkAccent before:-z-10 ${className}`}
      >
        <span className="group-hover:text-darkSecondary transition-none">
          {children}
        </span>
      </button>
    </>
  );
};

export default Button1;
