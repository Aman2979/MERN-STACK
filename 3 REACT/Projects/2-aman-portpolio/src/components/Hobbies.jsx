import { IoMdHeartEmpty } from "react-icons/io";

const Hobbies = () => {
  return (
    <div className="m-2">
      <div className="flex mt-4">
        <span>
          <IoMdHeartEmpty className="size-8" />
        </span>
        <h1 className="font-bold text-xl ml-2">Hobbies & Interests</h1>
      </div>

      <div className="w-auto p-2 bg-slate-100 rounded h-auto mt-3 ml-3">
        <ol className="list-decimal ml-4">
          <li>Problem Solving</li>
          <li>Wacthing love movies</li>
          <li>Reading Books</li>
          <li>Learning new things</li>
          <li>Palying Pubg</li>
        </ol>
      </div>
    </div>
  );
};

export default Hobbies;
