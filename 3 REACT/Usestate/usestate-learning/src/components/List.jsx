const List = ({ list }) => {
  return (
    <>
      {!list || list.length === 0 ? (
        <h1>There is no student</h1>
      ) : (
        <h1>Your Students are here</h1>
      )}

      {list.map((st, ind) => (
        <li
          key={ind}
          className="ml-2 mt-4 list-none bg-red-500 w-20 rounded text-center"
        >
          {st}
        </li>
      ))}
    </>
  );
};

export default List;
