const MenuItem = ({ children }) => {
  return (
    <>
      <li className="text-2xl text-center dark:text-darkAccent hover:text-slate-50 active:text-red-500 font-semibold">
        {children}
      </li>
    </>
  );
};

export default MenuItem;
