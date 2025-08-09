import { HiOutlineBookOpen } from "react-icons/hi2";
const EducationSection = () => {
  return (
    <div className="m-2">
      <div className="flex mt-4">
        <span>
          <HiOutlineBookOpen className="size-8" />
        </span>
        <h1 className="font-bold text-xl ml-2">Education</h1>
      </div>

      <div className="w-auto p-2 bg-slate-100 rounded h-auto mt-3 ml-3">
        <div>
          <h1 className="font-bold text">Bachelor of Technology</h1>
          <span>Teerthanker Mahaveer University, 2022-2026</span>
        </div>
        <div className="mt-2">
          <h1 className="font-bold text">In School</h1>
          <span>Class 10th - 82.16%</span>
          <br />
          <span>Class 12th - 85.6%</span>
        </div>
      </div>
    </div>
  );
};
export default EducationSection;
