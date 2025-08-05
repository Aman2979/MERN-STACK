import { IoBagAddOutline } from "react-icons/io5";
const ProjectSection = () => {
  return (
    <div className="m-2">
      <div className="flex">
        <IoBagAddOutline className="size-8" />
        <h1 className="ml-2 font-bold text-xl">Projects</h1>
      </div>

      <div className="w-auto p-4 bg-slate-100 rounded h-35 mt-3 ml-3">
        <span className="font-bold ">E-commerce Platform</span>
        <div>
          Developed a fully-function e-commerce platform with user
          authentication, product management and payment integration.
        </div>

        <div className="mt-2">
          <span className="text-blue-500 ml-2 text-sm font-bold bg-blue-100 p-1 rounded">
            React
          </span>
          <span className="text-blue-500 ml-2 text-sm font-bold bg-blue-100 p-1 rounded">
            Node.js
          </span>
          <span className="text-blue-500 ml-2 text-sm font-bold bg-blue-100 p-1 rounded">
            MonogoDB
          </span>
          <span className="text-blue-500 ml-2 text-sm font-bold bg-blue-100 p-1 rounded">
            Stripe
          </span>
        </div>
      </div>

      {/* 2nd Project Deatils */}
      <div className="w-auto p-4 bg-slate-100 rounded h-35 mt-3 ml-3">
        <span className="font-bold ">Social Media Dashbord</span>
        <div>
          Created a responsive dashboard e-commerce for social media analytics,
          featuring real-time data visualization and reporting.
        </div>

        <div className="mt-2">
          <span className="text-blue-500 ml-2 text-sm font-bold bg-blue-100 p-1 rounded">
            Vue.js
          </span>
          <span className="text-blue-500 ml-2 text-sm font-bold bg-blue-100 p-1 rounded">
            D3.js
          </span>
          <span className="text-blue-500 ml-2 text-sm font-bold bg-blue-100 p-1 rounded">
            Express
          </span>
          <span className="text-blue-500 ml-2 text-sm font-bold bg-blue-100 p-1 rounded">
            PostgreSQL
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
