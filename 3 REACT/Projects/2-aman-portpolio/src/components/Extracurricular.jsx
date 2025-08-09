import { FaRegArrowAltCircleRight } from "react-icons/fa";

const Extracurricular = () => {
  return <div className="m-2">
        <div className="flex mt-4">
          <span>
            <FaRegArrowAltCircleRight className="size-8"/>
          </span>
          <h1 className="font-bold text-xl ml-2">Extracurricular Activites</h1>
        </div>
  
        <div className="w-auto p-2 bg-slate-100 rounded h-auto mt-3 ml-3">
          <ol className="list-decimal ml-4">
            <li>Problem Solving</li>
            <li>Wacthing love movies</li>
          </ol>
        </div>
      </div>;
};

export default Extracurricular;
