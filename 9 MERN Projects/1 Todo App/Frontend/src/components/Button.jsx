const Button = ({btnType, btnText, handler}) => {

  let classes =
    "inline-flex items-center px-4 py-2 rounded-md font-semibold focus:outline-none transition-colors duration-200 shadow-md ";

  if (btnType === 'success') {
    classes += "bg-gradient-to-r from-green-400 to-green-600 text-white hover:from-green-500 hover:to-green-700";
  } else if (btnType === 'danger') {
    classes += "bg-gradient-to-r from-red-400 to-red-600 text-white hover:from-red-500 hover:to-red-700";
  } else {
    classes += "bg-gradient-to-r from-blue-400 to-blue-600 text-white hover:from-blue-500 hover:to-blue-700";
  }

  return (
    <button className={classes} onClick={handler}>
      <span className="truncate">{btnText}</span>
    </button>
  );
};

export default Button;