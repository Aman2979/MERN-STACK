const Button = ({btnType, btnText, addHandler}) => {
  if (btnType === "success") {
    return (
      <button className="btn btn-success addBtn" onClick={addHandler}>
        {btnText}
      </button>
    );
  } else if (btnType === "danger") {
    return (
      <button className="btn btn-danger" onClick={addHandler}>
        {btnText}
      </button>
    );
  } else {
    return (
      <button className="btn btn-primary" onClick={addHandler}>
        {btnText}
      </button>
    );
  }
};

export default Button;
