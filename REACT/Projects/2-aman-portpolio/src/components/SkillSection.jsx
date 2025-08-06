import { SiHyperskill } from "react-icons/si";
const SkillSection = () => {
  return (
    <div className="m-2">
      <div className="flex">
        <SiHyperskill className="size-8 mt-4" />
        <h1 className="font-bold text-xl ml-2 mt-3">Skills</h1>
      </div>

      <div className="w-auto p-2 bg-slate-100 rounded h-auto mt-3 ml-3">
        <div className="mt-2">
          <span className="text-blue-500 ml-2 text-sm font-bold bg-blue-100 p-1 rounded">
            DSA in java
          </span>
          <span className="text-blue-500 ml-2 text-sm font-bold bg-blue-100 p-1 rounded">
            HTML
          </span>
          <span className="text-blue-500 ml-2 text-sm font-bold bg-blue-100 p-1 rounded">
            CSS
          </span>
          <span className="text-blue-500 ml-2 text-sm font-bold bg-blue-100 p-1 rounded">
            JAVASCRIPT
          </span>
          <span className="text-blue-500 ml-2 text-sm font-bold bg-blue-100 p-1 rounded">
            REACT
          </span>
          <span className="text-blue-500 ml-2 text-sm font-bold bg-blue-100 p-1 rounded">
            GIT
          </span>
          <span className="text-blue-500 ml-2 text-sm font-bold bg-blue-100 p-1 rounded">
            GITHUB
          </span>
          <div className="mt-4">
            <h1 className="font-bold text-l ml-2 mb-2">Fimilar</h1>
            <span className="text-blue-500 ml-2 text-sm font-bold bg-blue-100 p-1 rounded">
            C
          </span>
          <span className="text-blue-500 ml-2 text-sm font-bold bg-blue-100 p-1 rounded">
            C++
          </span>
          <span className="text-blue-500 ml-2 text-sm font-bold bg-blue-100 p-1 rounded">
            Python
          </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillSection;
